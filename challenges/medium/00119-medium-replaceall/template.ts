type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer F}${From}${infer B}`
  ? From extends ''
    ?  `${F}${From}${B}`
    // 错误原因（预测）: 字符串进行比对时，需要字字对应？
    // : `${From}` extends `${B}` 
    //     ? ReplaceAll<`${F}${To}${B}`, From, To> 
    //     : `${F}${To}${B}`
    : `${F}${To}${ReplaceAll<B, From, To>}`
  : S;


type t1 = ReplaceAll<'foobar', 'bar', 'foo'>;
type t2 = ReplaceAll<'foobarbar', 'bar', 'foo'>;
type t3 = ReplaceAll<'t y p e s', ' ', ''>;
type t4 = ReplaceAll<'foboorfoboar', 'bo', 'b'>;