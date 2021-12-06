export const validation = (part, value) => {
  let num = value.search(/[0-9]/g);
  let eng = value.search(/[a-z]/gi);
  let spe = value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

  let emailValid =
    value.includes("@") &&
      value.split("@")[0] &&
      value.split("@")[1].includes(".") &&
      value.split("@")[1].split(".")[0] &&
      value.split("@")[1].split(".")[1] ? 1 :
      !value.includes("@") ? 2 : 3;
  
  let passwordVaild =
    value.length > 7 &&
    value.length <= 20 &&
    value.search(/\s/) === -1 &&
    num !== -1 &&
    eng !== -1 &&
    spe !== -1
      ? 1
      : value.length <= 7 || value.length > 20
      ? 2
      : value.search(/\s/) === -1
      ? 3
      : num !== -1 && eng !== -1 && spe !== -1 ? 4 : 5;
  
  let vaild = value.length >= 4 && value.length <= 10 ? 1 : 2;
  
  if (part === "email") {
    switch (emailValid) {
      case 1:
        return { message: "pass", isValid: true };
      case 2:
        return { message: "@가 포함되어있지 않습니다", isValid: false };
      default: return { message: "email형식이 올바르지 않습니다", isValid: false };
    }
  }
  if (part === "password") {
    switch (passwordVaild) {
      case 1:
        return { message: "pass", isValid: true };
      case 2:
        return {
          message: "비밀번호의 길이는 8자리이상 20자리이하 입니다",
          isValid: false,
        };
      case 3:
        return { message: "공백이 존재해서는 안됩니다", isValid: false };
      case 4:
        return {
          message: "특수문자,영문,숫자가 모두 포함되어야 합니다",
          isValid: false,
        };
      default:
        return { message: "양식이 올바르지 않습니다", isValid: false };
    }
  }
  if (part === "username") {
    switch (vaild) {
      case 1:
        return { message: "pass", isValid: true };
      case 2: 
        return {
          message: "ID의 길이는 4자리이상 10자리 이하입니다",
          isValid: false,
        };
      default:
        return { message: "양식이 올바르지 않습니다", isValid: false };
    }
  }
};