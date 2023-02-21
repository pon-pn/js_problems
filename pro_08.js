"use strict";
const obj = {
  key: "aa",
  key2: "bb",
};
// の中のkeyとvalueを自身のプロパティのみ全て出力しなさい

// console.log(obj.key);
// console.log(obj.key2);

// 回答例
for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}
