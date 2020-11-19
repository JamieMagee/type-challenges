type MyReadonly2<T, K extends keyof T = keyof T> = T &
  { readonly [k in K]: T[k] };
