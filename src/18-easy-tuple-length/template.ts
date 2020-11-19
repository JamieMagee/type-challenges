type Length<T extends any> = T extends { length: infer R } ? R : never;
