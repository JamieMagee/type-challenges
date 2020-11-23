type Permutation<U extends string, R extends any[] = []> = [U] extends [never]
  ? []
  : {
      [k in U]: Exclude<U, k> extends never
        ? [k, ...R]
        : Permutation<Exclude<U, k>, [k, ...R]>;
    }[U];
