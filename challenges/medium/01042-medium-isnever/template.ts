type IsNever<T> = [T] extends [never] ? true : false;

type t1 = IsNever<never>;