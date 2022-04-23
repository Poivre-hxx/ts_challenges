import { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>, //HelloWorld 包含类型
  Expect<Equal<HelloWorld, string>> //HelloWorld 与 string 的类型完全相同
]

type t1 =  NotAny<HelloWorld>;