import type { Equal } from "@type-challenges/utils";

// false
// type Includes<T extends any[], K> = T["length"] extends 0
// ? false
// : K extends T[number]
//     ? T[number] extends K ? true : false
//     : false;

type Includes<T extends any[], K> = T extends [infer X, ...infer Y]
  ? Equal<X, K> extends true
    ? true
    : Includes<Y, K>
  : false;

export { Includes };

// js
// 普通的实现方式
// function Includes(T, U) {
//     for(let i = 0; i < T.length; i++){
//         if(T[i] === U)
//         return true;
//     }
//     return false;
// }
// 递归实现方式
function Includes(T, U) {
  function _(T, U) {
    if (T.length === 0) return false;
    const [first, ...rest] = T;

    if (first === U) {
      return true;
    } else {
      return _(rest, U);
    }
  }
  return _(T, U);
}

// 1. ts 遍历的方式
// {[P in keyod T]: P} 得到的是一个对象
// 2. ts 的模块规范
//    如果有 export/import 的话，那么就是模块er
//    没有的话，那么就是全局的，可以直接在别的模块er引用 
