import api from "./";
/**
 *  @param {string} email
 *  @param {string} password
 **/
export const duplicationCheck = (email, password) =>
  api.post(`/auth/duplication-check`, { email, password });
/**
 *  @param {string} email
 *  @param {string} password
 **/
export const signIn = (email, password) =>
  api.post(`/auth/signin`, { email, password });
  /**
 *  @param {string} email
 *  @param {string} password
 **/
export const signUp = ( data ) =>
  api.post(`/auth/signin`, data);
/**
 *
 **/
export const signOut = () => {
  return api.post(`/auth/signout`);
};
/**
 *  @param {string} code
 **/
export const kakaoAuth = (code) => {
  return api.post(`/auth/kakao`, { code });
};
/**
 *  @param {string} code
 *  @param {string} state
 **/
export const naverAuth = (code, state) => {
  return api.post(`/auth/kakao`, { code, state });
};
