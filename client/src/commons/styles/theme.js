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
  fontFamily: {
    luckiestGuy: "'Luckiest Guy', cursive",
    jua: "'Jua', sans-serif",
    blackHanSans: "'Black Han Sans', sans-serif",
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
    mobileL: `only screen and (max-width: 520px)`,
    tablet: `only screen and (max-width: 768px)`,
    notebookS: `only screen and (max-width: 1024px)`,
    notebookL: `only screen and (max-width: 1440px)`,
    desktop: `only screen and (max-width: 1920px)`,
  },
};

export const light = {
  ...common,
  type: "light",
  color: {
    back: "#ffffff",
    smallFooterBack: "#0c0c52",
    navBack: "#2980b9",
    main: "#0c0c42",
    alarm: "#0c0c42",
    font: "#222222",
    subfont: "#666",
    border: "#d8d8d8",
    navBtn: "#350480",
    basicBtn: "#0c0c42",
    hoverBasicBtn: "gray",
    comment: "#3467ce",
    tag: "#f90716",
    placeholderGray: "#5A5A5A",
    gradient: "linear-gradient(to bottom, #fff 25%, #eee 100%)",
    shadow: "#888888",
    select: "rgba(0, 0, 0, 0.08)",
    modalBack: "white",
    modalSubBack: "#faffff",
    confirmBtn: "skyblue",
    confirmBtnError: "red",
    hoverOption: "#0c0c42",
    boardTopBack: "linear-gradient(to top, #ffffff, #6dd5fa, #2980b9)",
    hoverArrow: "#0c0c42",
    commentBox: "#fbfbfb",
    tagBox: "#ececec",
    mycomment: "skyblue",
    blockquote: "#fafafa",
    blockquoteColor: "gray",
    tabBack: "white",
    tabHover: "#eee",
    mypageSvg: "#555",
    loginDesc: "green",
    modalColor: "#222",
    modalBtn: "#222",
    kickH3: "#0c0c42",
    red: "#FF5655",
    conditionHover: "#fafafa",
    footerBack: "#629d4b",
    footerFont: "#0c0c42",
    tagAlarm: "red",
    searchBack: "#eeeeee",
    noticeBack: "#eeeeee",
  },
};

export const dark = {
  ...common,
  type: "dark",
  color: {
    back: "#1E1F21",
    smallFooterBack: "#555555",
    navBack: "#1E1F21",
    alarm: "#444444",
    red: "#FF5655",
    main: "#0c0c42",
    tag: "#f90716",
    font: "#ffffff",
    navBtn: "#333333",
    subfont: "#959191",
    gradient: "linear-gradient(to bottom, #757575 25%, #2c2d30 100%)",
    placeholderGray: "white",
    shadow: "#555555",
    border: "#757575",
    basicBtn: "gray",
    hoverBasicBtn: "#333638",
    select: "#444444",
    modalBack: "#444444",
    modalSubBack: "#757575",
    confirmBtn: "#222222",
    confirmBtnError: "#950000",
    hoverOption: "gray",
    boardTopBack: "#1E1F21",
    hoverArrow: "#333638",
    commentBox: "#444444",
    mycomment: "#0c0c42",
    tagBox: "#555",
    blockquote: "#555",
    blockquoteColor: "#efefef",
    tabBack: "gray",
    tabHover: "#333638",
    mypageSvg: "white",
    loginDesc: "yellow",
    modalColor: "#bfbfbf",
    modalBtn: "#eee",
    kickH3: "#bfbfbf",
    conditionHover: "#444444",
    footerBack: "#9F3314",
    footerFont: "black",
    tagAlarm: "yellow",
    searchBack: "#111111",
    noticeBack: "#aaaaaa",
  },
};
