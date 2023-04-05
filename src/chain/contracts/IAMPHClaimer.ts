/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface IAMPHClaimerInterface extends utils.Interface {
  functions: {
    'AMPH()': FunctionFragment;
    'CRV()': FunctionFragment;
    'CVX()': FunctionFragment;
    'amphPerCrv()': FunctionFragment;
    'amphPerCvx()': FunctionFragment;
    'changeCrvRate(uint256)': FunctionFragment;
    'changeCrvRewardFee(uint256)': FunctionFragment;
    'changeCvxRate(uint256)': FunctionFragment;
    'changeCvxRewardFee(uint256)': FunctionFragment;
    'changeVaultController(address)': FunctionFragment;
    'claimAmph(uint96,uint256,uint256,address)': FunctionFragment;
    'claimable(uint256,uint256)': FunctionFragment;
    'crvRewardFee()': FunctionFragment;
    'cvxRewardFee()': FunctionFragment;
    'recoverDust(address,uint256)': FunctionFragment;
    'vaultController()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'AMPH'
      | 'CRV'
      | 'CVX'
      | 'amphPerCrv'
      | 'amphPerCvx'
      | 'changeCrvRate'
      | 'changeCrvRewardFee'
      | 'changeCvxRate'
      | 'changeCvxRewardFee'
      | 'changeVaultController'
      | 'claimAmph'
      | 'claimable'
      | 'crvRewardFee'
      | 'cvxRewardFee'
      | 'recoverDust'
      | 'vaultController',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'AMPH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'CRV', values?: undefined): string;
  encodeFunctionData(functionFragment: 'CVX', values?: undefined): string;
  encodeFunctionData(functionFragment: 'amphPerCrv', values?: undefined): string;
  encodeFunctionData(functionFragment: 'amphPerCvx', values?: undefined): string;
  encodeFunctionData(functionFragment: 'changeCrvRate', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'changeCrvRewardFee', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'changeCvxRate', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'changeCvxRewardFee', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'changeVaultController', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'claimAmph',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'claimable',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'crvRewardFee', values?: undefined): string;
  encodeFunctionData(functionFragment: 'cvxRewardFee', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'recoverDust',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'vaultController', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'AMPH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'CRV', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'CVX', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'amphPerCrv', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'amphPerCvx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeCrvRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeCrvRewardFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeCvxRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeCvxRewardFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'changeVaultController', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimAmph', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'crvRewardFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'cvxRewardFee', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'recoverDust', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vaultController', data: BytesLike): Result;

  events: {
    'ChangedCrvRate(uint256)': EventFragment;
    'ChangedCrvRewardFee(uint256)': EventFragment;
    'ChangedCvxRate(uint256)': EventFragment;
    'ChangedCvxRewardFee(uint256)': EventFragment;
    'ChangedVaultController(address)': EventFragment;
    'ClaimedAmph(address,uint256,uint256,uint256)': EventFragment;
    'RecoveredDust(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ChangedCrvRate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ChangedCrvRewardFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ChangedCvxRate'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ChangedCvxRewardFee'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ChangedVaultController'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ClaimedAmph'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'RecoveredDust'): EventFragment;
}

export interface ChangedCrvRateEventObject {
  _newCrvRate: BigNumber;
}
export type ChangedCrvRateEvent = TypedEvent<[BigNumber], ChangedCrvRateEventObject>;

export type ChangedCrvRateEventFilter = TypedEventFilter<ChangedCrvRateEvent>;

export interface ChangedCrvRewardFeeEventObject {
  _newCrvReward: BigNumber;
}
export type ChangedCrvRewardFeeEvent = TypedEvent<[BigNumber], ChangedCrvRewardFeeEventObject>;

export type ChangedCrvRewardFeeEventFilter = TypedEventFilter<ChangedCrvRewardFeeEvent>;

export interface ChangedCvxRateEventObject {
  _newCvxRate: BigNumber;
}
export type ChangedCvxRateEvent = TypedEvent<[BigNumber], ChangedCvxRateEventObject>;

export type ChangedCvxRateEventFilter = TypedEventFilter<ChangedCvxRateEvent>;

export interface ChangedCvxRewardFeeEventObject {
  _newCvxReward: BigNumber;
}
export type ChangedCvxRewardFeeEvent = TypedEvent<[BigNumber], ChangedCvxRewardFeeEventObject>;

export type ChangedCvxRewardFeeEventFilter = TypedEventFilter<ChangedCvxRewardFeeEvent>;

export interface ChangedVaultControllerEventObject {
  _newVaultController: string;
}
export type ChangedVaultControllerEvent = TypedEvent<[string], ChangedVaultControllerEventObject>;

export type ChangedVaultControllerEventFilter = TypedEventFilter<ChangedVaultControllerEvent>;

export interface ClaimedAmphEventObject {
  _vaultClaimer: string;
  _cvxTotalRewards: BigNumber;
  _crvTotalRewards: BigNumber;
  _amphAmount: BigNumber;
}
export type ClaimedAmphEvent = TypedEvent<[string, BigNumber, BigNumber, BigNumber], ClaimedAmphEventObject>;

export type ClaimedAmphEventFilter = TypedEventFilter<ClaimedAmphEvent>;

export interface RecoveredDustEventObject {
  _token: string;
  _receiver: string;
  _amount: BigNumber;
}
export type RecoveredDustEvent = TypedEvent<[string, string, BigNumber], RecoveredDustEventObject>;

export type RecoveredDustEventFilter = TypedEventFilter<RecoveredDustEvent>;

export interface IAMPHClaimer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAMPHClaimerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AMPH(overrides?: CallOverrides): Promise<[string] & { _AMPH: string }>;

    CRV(overrides?: CallOverrides): Promise<[string] & { _CVX: string }>;

    CVX(overrides?: CallOverrides): Promise<[string] & { _CVX: string }>;

    amphPerCrv(overrides?: CallOverrides): Promise<[BigNumber] & { _amphPerCrv: BigNumber }>;

    amphPerCvx(overrides?: CallOverrides): Promise<[BigNumber] & { _amphPerCvx: BigNumber }>;

    changeCrvRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    changeCrvRewardFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    changeCvxRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    changeCvxRewardFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    changeVaultController(
      _newVaultController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimAmph(
      _vaultId: PromiseOrValue<BigNumberish>,
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    claimable(
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _cvxAmountToSend: BigNumber;
        _crvAmountToSend: BigNumber;
        _claimableAmph: BigNumber;
      }
    >;

    crvRewardFee(overrides?: CallOverrides): Promise<[BigNumber] & { _crvRewardFee: BigNumber }>;

    cvxRewardFee(overrides?: CallOverrides): Promise<[BigNumber] & { _cvxRewardFee: BigNumber }>;

    recoverDust(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    vaultController(overrides?: CallOverrides): Promise<[string] & { _vaultController: string }>;
  };

  AMPH(overrides?: CallOverrides): Promise<string>;

  CRV(overrides?: CallOverrides): Promise<string>;

  CVX(overrides?: CallOverrides): Promise<string>;

  amphPerCrv(overrides?: CallOverrides): Promise<BigNumber>;

  amphPerCvx(overrides?: CallOverrides): Promise<BigNumber>;

  changeCrvRate(
    _newRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  changeCrvRewardFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  changeCvxRate(
    _newRate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  changeCvxRewardFee(
    _newFee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  changeVaultController(
    _newVaultController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimAmph(
    _vaultId: PromiseOrValue<BigNumberish>,
    _cvxTotalRewards: PromiseOrValue<BigNumberish>,
    _crvTotalRewards: PromiseOrValue<BigNumberish>,
    _receiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  claimable(
    _cvxTotalRewards: PromiseOrValue<BigNumberish>,
    _crvTotalRewards: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      _cvxAmountToSend: BigNumber;
      _crvAmountToSend: BigNumber;
      _claimableAmph: BigNumber;
    }
  >;

  crvRewardFee(overrides?: CallOverrides): Promise<BigNumber>;

  cvxRewardFee(overrides?: CallOverrides): Promise<BigNumber>;

  recoverDust(
    _token: PromiseOrValue<string>,
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  vaultController(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    AMPH(overrides?: CallOverrides): Promise<string>;

    CRV(overrides?: CallOverrides): Promise<string>;

    CVX(overrides?: CallOverrides): Promise<string>;

    amphPerCrv(overrides?: CallOverrides): Promise<BigNumber>;

    amphPerCvx(overrides?: CallOverrides): Promise<BigNumber>;

    changeCrvRate(_newRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    changeCrvRewardFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    changeCvxRate(_newRate: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    changeCvxRewardFee(_newFee: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    changeVaultController(_newVaultController: PromiseOrValue<string>, overrides?: CallOverrides): Promise<void>;

    claimAmph(
      _vaultId: PromiseOrValue<BigNumberish>,
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _cvxAmountToSend: BigNumber;
        _crvAmountToSend: BigNumber;
        _claimedAmph: BigNumber;
      }
    >;

    claimable(
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        _cvxAmountToSend: BigNumber;
        _crvAmountToSend: BigNumber;
        _claimableAmph: BigNumber;
      }
    >;

    crvRewardFee(overrides?: CallOverrides): Promise<BigNumber>;

    cvxRewardFee(overrides?: CallOverrides): Promise<BigNumber>;

    recoverDust(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    vaultController(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    'ChangedCrvRate(uint256)'(_newCrvRate?: null): ChangedCrvRateEventFilter;
    ChangedCrvRate(_newCrvRate?: null): ChangedCrvRateEventFilter;

    'ChangedCrvRewardFee(uint256)'(_newCrvReward?: null): ChangedCrvRewardFeeEventFilter;
    ChangedCrvRewardFee(_newCrvReward?: null): ChangedCrvRewardFeeEventFilter;

    'ChangedCvxRate(uint256)'(_newCvxRate?: null): ChangedCvxRateEventFilter;
    ChangedCvxRate(_newCvxRate?: null): ChangedCvxRateEventFilter;

    'ChangedCvxRewardFee(uint256)'(_newCvxReward?: null): ChangedCvxRewardFeeEventFilter;
    ChangedCvxRewardFee(_newCvxReward?: null): ChangedCvxRewardFeeEventFilter;

    'ChangedVaultController(address)'(_newVaultController?: null): ChangedVaultControllerEventFilter;
    ChangedVaultController(_newVaultController?: null): ChangedVaultControllerEventFilter;

    'ClaimedAmph(address,uint256,uint256,uint256)'(
      _vaultClaimer?: null,
      _cvxTotalRewards?: null,
      _crvTotalRewards?: null,
      _amphAmount?: null,
    ): ClaimedAmphEventFilter;
    ClaimedAmph(
      _vaultClaimer?: null,
      _cvxTotalRewards?: null,
      _crvTotalRewards?: null,
      _amphAmount?: null,
    ): ClaimedAmphEventFilter;

    'RecoveredDust(address,address,uint256)'(_token?: null, _receiver?: null, _amount?: null): RecoveredDustEventFilter;
    RecoveredDust(_token?: null, _receiver?: null, _amount?: null): RecoveredDustEventFilter;
  };

  estimateGas: {
    AMPH(overrides?: CallOverrides): Promise<BigNumber>;

    CRV(overrides?: CallOverrides): Promise<BigNumber>;

    CVX(overrides?: CallOverrides): Promise<BigNumber>;

    amphPerCrv(overrides?: CallOverrides): Promise<BigNumber>;

    amphPerCvx(overrides?: CallOverrides): Promise<BigNumber>;

    changeCrvRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    changeCrvRewardFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    changeCvxRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    changeCvxRewardFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    changeVaultController(
      _newVaultController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimAmph(
      _vaultId: PromiseOrValue<BigNumberish>,
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    claimable(
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    crvRewardFee(overrides?: CallOverrides): Promise<BigNumber>;

    cvxRewardFee(overrides?: CallOverrides): Promise<BigNumber>;

    recoverDust(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    vaultController(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    AMPH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CRV(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    amphPerCrv(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    amphPerCvx(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeCrvRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    changeCrvRewardFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    changeCvxRate(
      _newRate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    changeCvxRewardFee(
      _newFee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    changeVaultController(
      _newVaultController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimAmph(
      _vaultId: PromiseOrValue<BigNumberish>,
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      _receiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    claimable(
      _cvxTotalRewards: PromiseOrValue<BigNumberish>,
      _crvTotalRewards: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    crvRewardFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cvxRewardFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recoverDust(
      _token: PromiseOrValue<string>,
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    vaultController(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
