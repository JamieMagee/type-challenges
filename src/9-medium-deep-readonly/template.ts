type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };
