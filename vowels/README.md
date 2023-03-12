# Vowels 🦥

## Questions

### 1. Create a Vowels string reverse function

## Program

```ts
function vowelsReverse(str: string) {
    // ...
}

vowelsReverse('Table'); // should outputs: Tebla
vowelsReverse('House'); // should outputs: Heuso
vowelsReverse('Guitar'); // should outputs: Gaitur
```

### 2. Modules

How does module2.js will return?
You can run it first, if you prefer.

```js
// module1.js
export const myVariable = myFunc();

function myFunc() {
    return 'Hello World';
}

export default myVariable;

```

```js
// module2.js
const { myVariable } = require('./module1.js');
console.log(myVariable);
```

