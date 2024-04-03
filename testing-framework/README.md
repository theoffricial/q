# Building a Testing Framework 🤡

## Questions

### 1. Build a Jest-like framework

You need to implement the first building blocks of a Javascript testing framework:

* `function test(testName, testFn) { ... }` - Defines a test.
* `function expect(expectedValue) { ... }` - Define the expected value, tests support multiple `expect`s.
* `.toBe(actualValue) { ... }` - match the actual value received with the expected value.

#### Jest-like Program:

```ts

function test(testName, testFn) { 
   // add your implementation
   throw new Error("Not implemented.") 
}

test('my calm test', () => {
   expect('123').toBe('abc');
})
​
test('my good test', () => {
   expect(2).toBe(2)
   expect(2).toBe(2)
})
​
test('my wrong test', () => {
   expect(3).toBe(3)
   expect(3).toBe(2)
})
```

#### Expected Output 

The is what we expect to see in our console

```bash
X my calm test: failed with message: expected 'be calm', received '😇'.
V my good test: passed successfully.
X my wrong test: failed with message: expected '3', received '2'.
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
   expect(3).toBe(3)
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