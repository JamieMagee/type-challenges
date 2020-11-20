type Whitespace = ' ' | '\n' | '\t';
type TrimLeft<S extends string> = S extends `${Whitespace}${infer R}`
  ? TrimLeft<R>
  : S;
