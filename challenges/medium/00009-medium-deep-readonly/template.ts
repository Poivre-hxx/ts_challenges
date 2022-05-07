type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends undefined ? T[P] : DeepReadonly<T[P]> ;
};

type X = {
  a: () => 22;
  b: string;
  c: {
    d: boolean;
    e: {
      g: {
        h: {
          i: true;
          j: "string";
        };
        k: "hello";
      };
      l: [
        "hi",
        {
          m: ["hey"];
        }
      ];
    };
  };
};
type Y = DeepReadonly<X>;