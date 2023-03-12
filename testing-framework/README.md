# Building a Testing Framework 🤡

## Questions

### 1. Build `.test(name, fn)`, `.expect(value)` and `.toBe(value)`.

#### Program

```ts
it('test 1', () => {
   expect(6).toBe(3)
})
​
it('test 2', () => {
   expect(2).toBe(2)
})
​
it('test 3', () => {
   expect(2).toBe(1)
})
```

#### Expected Output 

```bash
⛔️ test 1 failed with message: expected 6, recevied 3.
✅ test 2 passed successfully.
⛔️ test 3 failed with message: expected 2, recevied 1.
```

--- 

### 2. Build `.test.only(name, fn)`

#### Program

```ts
it('test 1', () => {
   expect(6).toBe(3)
})
​
it.only('test 2', () => {
   expect(2).toBe(2)
})
​
it('test 3', () => {
   expect(2).toBe(1)
})
```

#### Expected Output

```bash
✅ test 2 passed successfully.
```

---

### 3. How does `jest.mock(modulePath)` work?

#### Program


```ts
// -----------------------------------------
// ./my-module.ts
export function myFunc() {
    return 42;
}
// -----------------------------------------
// dummy-mock.test.ts
import { myFunc } from './my-module';

jest.mock('./my-module', () => ({
    myFunc: () => 21,
}))

it('should that jest.mock works', () => {
   expect(myFunc()).toBe(21)
})
// -----------------------------------------
```