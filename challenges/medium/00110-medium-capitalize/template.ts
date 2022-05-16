type MyCapitalize<S extends string> = S extends `${infer T}${infer R}` 
    ? `${Uppercase<T>}${R}` 
    : S;
type t1 = MyCapitalize<'foobar'>;

// js 
function MyCapitalize(str) {
    str[0].toUpperCase();
    return str;
}

// `${}`  ES6 的字符串语法