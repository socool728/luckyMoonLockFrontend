import {
  ADD_ADDRESS,
  CHANGE_THEME,
  REMOVE_ADDRESS,
  CONV_ADDRESS,
  CHANGE_PAIRINFO,
  CHANGE_CHAIN,
} from "./types.js";

export const addAddress = (address) => ({
  type: ADD_ADDRESS,
  payload: address,
});

export const removeAddress = () => ({
  type: REMOVE_ADDRESS,
  payload: "",
});

export const changeTheme = (theme) => ({
  type: CHANGE_THEME,
  payload: theme,
});

export const convAddress = (converted_address) => ({
  type: CONV_ADDRESS,
  payload: converted_address,
});

export const changePairInfo = (pairInfo) => ({
  type: CHANGE_PAIRINFO,
  payload: pairInfo,
});

export const changeChain = (chain) => ({
  type: CHANGE_CHAIN,
  payload: chain,
});
