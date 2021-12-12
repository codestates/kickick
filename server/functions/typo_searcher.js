const hangul = require("hangul-js");
// const escapeRegExp = require("lodash").escapeRegExp;

module.exports = (word) => {
  // TODO 오타 검색 순서 변경
  // 라이브러리 쓰기로 함

  const original = hangul.d(word);
  const reordered = [];

  // 순서 변경
  for (let i = 0; i < original.length - 1; i++) {
    let copy = original.slice();
    let temp = copy.splice(i, 1)[0];
    copy.splice(i + 1, 0, temp);
    reordered.push(copy);
  }

  // 오타 분기 구현
  // let typo_obj = {
  //   ㅂ: [ㅁ,ㅈ],
  //   ㅈ: [ㅂ,ㄴ,ㄷ],
  //   ㄷ: [ㅈ,ㅇ,ㄱ],
  //   ㄱ: [ㄷ,ㄹ,ㅅ],
  //   ㅅ: [ㄱ,ㅎ,ㅛ],
  //   ㅛ: [ㅅ,ㅗ,ㅕ],
  //   ㅕ: [ㅛ,ㅓ,ㅑ],
  //   ㅑ: [ㅕ,ㅏ,ㅐ],
  //   ㅐ: [ㅑ,ㅣ,ㅔ],
  //   ㅔ:
  // }

  return reordered.map((el) => hangul.a(el));
};
