interface LowToCase {
  A: "a";
  B: "b";
  C: "c";
  D: "d";
  E: "e";
  F: "f";
}

type KebabCase<S, First extends boolean = true> = S extends `${infer L}${infer R}`
  ? L extends keyof LowToCase
    ? `${First extends true ? '' : '-'}${LowToCase[L]}${KebabCase<R, false>}`
    : `${L}${KebabCase<R, false>}`
  : "";

type t1 = KebabCase<"FooBarBaz">;

// 利用接口进行字符的替换
// 引入布尔表达式进行判断