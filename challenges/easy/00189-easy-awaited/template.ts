type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X> 
  ? X extends Promise<unknown>
    ? MyAwaited<X>
    : X 
  : T;


// infer => 代表一个未知的参数
// 递归调用

