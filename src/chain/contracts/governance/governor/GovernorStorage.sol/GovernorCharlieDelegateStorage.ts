/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../../../common';

export interface GovernorCharlieDelegateStorageInterface extends utils.Interface {
  functions: {
    'emergencyQuorumVotes()': FunctionFragment;
    'emergencyTimelockDelay()': FunctionFragment;
    'emergencyVotingPeriod()': FunctionFragment;
    'implementation()': FunctionFragment;
    'initialProposalId()': FunctionFragment;
    'initialized()': FunctionFragment;
    'ipt()': FunctionFragment;
    'latestProposalIds(address)': FunctionFragment;
    'proposalCount()': FunctionFragment;
    'proposalReceipts(uint256,address)': FunctionFragment;
    'proposalThreshold()': FunctionFragment;
    'proposalTimelockDelay()': FunctionFragment;
    'proposals(uint256)': FunctionFragment;
    'queuedTransactions(bytes32)': FunctionFragment;
    'quorumVotes()': FunctionFragment;
    'votingDelay()': FunctionFragment;
    'votingPeriod()': FunctionFragment;
    'whitelistAccountExpirations(address)': FunctionFragment;
    'whitelistGuardian()': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'emergencyQuorumVotes'
      | 'emergencyQuorumVotes()'
      | 'emergencyTimelockDelay'
      | 'emergencyTimelockDelay()'
      | 'emergencyVotingPeriod'
      | 'emergencyVotingPeriod()'
      | 'implementation'
      | 'implementation()'
      | 'initialProposalId'
      | 'initialProposalId()'
      | 'initialized'
      | 'initialized()'
      | 'ipt'
      | 'ipt()'
      | 'latestProposalIds'
      | 'latestProposalIds(address)'
      | 'proposalCount'
      | 'proposalCount()'
      | 'proposalReceipts'
      | 'proposalReceipts(uint256,address)'
      | 'proposalThreshold'
      | 'proposalThreshold()'
      | 'proposalTimelockDelay'
      | 'proposalTimelockDelay()'
      | 'proposals'
      | 'proposals(uint256)'
      | 'queuedTransactions'
      | 'queuedTransactions(bytes32)'
      | 'quorumVotes'
      | 'quorumVotes()'
      | 'votingDelay'
      | 'votingDelay()'
      | 'votingPeriod'
      | 'votingPeriod()'
      | 'whitelistAccountExpirations'
      | 'whitelistAccountExpirations(address)'
      | 'whitelistGuardian'
      | 'whitelistGuardian()',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'emergencyQuorumVotes', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyQuorumVotes()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyTimelockDelay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyTimelockDelay()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyVotingPeriod', values?: undefined): string;
  encodeFunctionData(functionFragment: 'emergencyVotingPeriod()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'implementation', values?: undefined): string;
  encodeFunctionData(functionFragment: 'implementation()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialProposalId', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialProposalId()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialized', values?: undefined): string;
  encodeFunctionData(functionFragment: 'initialized()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ipt', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ipt()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'latestProposalIds', values: [string]): string;
  encodeFunctionData(functionFragment: 'latestProposalIds(address)', values: [string]): string;
  encodeFunctionData(functionFragment: 'proposalCount', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposalCount()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposalReceipts', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'proposalReceipts(uint256,address)', values: [BigNumberish, string]): string;
  encodeFunctionData(functionFragment: 'proposalThreshold', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposalThreshold()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposalTimelockDelay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposalTimelockDelay()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'proposals', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'proposals(uint256)', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'queuedTransactions', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'queuedTransactions(bytes32)', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'quorumVotes', values?: undefined): string;
  encodeFunctionData(functionFragment: 'quorumVotes()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'votingDelay', values?: undefined): string;
  encodeFunctionData(functionFragment: 'votingDelay()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'votingPeriod', values?: undefined): string;
  encodeFunctionData(functionFragment: 'votingPeriod()', values?: undefined): string;
  encodeFunctionData(functionFragment: 'whitelistAccountExpirations', values: [string]): string;
  encodeFunctionData(functionFragment: 'whitelistAccountExpirations(address)', values: [string]): string;
  encodeFunctionData(functionFragment: 'whitelistGuardian', values?: undefined): string;
  encodeFunctionData(functionFragment: 'whitelistGuardian()', values?: undefined): string;

  decodeFunctionResult(functionFragment: 'emergencyQuorumVotes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyQuorumVotes()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyTimelockDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyTimelockDelay()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyVotingPeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'emergencyVotingPeriod()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'implementation', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'implementation()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialProposalId', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialProposalId()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialized', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialized()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ipt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ipt()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'latestProposalIds', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'latestProposalIds(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalCount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalCount()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalReceipts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalReceipts(uint256,address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalThreshold', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalThreshold()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalTimelockDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposalTimelockDelay()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'proposals(uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queuedTransactions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queuedTransactions(bytes32)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'quorumVotes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'quorumVotes()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'votingDelay', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'votingDelay()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'votingPeriod', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'votingPeriod()', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'whitelistAccountExpirations', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'whitelistAccountExpirations(address)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'whitelistGuardian', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'whitelistGuardian()', data: BytesLike): Result;

  events: {};
}

export interface GovernorCharlieDelegateStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GovernorCharlieDelegateStorageInterface;

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
    emergencyQuorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;

    'emergencyQuorumVotes()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    emergencyTimelockDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    'emergencyTimelockDelay()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    emergencyVotingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    'emergencyVotingPeriod()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    'implementation()'(overrides?: CallOverrides): Promise<[string]>;

    initialProposalId(overrides?: CallOverrides): Promise<[BigNumber]>;

    'initialProposalId()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    'initialized()'(overrides?: CallOverrides): Promise<[boolean]>;

    ipt(overrides?: CallOverrides): Promise<[string]>;

    'ipt()'(overrides?: CallOverrides): Promise<[string]>;

    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'latestProposalIds(address)'(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    'proposalCount()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalReceipts(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
      }
    >;

    'proposalReceipts(uint256,address)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
      }
    >;

    proposalThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    'proposalThreshold()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalTimelockDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    'proposalTimelockDelay()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
      ] & {
        id: BigNumber;
        proposer: string;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
        emergency: boolean;
        quorumVotes: BigNumber;
        delay: BigNumber;
      }
    >;

    'proposals(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
      ] & {
        id: BigNumber;
        proposer: string;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
        emergency: boolean;
        quorumVotes: BigNumber;
        delay: BigNumber;
      }
    >;

    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    'queuedTransactions(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    quorumVotes(overrides?: CallOverrides): Promise<[BigNumber]>;

    'quorumVotes()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    'votingDelay()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    votingPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    'votingPeriod()'(overrides?: CallOverrides): Promise<[BigNumber]>;

    whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    'whitelistAccountExpirations(address)'(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    whitelistGuardian(overrides?: CallOverrides): Promise<[string]>;

    'whitelistGuardian()'(overrides?: CallOverrides): Promise<[string]>;
  };

  emergencyQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

  'emergencyQuorumVotes()'(overrides?: CallOverrides): Promise<BigNumber>;

  emergencyTimelockDelay(overrides?: CallOverrides): Promise<BigNumber>;

  'emergencyTimelockDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

  emergencyVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  'emergencyVotingPeriod()'(overrides?: CallOverrides): Promise<BigNumber>;

  implementation(overrides?: CallOverrides): Promise<string>;

  'implementation()'(overrides?: CallOverrides): Promise<string>;

  initialProposalId(overrides?: CallOverrides): Promise<BigNumber>;

  'initialProposalId()'(overrides?: CallOverrides): Promise<BigNumber>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  'initialized()'(overrides?: CallOverrides): Promise<boolean>;

  ipt(overrides?: CallOverrides): Promise<string>;

  'ipt()'(overrides?: CallOverrides): Promise<string>;

  latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  'latestProposalIds(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

  'proposalCount()'(overrides?: CallOverrides): Promise<BigNumber>;

  proposalReceipts(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<
    [boolean, number, BigNumber] & {
      hasVoted: boolean;
      support: number;
      votes: BigNumber;
    }
  >;

  'proposalReceipts(uint256,address)'(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides,
  ): Promise<
    [boolean, number, BigNumber] & {
      hasVoted: boolean;
      support: number;
      votes: BigNumber;
    }
  >;

  proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  'proposalThreshold()'(overrides?: CallOverrides): Promise<BigNumber>;

  proposalTimelockDelay(overrides?: CallOverrides): Promise<BigNumber>;

  'proposalTimelockDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
    ] & {
      id: BigNumber;
      proposer: string;
      eta: BigNumber;
      startBlock: BigNumber;
      endBlock: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      abstainVotes: BigNumber;
      canceled: boolean;
      executed: boolean;
      emergency: boolean;
      quorumVotes: BigNumber;
      delay: BigNumber;
    }
  >;

  'proposals(uint256)'(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<
    [
      BigNumber,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      boolean,
      BigNumber,
      BigNumber,
    ] & {
      id: BigNumber;
      proposer: string;
      eta: BigNumber;
      startBlock: BigNumber;
      endBlock: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      abstainVotes: BigNumber;
      canceled: boolean;
      executed: boolean;
      emergency: boolean;
      quorumVotes: BigNumber;
      delay: BigNumber;
    }
  >;

  queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  'queuedTransactions(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

  'quorumVotes()'(overrides?: CallOverrides): Promise<BigNumber>;

  votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

  'votingDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

  votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  'votingPeriod()'(overrides?: CallOverrides): Promise<BigNumber>;

  whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  'whitelistAccountExpirations(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  whitelistGuardian(overrides?: CallOverrides): Promise<string>;

  'whitelistGuardian()'(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    emergencyQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

    'emergencyQuorumVotes()'(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyTimelockDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'emergencyTimelockDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    'emergencyVotingPeriod()'(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<string>;

    'implementation()'(overrides?: CallOverrides): Promise<string>;

    initialProposalId(overrides?: CallOverrides): Promise<BigNumber>;

    'initialProposalId()'(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    'initialized()'(overrides?: CallOverrides): Promise<boolean>;

    ipt(overrides?: CallOverrides): Promise<string>;

    'ipt()'(overrides?: CallOverrides): Promise<string>;

    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'latestProposalIds(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    'proposalCount()'(overrides?: CallOverrides): Promise<BigNumber>;

    proposalReceipts(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
      }
    >;

    'proposalReceipts(uint256,address)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<
      [boolean, number, BigNumber] & {
        hasVoted: boolean;
        support: number;
        votes: BigNumber;
      }
    >;

    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    'proposalThreshold()'(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTimelockDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'proposalTimelockDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
      ] & {
        id: BigNumber;
        proposer: string;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
        emergency: boolean;
        quorumVotes: BigNumber;
        delay: BigNumber;
      }
    >;

    'proposals(uint256)'(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        boolean,
        BigNumber,
        BigNumber,
      ] & {
        id: BigNumber;
        proposer: string;
        eta: BigNumber;
        startBlock: BigNumber;
        endBlock: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        abstainVotes: BigNumber;
        canceled: boolean;
        executed: boolean;
        emergency: boolean;
        quorumVotes: BigNumber;
        delay: BigNumber;
      }
    >;

    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    'queuedTransactions(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

    'quorumVotes()'(overrides?: CallOverrides): Promise<BigNumber>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'votingDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    'votingPeriod()'(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'whitelistAccountExpirations(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    whitelistGuardian(overrides?: CallOverrides): Promise<string>;

    'whitelistGuardian()'(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    emergencyQuorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

    'emergencyQuorumVotes()'(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyTimelockDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'emergencyTimelockDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    emergencyVotingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    'emergencyVotingPeriod()'(overrides?: CallOverrides): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    'implementation()'(overrides?: CallOverrides): Promise<BigNumber>;

    initialProposalId(overrides?: CallOverrides): Promise<BigNumber>;

    'initialProposalId()'(overrides?: CallOverrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    'initialized()'(overrides?: CallOverrides): Promise<BigNumber>;

    ipt(overrides?: CallOverrides): Promise<BigNumber>;

    'ipt()'(overrides?: CallOverrides): Promise<BigNumber>;

    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'latestProposalIds(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    proposalCount(overrides?: CallOverrides): Promise<BigNumber>;

    'proposalCount()'(overrides?: CallOverrides): Promise<BigNumber>;

    proposalReceipts(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    'proposalReceipts(uint256,address)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    proposalThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    'proposalThreshold()'(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTimelockDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'proposalTimelockDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    'proposals(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    'queuedTransactions(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    quorumVotes(overrides?: CallOverrides): Promise<BigNumber>;

    'quorumVotes()'(overrides?: CallOverrides): Promise<BigNumber>;

    votingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    'votingDelay()'(overrides?: CallOverrides): Promise<BigNumber>;

    votingPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    'votingPeriod()'(overrides?: CallOverrides): Promise<BigNumber>;

    whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    'whitelistAccountExpirations(address)'(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    whitelistGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    'whitelistGuardian()'(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    emergencyQuorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'emergencyQuorumVotes()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyTimelockDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'emergencyTimelockDelay()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emergencyVotingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'emergencyVotingPeriod()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'implementation()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialProposalId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'initialProposalId()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'initialized()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ipt(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'ipt()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestProposalIds(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'latestProposalIds(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'proposalCount()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalReceipts(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'proposalReceipts(uint256,address)'(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    proposalThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'proposalThreshold()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalTimelockDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'proposalTimelockDelay()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'proposals(uint256)'(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    queuedTransactions(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'queuedTransactions(bytes32)'(arg0: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    quorumVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'quorumVotes()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'votingDelay()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    votingPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'votingPeriod()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelistAccountExpirations(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'whitelistAccountExpirations(address)'(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    whitelistGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'whitelistGuardian()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}