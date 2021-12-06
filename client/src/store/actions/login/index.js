export const IS_LOGIN = "IS_LOGIN";
export const TODAY_LOGIN = "TODAY_LOGIN";
export const IS_POINT = "IS_POINT";

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

export const isPointAction = (number) => {
  return {
    type: IS_POINT,
    payload: number,
  };
}