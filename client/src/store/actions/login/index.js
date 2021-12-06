export const IS_LOGIN = "IS_LOGIN";
export const TODAY_LOGIN = "TODAY_LOGIN";

export const isLoginAction = (boolean) => {
  return {
    type: IS_LOGIN,
    payload: boolean,
  };
};

export const todayLoginAction = (boolean) => {
  return {
    type: TODAY_LOGIN,
    payload: boolean,
  };
};
