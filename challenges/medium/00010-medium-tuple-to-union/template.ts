type TupleToUnion<T extends any[]> = T[number];


type test1 = TupleToUnion<[123, '456', true]>;