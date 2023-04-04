import { Constants } from '~/types/Config';

export const getConstants = (): Constants => {
  return {
    DEFAULT_APPROVE_AMOUNT: '1000000000',
    USDA_DECIMALS: 18,
    ADDRESSES: {
      ZERO_ADDRESS: '0x0000000000000000000000000000000000000000',
      VAULT_CONTROLLER_ADDRESS: '0x408F924BAEC71cC3968614Cb2c58E155A35e6890',
      CURVE_MASTER_ADDRESS: '0xd977422c9eE9B646f64A4C4389a6C98ad356d8C4',
      USDA_ADDRESS: '0x40A633EeF249F21D95C8803b7144f19AAfeEF7ae',
      SUSD_ADDRESS: '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',
    },
  };
};