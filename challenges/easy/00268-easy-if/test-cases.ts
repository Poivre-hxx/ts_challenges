import type { Equal, Expect } from '@type-challenges/utils'
type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// @ts-expect-error
type error = If<null, 'a', 'b'>

// 类型兼容性 | 分配规则
// null 严格模式和非严格模式的区别
