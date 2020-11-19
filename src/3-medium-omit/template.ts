type MyOmit<T, K extends keyof T> = { [k in Exclude<keyof T, K>]: T[k] };
