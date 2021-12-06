export const THMEME_MODE = "THMEME_MODE";

export const themeModeAction = (mode) => {
  return {
    type: THMEME_MODE,
    payload: mode,
  };
};
