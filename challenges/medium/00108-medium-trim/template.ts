type Trim<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
  ? Trim<R>
  : S extends `${infer T}${" " | "\n" | "\t"}`
  ? Trim<T>
  : S;

type t1 = Trim<'str'>;

//

// js
function Trim(str) {
    let obj = {};
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== `${' ' | '\n' | '\t'}`)
        obj += str[i];
    }
    return obj;
} 