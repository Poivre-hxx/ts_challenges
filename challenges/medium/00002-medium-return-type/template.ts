type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

type t2 = MyReturnType<() => string>;
const fn = (v: boolean) => (v ? 1 : 2);

function f1(test) {
  if (test > 1) return 0;
  return 1;
}
// js
function MyReturnType(obj) {
  return obj;
}
let test1 = MyReturnType(f1);
