const hangul = require("hangul-js");
// const escapeRegExp = require("lodash").escapeRegExp;

module.exports = (word) => {
  // TODO 오타 검색 순서 변경
  // hangul 라이브러리 쓰는 걸로 수정

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
  let typo_obj = {
    // 한글 분기
    ㅂ: ["ㅈ"],
    ㅈ: ["ㅂ", "ㄷ"],
    ㄷ: ["ㅈ", "ㄱ"],
    ㄱ: ["ㄷ", "ㅅ"],
    ㅅ: ["ㄱ", "ㅛ"],
    ㅛ: ["ㅅ", "ㅕ"],
    ㅕ: ["ㅛ", "ㅑ"],
    ㅑ: ["ㅕ", "ㅐ"],
    ㅐ: ["ㅑ", "ㅔ"],
    ㅔ: ["ㅐ"],
    ㅁ: ["ㄴ"],
    ㄴ: ["ㅁ", "ㅇ"],
    ㅇ: ["ㄴ", "ㄹ"],
    ㄹ: ["ㅇ", "ㅎ"],
    ㅎ: ["ㄹ", "ㅗ"],
    ㅗ: ["ㅎ", "ㅓ"],
    ㅓ: ["ㅗ", "ㅏ"],
    ㅏ: ["ㅓ", "ㅣ"],
    ㅣ: ["ㅏ"],
    ㅋ: ["ㅌ"],
    ㅌ: ["ㅋ", "ㅊ"],
    ㅊ: ["ㅌ", "ㅍ"],
    ㅍ: ["ㅊ", "ㅠ"],
    ㅠ: ["ㅍ", "ㅜ"],
    ㅜ: ["ㅠ", "ㅡ"],
    ㅡ: ["ㅜ"],

    // 영어 분기
    q: ["w"],
    w: ["q", "e"],
    e: ["w", "r"],
    r: ["e", "t"],
    t: ["r", "y"],
    y: ["t", "u"],
    u: ["y", "i"],
    i: ["u", "o"],
    o: ["i", "p"],
    p: ["o"],
    a: ["s"],
    s: ["a", "d"],
    d: ["s", "f"],
    f: ["d", "g"],
    g: ["f", "h"],
    h: ["g", "j"],
    j: ["h", "k"],
    k: ["j", "l"],
    l: ["k"],
    z: ["x"],
    x: ["z", "c"],
    c: ["x", "v"],
    v: ["c", "b"],
    b: ["v", "n"],
    n: ["b", "m"],
    m: ["n"],
  };

  return reordered.map((el) => hangul.a(el));
};
