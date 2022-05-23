type AppendToObject<T, U extends string, V> = {
  [key in keyof T | U]: key extends keyof T ? T[key] : V;
};

type test1 = {
    key: 'cat'
    value: 'green'
  }
type t1 = AppendToObject<test1, 'home', boolean>;

// 联合类型的分配