import { Address } from 'wagmi';

export interface Env {
  VITE_ALLOW_DEV_MODE: boolean;
  ALCHEMY_KEY: string | undefined;
  VITE_CUSTOM_LOCAL_RPC: string;
}

export interface Constants {
  DEFAULT_APPROVE_AMOUNT: string;
  USDA_DECIMALS: number;
  ADDRESSES: {
    ZERO_ADDRESS: Address;
    VAULT_CONTROLLER_ADDRESS: Address;
    CURVE_MASTER_ADDRESS: Address;
    USDA_ADDRESS: Address;
    SUSD_ADDRESS: Address;
  };
}

export interface Config extends Env, Constants {}