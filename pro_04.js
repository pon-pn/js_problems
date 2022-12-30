"use strict";
/*
['a', 'b']の各要素にindex値を足した文字列を出力してください
e.g 'a0'と'b1'
*/
const array = ["a", "b"];
const result = array.forEach((value, i) => console.log(value + i));
