type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer U}${From}${infer V}`
  ? From extends ''
    ? `${U}${From}${V}`
    : `${U}${To}${V}`
  : S;
