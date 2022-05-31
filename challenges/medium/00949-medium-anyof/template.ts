type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends [] | Record<string, never> | '' | 0 | false 
      ? AnyOf<R>
      : true
  : false;
type t1 = AnyOf<[1, "", false, [], {}]>;

// Record 类型 => 解构对象\
//