# Vowels 🦥

## Questions

### 1. Create a Vowels string reverse function

## Program

```ts
function vowelReverse(str: string) {
    // ...
}

vowel('Table'); // outputs: Tebla
vowel('House'); // outputs: Heuso
vowel('Guitar'); // outputs: Gaitur
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

// module2.js
const { myVariable } = require('./module1.js');
console.log(myVariable);
```

