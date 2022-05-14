// type TrimLeft<S> = S['number'] extends [infer T, ...infer Rest]
//     ? T extends ' '
//         ? TrimLeft<Rest>
//         : never
//     : Rest;

type TrimLeft<S extends string> = S extends `${" " | "\n" | "\t"}${infer R}`
  ? TrimLeft<R>
  : S;

type t1 = TrimLeft<"str">;

let t2 = " 2323";
alert(t2[2]);
t2.trim();

function TrimLeft(str: string) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if ((str[i] !== " ") | "\n" | "\t") obj += str[i];
  }
  return obj;
}
