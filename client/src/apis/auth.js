import api from "./";
/**
 *  @param {string} email
 *  @param {string} password
 **/
export const duplicationCheck = (email, password) =>
  api.post(`/auth/duplication-check`, { email, password });
  /**
 *
 **/
export const nowImLogin = (todayLogin) =>
  api.get(`/users/info?todayLogin=${todayLogin}`);
/**
 *  @param {string} username
 *  @param {string} password
 **/
export const signIn = (username, password) =>
  api.post(`/auth/signin`, { username, password });
  /**
 *  @param {string} username
 **/
export const mailCheck = (username) =>
  api.post(`/auth/email`, { username });
  /**
*  @param {object} data
**/
export const signUp = ( data ) =>
  api.post(`/users/info`, data);
/**
 *
 **/
export const signOut = () => api.post(`/auth/signout`);
/**
 *  @param {string} code
 **/
export const kakaoAuth = (code) => api.post(`/auth/kakao`, { code });

/**
 *  @param {string} code
 *  @param {string} state
 **/
export const naverAuth = (code, state) => {
  return api.post(`/auth/kakao`, { code, state });
};
