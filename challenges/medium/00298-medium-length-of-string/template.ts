type LengthOfString<S extends string, A extends unknown[] = []> = S extends `${infer L}${infer Rest}`
? LengthOfString<Rest, [...A, L]>
: A['length'];

type t1 = LengthOfString<''>;

// js
function LengthOfString(str) {
    return str.length;
}
let a = LengthOfString('123');

// 字符串 => 数组
// Get 数组的长度