type AppendArgument<Fn, A> = Fn extends (...args: infer Array) => infer R 
? (...args: [...Array, A]) => R
: never;

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>;

// 方法的解构
// spread 操作符