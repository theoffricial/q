# Building a Testing Framework 🤡

## Questions

### 1. Build Jest-like framework

Implement the support of the following:

* `test(testName, testFn)` - Defines a test.
* `expect(expectedValue)` - Define the expected value, tests cab support mutliple `expect`-s.
* `.toBe(actualValue)` - match the actual value received with the expected value.

#### Jest-like Program:

```ts
beforeEach(() => {
   expect('🤡').toBe('🤡');
})

test('1st test', () => {
   expect('be calm').toBe('😇');
})
​
test('2nd test', () => {
   expect(2).toBe(2)
   expect(2).toBe(2)
})
​
test('3rd test', () => {
   expect(3).toBe(3)
   expect(3).toBe(2)
})
```

#### Expected Output 

```bash
⛔️ 1st test failed with message: expected 'be calm', recevied '😇'.
✅ 2nd test passed successfully.
⛔️ 3rd test failed with message: expected '3', recevied '2'.
```

--- 

### 2. Add `beforeEach(beforeTestFn)`

Implement the support of the following:

* `beforeEach(beforeTestFn)` - Should run before each test.

#### Jest-like Program:

```ts
beforeEach(() => {
   expect('🤡').toBe('🤡');
})

test('1st test', () => {
   expect('be calm').toBe('😇');
})
​
test('2nd test', () => {
   expect(2).toBe(2)
   expect(2).toBe(2)
})
​
test('3rd test', () => {
   expect(3).toBe(3)
   expect(3).toBe(2)
})
```

---

### 3. Enhance the testing framework!

Add the support of the advanced feature of:

* `test.only(testName, testFn)` - When `test.only` is defined, the jest-like framework should skip all other tests that are not defined as `.only`.

#### Jest-like Program:

```ts
beforeEach(() => {
   expect('🤡').toBe('🤡');
})

test('1st test', () => {
   expect('be calm').toBe('😇');
})
​
test.only('2nd test', () => {
   expect(2).toBe(2)
   expect(2).toBe(2)
})
​
test('3rd test', () => {
   expect(3).toBe(3)
   expect(3).toBe(2)
})

test.only('4th test', () => {
   expect(4).toBe(4)
})
```

#### Expected Output

```bash
✅ 2nd test passed successfully.
✅ 4th test passed successfully.
```

---

### 4. Describe how `jest.mock(modulePath)` work

The following code works, trust us.
But the `jest.mock` syntax is weird, can you describe it, and think how it was implemented?

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