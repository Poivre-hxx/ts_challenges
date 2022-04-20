type MyPick<T, K extends keyof T> = {
  [U in K]: T[U]; //[a in b] 遍历
};

// js
// function MyPick(todo, keys) {
//   const obj = {};
//   keys.forEach((key) => {
//     if (key in todo) obj[key] = todo[key];
//   });

//   return obj;
// }
// foreach => mapped
// todo[key] => indexed
// keyof => lookup
// extends => Generic Constraints

