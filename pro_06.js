"use strict";
/*
//1
if (typeof x === 'undefined') {
 ???
}
//2
if(x === undefined){
 ???
}
変数xが定義されていない場合上の1、2は実行されますか?
*/

//1は実行される
//2は実行されない(ReferenceError)
