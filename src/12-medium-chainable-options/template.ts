type Chainable<T = {}> = {
  option<K extends string, U>(key: K, value: U): Chainable<T & { [k in K]: U }>;
  get(): { [k in keyof T]: T[k] };
};
