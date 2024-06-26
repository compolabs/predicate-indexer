/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.77.0
  Forc version: 0.51.1
  Fuel-Core version: 0.22.1
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Option, Enum } from "./common";

export enum ErrorsInput { InvalidPayment = 'InvalidPayment', InvalidPredicateRoot = 'InvalidPredicateRoot' };
export enum ErrorsOutput { InvalidPayment = 'InvalidPayment', InvalidPredicateRoot = 'InvalidPredicateRoot' };
export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;
export enum OrderTypeInput { SELL = 'SELL', BUY = 'BUY' };
export enum OrderTypeOutput { SELL = 'SELL', BUY = 'BUY' };

export type AddressInput = { value: string };
export type AddressOutput = AddressInput;
export type AssetIdInput = { value: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { value: string };
export type ContractIdOutput = ContractIdInput;
export type CreateOrderEventInput = { predicate_root: AddressInput, maker: IdentityInput, price: BigNumberish, base_asset: AssetIdInput, quote_asset: AssetIdInput, base_amount: BigNumberish, order_type: OrderTypeInput, min_fulfill_base_amount: Option<BigNumberish> };
export type CreateOrderEventOutput = { predicate_root: AddressOutput, maker: IdentityOutput, price: BN, base_asset: AssetIdOutput, quote_asset: AssetIdOutput, base_amount: BN, order_type: OrderTypeOutput, min_fulfill_base_amount: Option<BN> };

export type ProxyContractAbiConfigurables = {
  BASE_ASSET: AssetIdInput;
  QUOTE_ASSET: AssetIdInput;
  BASE_ASSET_DECIMALS: BigNumberish;
  QUOTE_ASSET_DECIMALS: BigNumberish;
  PRICE_DECIMALS: BigNumberish;
};

interface ProxyContractAbiInterface extends Interface {
  functions: {
    create_order: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'create_order', values: [BigNumberish, AddressInput, Option<BigNumberish>]): Uint8Array;

  decodeFunctionData(functionFragment: 'create_order', data: BytesLike): DecodedValue;
}

export class ProxyContractAbi extends Contract {
  interface: ProxyContractAbiInterface;
  functions: {
    create_order: InvokeFunction<[price: BigNumberish, predicate_root: AddressInput, min_fulfill_base_amount: Option<BigNumberish>], void>;
  };
}
