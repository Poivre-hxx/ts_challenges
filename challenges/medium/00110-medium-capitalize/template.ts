// 实现方法一
// type MyCapitalize<S extends string> = S extends `${infer T}${infer R}`
//     ? `${Uppercase<T>}${R}`
//     : S;

// 实现方法二
type Letter = {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
};

type MyCapitalize<S extends string> = S extends `${infer F}${infer L}`
  ? F extends keyof Letter
    ? `${Letter[F]}${L}`
    : S
  : S;

type t1 = MyCapitalize<"foobar">;

// js
function MyCapitalize(str) {
  str[0].toUpperCase();
  return str;
}

// `${}`  ES6 的字符串语法
// keyof 遍历