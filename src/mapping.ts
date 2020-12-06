import { BigInt } from "@graphprotocol/graph-ts"
import {
  AlpacaCore,
  ApprovalForAll,
  BornBatch,
  BornSingle,
  EnergyChanged,
  GrantedToBreed,
  Hatched,
  OwnershipTransferred,
  Paused,
  TransferBatch,
  TransferSingle,
  URI,
  Unpaused
} from "../generated/AlpacaCore/AlpacaCore"
import { _ApprovalForAll, _BornSingle, _EnergyChanged,
_GrantedToBreed, _Hatched, _OwnershipTransferred, _TransferSingle } from "../generated/schema"

export function handleApprovalForAll(event: ApprovalForAll): void {
  let entity = _ApprovalForAll.load(event.params.account.toHex())

  if (entity == null) {
    entity = new _ApprovalForAll(event.params.account.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.account = event.params.account
  entity.operator = event.params.operator
  entity.save()
}

export function handleBornBatch(event: BornBatch): void {}

export function handleBornSingle(event: BornSingle): void {
  let entity = _BornSingle.load(event.params.alpacaId.toString())

  if (entity == null) {
    entity = new _BornSingle(event.params.alpacaId.toString())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.gene = event.params.gene
  entity.energy = event.params.energy
  entity.save()
}

export function handleEnergyChanged(event: EnergyChanged): void {
  let entity = _EnergyChanged.load(event.params.oldEnergy.toString())

  if (entity == null) {
    entity = new _EnergyChanged(event.params.oldEnergy.toString())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.oldEnergy = event.params.oldEnergy
  entity.newEnergy = event.params.newEnergy
  entity.save()
}

export function handleGrantedToBreed(event: GrantedToBreed): void {
  let entity = _GrantedToBreed.load(event.params.alpacaId.toString())

  if (entity == null) {
    entity = new _GrantedToBreed(event.params.alpacaId.toString())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.alpacaId = event.params.alpacaId
  entity.addr = event.params.addr
  entity.save()
}

export function handleHatched(event: Hatched): void {
  let entity = _Hatched.load(event.params.eggId.toString())

  if (entity == null) {
    entity = new _Hatched(event.params.eggId.toString())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.eggId = event.params.eggId
  entity.matronId = event.params.matronId
  entity.sireId = event.params.sireId
  entity.cooldownEndBlock = event.params.cooldownEndBlock
  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {
  let entity = _OwnershipTransferred.load(event.params.previousOwner.toString())

  if (entity == null) {
    entity = new _OwnershipTransferred(event.params.previousOwner.toString())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handlePaused(event: Paused): void {}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {
  let entity = _TransferSingle.load(event.params.operator.toString())

  if (entity == null) {
    entity = new _TransferSingle(event.params.operator.toString())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.operator = event.params.operator
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleURI(event: URI): void {}

export function handleUnpaused(event: Unpaused): void {}
