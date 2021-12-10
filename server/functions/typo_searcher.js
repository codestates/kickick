const hangul = require("hangul-js");

module.exports = (word) => {
  // TODO 오타 검색을 위한 키보드 타이핑 순서 분리 합성 함수 구현

  let original = hangul.d(word);
  console.log(original);

  return original;
};
