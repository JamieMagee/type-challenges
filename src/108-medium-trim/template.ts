type Whitespace2 = ' ' | '\n' | '\t';
type Trim<S extends string> = S extends `${Whitespace2}${infer L}`
  ? Trim<L>
  : S extends `${infer R}${Whitespace2}`
  ? Trim<R>
  : S;
