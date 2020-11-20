type Whitespace = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${Whitespace}${infer L}`
  ? Trim<L>
  : S extends `${infer R}${Whitespace}`
  ? Trim<R>
  : S;
