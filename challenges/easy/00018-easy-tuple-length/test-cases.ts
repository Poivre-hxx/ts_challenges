import type { Equal, Expect } from "@type-challenges/utils";

// + as const 与 不加
const tesla = ["tesla", "model 3", "model X", "model Y"] as const;
type t1 = typeof tesla;
const tesla1 = ["tesla", "model 3", "model X", "model Y"];
type t2 = typeof tesla1;

const spaceX = [
  "FALCON 9",
  "FALCON HEAVY",
  "DRAGON",
  "STARSHIP",
  "HUMAN SPACEFLIGHT",
] as const;

const y = typeof tesla;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  // @ts-expect-error
  Length<5>,
  // @ts-expect-error
  Length<"hello world">
];
