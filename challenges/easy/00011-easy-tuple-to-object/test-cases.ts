import type { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>;

// (const let)js世界 =>(typeof) (type interface)type 世界
// 字面量类型 https://jkchao.github.io/typescript-book-chinese/typings/literals.html