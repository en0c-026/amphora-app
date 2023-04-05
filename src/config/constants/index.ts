import { Constants } from '~/types';

export const getConstants = (): Constants => {
  return {
    DEFAULT_APPROVE_AMOUNT: '1000000000',
    USDA_DECIMALS: 18,
    ADDRESSES: {
      ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
      VAULT_CONTROLLER_ADDRESS: '0x408F924BAEC71cC3968614Cb2c58E155A35e6890',
      CURVE_MASTER_ADDRESS: '0x1eB5C49630E08e95Ba7f139BcF4B9BA171C9a8C7',
      USDA_ADDRESS: '0x532802f2F9E0e3EE9d5Ba70C35E1F43C0498772D',
      SUSD_ADDRESS: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
      WETH_ADDRESS: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    },
  };
};
