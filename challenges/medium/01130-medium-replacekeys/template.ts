type ReplaceKeys<N, K, T> = 
  N extends N 
    ? {
      [key in keyof N]:
        key extends K
          ? T[Extract<keyof T, key>]
          : N[key]
    }
    : never