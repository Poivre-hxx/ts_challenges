type MyExclude<T, U> = T extends U ? never : T;

// js
function MyExclude(T, U) {
  const obj = [];
  for (let i = 0; i < T.length; i++) {
    const t1 = T[i];
    // 方法1
    // let foo = true;
    // for (let j = 0; j < U.length; j++) {
    //   const t2 = U[j];
    //   if (t1 === t2) foo = false;
    // }
    // if (foo) obj.push(t1);

    // 方法2
    if(!U.includes(t1))
    obj.push(t1);
  }
  return obj;
}
