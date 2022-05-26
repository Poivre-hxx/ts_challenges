type Merge<F, S> = {
  [t in keyof F | keyof S]: t extends keyof S
    ? S[t]
    : t extends keyof F
      ? F[t]
      : never;
};

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  b: number;
  c: boolean;
};

type t1 = Merge<Foo, Bar>;

// merge(request => Keys of the second type overrides keys of the first type)
//      => 优先考虑 2nd