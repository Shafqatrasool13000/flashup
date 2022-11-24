/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface RegistryInterface extends ethers.utils.Interface {
  functions: {
    "DEPRECATED()": FunctionFragment;
    "ban(address)": FunctionFragment;
    "bannedAgents(address)": FunctionFragment;
    "callers(address)": FunctionFragment;
    "fHalt()": FunctionFragment;
    "halt()": FunctionFragment;
    "handlers(address)": FunctionFragment;
    "isValidCaller(address)": FunctionFragment;
    "isValidHandler(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "register(address,bytes32)": FunctionFragment;
    "registerCaller(address,bytes32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unban(address)": FunctionFragment;
    "unhalt()": FunctionFragment;
    "unregister(address)": FunctionFragment;
    "unregisterCaller(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEPRECATED",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "ban", values: [string]): string;
  encodeFunctionData(
    functionFragment: "bannedAgents",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "callers", values: [string]): string;
  encodeFunctionData(functionFragment: "fHalt", values?: undefined): string;
  encodeFunctionData(functionFragment: "halt", values?: undefined): string;
  encodeFunctionData(functionFragment: "handlers", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isValidCaller",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidHandler",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "register",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerCaller",
    values: [string, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "unban", values: [string]): string;
  encodeFunctionData(functionFragment: "unhalt", values?: undefined): string;
  encodeFunctionData(functionFragment: "unregister", values: [string]): string;
  encodeFunctionData(
    functionFragment: "unregisterCaller",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "DEPRECATED", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ban", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "bannedAgents",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callers", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fHalt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "halt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "handlers", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isValidHandler",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unban", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unhalt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unregister", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unregisterCaller",
    data: BytesLike
  ): Result;

  events: {
    "Banned(address)": EventFragment;
    "CallerRegistered(address,bytes32)": EventFragment;
    "CallerUnregistered(address)": EventFragment;
    "Halted()": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Registered(address,bytes32)": EventFragment;
    "Unbanned(address)": EventFragment;
    "Unhalted()": EventFragment;
    "Unregistered(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Banned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallerRegistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallerUnregistered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Halted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Registered"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unbanned"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unhalted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unregistered"): EventFragment;
}

export type BannedEvent = TypedEvent<[string] & { agent: string }>;

export type CallerRegisteredEvent = TypedEvent<
  [string, string] & { registration: string; info: string }
>;

export type CallerUnregisteredEvent = TypedEvent<
  [string] & { registration: string }
>;

export type HaltedEvent = TypedEvent<[] & {}>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RegisteredEvent = TypedEvent<
  [string, string] & { registration: string; info: string }
>;

export type UnbannedEvent = TypedEvent<[string] & { agent: string }>;

export type UnhaltedEvent = TypedEvent<[] & {}>;

export type UnregisteredEvent = TypedEvent<[string] & { registration: string }>;

export class Registry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: RegistryInterface;

  functions: {
    DEPRECATED(overrides?: CallOverrides): Promise<[string]>;

    ban(
      agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    bannedAgents(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    callers(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    fHalt(overrides?: CallOverrides): Promise<[boolean]>;

    halt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    handlers(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    isValidCaller(
      caller: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isValidHandler(
      handler: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    register(
      registration: string,
      info: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerCaller(
      registration: string,
      info: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unban(
      agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unhalt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregister(
      registration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unregisterCaller(
      registration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  DEPRECATED(overrides?: CallOverrides): Promise<string>;

  ban(
    agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  bannedAgents(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callers(arg0: string, overrides?: CallOverrides): Promise<string>;

  fHalt(overrides?: CallOverrides): Promise<boolean>;

  halt(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  handlers(arg0: string, overrides?: CallOverrides): Promise<string>;

  isValidCaller(caller: string, overrides?: CallOverrides): Promise<boolean>;

  isValidHandler(handler: string, overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  register(
    registration: string,
    info: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerCaller(
    registration: string,
    info: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unban(
    agent: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unhalt(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregister(
    registration: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unregisterCaller(
    registration: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    DEPRECATED(overrides?: CallOverrides): Promise<string>;

    ban(agent: string, overrides?: CallOverrides): Promise<void>;

    bannedAgents(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    callers(arg0: string, overrides?: CallOverrides): Promise<string>;

    fHalt(overrides?: CallOverrides): Promise<boolean>;

    halt(overrides?: CallOverrides): Promise<void>;

    handlers(arg0: string, overrides?: CallOverrides): Promise<string>;

    isValidCaller(caller: string, overrides?: CallOverrides): Promise<boolean>;

    isValidHandler(
      handler: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    register(
      registration: string,
      info: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    registerCaller(
      registration: string,
      info: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unban(agent: string, overrides?: CallOverrides): Promise<void>;

    unhalt(overrides?: CallOverrides): Promise<void>;

    unregister(registration: string, overrides?: CallOverrides): Promise<void>;

    unregisterCaller(
      registration: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Banned(address)"(
      agent?: string | null
    ): TypedEventFilter<[string], { agent: string }>;

    Banned(
      agent?: string | null
    ): TypedEventFilter<[string], { agent: string }>;

    "CallerRegistered(address,bytes32)"(
      registration?: string | null,
      info?: null
    ): TypedEventFilter<
      [string, string],
      { registration: string; info: string }
    >;

    CallerRegistered(
      registration?: string | null,
      info?: null
    ): TypedEventFilter<
      [string, string],
      { registration: string; info: string }
    >;

    "CallerUnregistered(address)"(
      registration?: string | null
    ): TypedEventFilter<[string], { registration: string }>;

    CallerUnregistered(
      registration?: string | null
    ): TypedEventFilter<[string], { registration: string }>;

    "Halted()"(): TypedEventFilter<[], {}>;

    Halted(): TypedEventFilter<[], {}>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "Registered(address,bytes32)"(
      registration?: string | null,
      info?: null
    ): TypedEventFilter<
      [string, string],
      { registration: string; info: string }
    >;

    Registered(
      registration?: string | null,
      info?: null
    ): TypedEventFilter<
      [string, string],
      { registration: string; info: string }
    >;

    "Unbanned(address)"(
      agent?: string | null
    ): TypedEventFilter<[string], { agent: string }>;

    Unbanned(
      agent?: string | null
    ): TypedEventFilter<[string], { agent: string }>;

    "Unhalted()"(): TypedEventFilter<[], {}>;

    Unhalted(): TypedEventFilter<[], {}>;

    "Unregistered(address)"(
      registration?: string | null
    ): TypedEventFilter<[string], { registration: string }>;

    Unregistered(
      registration?: string | null
    ): TypedEventFilter<[string], { registration: string }>;
  };

  estimateGas: {
    DEPRECATED(overrides?: CallOverrides): Promise<BigNumber>;

    ban(
      agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    bannedAgents(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    callers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    fHalt(overrides?: CallOverrides): Promise<BigNumber>;

    halt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    handlers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    isValidCaller(
      caller: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isValidHandler(
      handler: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    register(
      registration: string,
      info: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerCaller(
      registration: string,
      info: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unban(
      agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unhalt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregister(
      registration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unregisterCaller(
      registration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DEPRECATED(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ban(
      agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    bannedAgents(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fHalt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    halt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    handlers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidCaller(
      caller: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isValidHandler(
      handler: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    register(
      registration: string,
      info: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerCaller(
      registration: string,
      info: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unban(
      agent: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unhalt(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregister(
      registration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unregisterCaller(
      registration: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}