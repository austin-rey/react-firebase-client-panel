import {
  DISABLE_BALANCE_ON_ADD,
  DISABLE_BALANCE_ON_EDIT,
  ALLOW_REGISTRATION
} from "./types";

export const setDisableBalanceOnAdd = () => {
  // Get Settings From LS
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableBalanceOnAdd = !settings.disableBalanceOnAdd;

  // Update LS
  localStorage.setItem("settings", JSON.stringify(settings));

  return {
    type: DISABLE_BALANCE_ON_ADD,
    payload: settings.disableBalanceOnAdd
  };
};

export const setDisableBalanceOnEdit = () => {
  // Get Settings From LS
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.disableBalanceOnEdit = !settings.disableBalanceOnEdit;

  // Update LS
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: DISABLE_BALANCE_ON_EDIT,
    payload: settings.disableBalanceOnEdit
  };
};

export const setAllowRegistration = () => {
  // Get Settings From LS
  const settings = JSON.parse(localStorage.getItem("settings"));

  // Toggle
  settings.allowRegistration = !settings.allowRegistration;

  // Update LS
  localStorage.setItem("settings", JSON.stringify(settings));
  return {
    type: ALLOW_REGISTRATION,
    payload: settings.allowRegistration
  };
};
