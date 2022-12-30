"use strict";
/*
const arry = ['aa','bb','cc','dd','ee','ff','gg'];
のdd,ee,ffを新たな配列として返してください
*/
const arry = ["aa", "bb", "cc", "dd", "ee", "ff", "gg"];
const matchItem = /dd|ee|ff/;
const newArray = arry.filter((value) => value.match(matchItem));

console.log(newArray);
