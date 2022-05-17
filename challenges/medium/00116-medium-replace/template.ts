type Replace<S extends string, From extends string, To extends string> = S extends `${infer T}${From}${infer R}`
  ? From extends ''
    ? S
    : `${T}${To}${R}`
  : S;

type t1 = Replace<"foobarbar", "", "foo">;
