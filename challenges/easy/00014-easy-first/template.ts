// 1、extends 类型条件判断
// type First<T extends any[]> = T extends [] ? never : T[0];
// type T1 = First<[]>
// js 
// function first(arr) {
//     // 判断 arr 是否为空数组
//     return arr[0];
// }

// 2、获取 tuple 的 length 属性
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// js
// function first(arr) {
//     if(arr.length === 0) return "never";
//     return arr[0]
// }

// 3、extends union 判断的规则
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;

// 4、inter 的使用（推断）解构
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;
// js
// function First(arr) {
//     const [first, ...rest] = arr;
//     return first ? first : "never"

// }

// 如果是一个 []空数组的话，那么获取的 [0] 是 undefined



