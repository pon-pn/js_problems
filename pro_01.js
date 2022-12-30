"use strict";
/*
const a = { a: 'a' }と
const b = { b: 'b' }
をマージしたcを出力してください
e.g{ a:'a', b:'b' }
*/

const a = { a: "a" };
const b = { b: "b" };
const c = { ...a, ...b };

console.log(c);
