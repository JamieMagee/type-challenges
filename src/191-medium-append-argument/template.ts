type AppendArgument<Fn, A> = Fn extends (...args: infer U) => infer V
  ? (...args: [...U, A]) => V
  : never;
