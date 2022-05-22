type Flatten<T extends unknown[], L extends unknown[] = []> = T extends [
  infer A,
  ...infer B
]
  ? A extends unknown[]
    ? Flatten<[...A, ...B], L>
    : Flatten<B, [...L, A]>
  : L;

type t1 = Flatten<[1, 2, 3, 4]>;
type t2 = Flatten<[1, [2]]>;

// 使用 spread 进行解构！