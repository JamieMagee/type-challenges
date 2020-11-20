type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer U}${From}${infer V}`
  ? From extends ''
    ? S
    : `${ReplaceAll<`${U}${To}${V}`, From, To>}`
  : S;
