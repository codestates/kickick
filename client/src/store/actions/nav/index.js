export const THMEME_MODE = "THMEME_MODE";

export const setThemeMode = (mode) => {
  return {
    type: THMEME_MODE,
    payload: mode,
  };
};
