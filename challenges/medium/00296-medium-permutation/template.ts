type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends T
    ? [T, ...Permutation<Exclude<K, T>>]
    : never;

type text1 = Permutation<'A' | 'B' | 'C'>;