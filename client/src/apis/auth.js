import api from "./";
/**
 *  @param {string} email
 *  @param {string} password
 **/
export const duplicationCheck = (email, password) =>
  api.post(`/auth/duplication-check`, { email, password });
  /**
 *  @param {boolean} todayLogin
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
 *  @param {string} code
 **/
export const kakaoSignIn = (code) =>
  api.post(`/auth/naver`, { code });
  /**
 *  @param {string} code
 *  @param {string} state
 **/
export const naverSignIn = (code, state) =>
  api.post(`/auth/naver`, { code, state });
  /**
 *  @param {string} username
 **/
export const tempoSignIn = (username) =>
  api.post(`/auth/signin`, { username, type: "guest" });
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
*  @param {object} data
**/
export const tempoSignUp = ( data ) =>
  api.put(`/users/info`, data);
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
