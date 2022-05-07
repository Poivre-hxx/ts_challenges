type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];
type t1 = Concat<[1], []>;
//type t2 = Concat<[], [1]>;
type t3 = Concat<["1", 2, "3"], [false, boolean, "4"]>;

// js
function Concat(T, U) {
  const obj = [];
  let i;
  for (i = 0; i < T.length; i++) {
    obj[i] = T[i];
  }
  let j;
  for (j = 0; j < U.length; j++) {
    obj[j + i] = U[j];
  }
  return obj;
}
const arr1 = [1, 2];
const arr2 = [];
let t = Concat(arr1, arr2);

function Concat1(arr1, arr2) {
  // spread 操作符

  return [...arr1, ...arr2];
}

// 解构
// ...运算符
