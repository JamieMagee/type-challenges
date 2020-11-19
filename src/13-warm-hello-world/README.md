Hello, World!

In Type Challenges, we uses the type system itself to do the assertion. 

For this challenge, you will need to change the following code to make the tests pass (no type check errors).

```ts
// expected to be string
type HelloWorld = any
```

```ts
// you should make this work
type test = Expect<Equal<HelloWorld, string>>
```

Click the `Take the Challenge` button to start coding! Happy Hacking!