type MyReadonly2<T, K extends keyof T = keyof T> = {
    readonly [P in K]: T[P] 
  } & {
    [P in keyof T as P extends K ? never : P]: T[P] 
  }
interface Todo1 {
    title: string
    description?: string
    completed: boolean
  }

//type t1 = MyReadonly2<Todo1>;
type t2 = MyReadonly2<Todo1, 'title' | 'description'>;