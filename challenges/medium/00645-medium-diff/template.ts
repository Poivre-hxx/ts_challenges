type Diff<T extends {}, U extends {}> = {
  [p in Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>]: p extends keyof T
    ? T[p]
    : p extends keyof U
        ? U[p]
        : never;
};

type Foo = {
  name: string;
  age: string;
};
type Bar = {
  name: string;
  age: string;
  gender: number;
};

type t1 = Diff<Foo, Bar>;


// 使用 Exclude<A, B> | Exclude<B, A> 获取插值