const calcRem = (size) => `${size / 16}rem`;

const common = {
  fontSizes: {
    xs: calcRem(12),
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(22),
    xxxl: calcRem(24),
    titleSize: calcRem(50),
  },
  paddings: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
  },
  margins: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(18),
  },
  deviceSizes: {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "450px",
    tablet: "768px",
    notebookS: "1024px",
    notebookL: "1440px",
    desktop: "1920px",
  },
  device: {
    mobileS: `only screen and (max-width: 320px)`,
    mobileM: `only screen and (max-width: 375px)`,
    mobileL: `only screen and (max-width: 450px)`,
    tablet: `only screen and (max-width: 768px)`,
    notebookS: `only screen and (max-width: 1024px)`,
    notebookL: `only screen and (max-width: 1440px)`,
    desktop: `only screen and (max-width: 1920px)`,
  },
};

export const light = {
  ...common,
  color: {
    back: "#ffffff",
    subBack: "#8A8A9B",
    main: "#0c0c42",
    font: "#222222",
    border: "#c4c4c4",
    navBtn: "#350480",
    basicBtn: "#0c0c42",
    modalBtn: "#82B0F5",
    comment: "#3467ce",
    tag: "82B0F5",
  },
};

export const dark = {
  ...common,
  color: {},
};
