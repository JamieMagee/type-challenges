type TupleToUnion<T> = T extends Array<infer U> ? U : never;
