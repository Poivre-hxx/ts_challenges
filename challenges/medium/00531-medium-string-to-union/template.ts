// 返回联合类型
type StringToUnion<T extends string, F extends unknown[] = []> = T extends `${infer L}${infer R}`
? StringToUnion<R, [...F,L]>
: F;

// 返回数组
// type StringToUnion<T extends string, F extends unknown[] = []> = T extends `${infer L}${infer R}`
// ? StringToUnion<R, [...F,L]>
// : F;

type t1 = StringToUnion<'hello'>;

// string => union