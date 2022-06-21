// type IsUnion<T, T2 = T> = T extends T2 ? [T2] extends [T] ? false : true : false;

// your answers
type IsUnion<T> = (T extends any ? (k: T) => void : never) extends (k: infer P) => void ? T extends P ? false : true : never; 
// type IsUnion<T> = (T extends any ? (k: T) => void : never) extends (k: infer P) => void ? Equal<P,T> extends true ? false : true : never;

// 想法是利用逆变的参数，将UNION(T)转为INTERSECTION(P)，如果 P = T 或者 T extends P（正常情况下UNION的范围必定不可能继承INTERSECTION，只有两者相等才成立）则说明 T只有一个类型否则为联合类型