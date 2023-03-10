# Implementing Native Promise 🫡

## Questions

### Question 1 - Implement `Promise`

Write a new custom `Promise` that call `IPromiseToRemainCalmOfri`, 
that should act the same as the native `Promise`, and should resolve the following examples cases the same way.

```js
// Case 1 - Straightforward
const promise1 = new Promise((resolve) => {
    console.log('Before resolving promise');
    resolve('Promise resolved!')
})
console.log('After initialing promise')
promise1.then((value) => console.log(value));

// Output:
// Before resolving promise
// After initialing promise
// Promise resolved!
```

```js
// Case 2 - Multiple timeouts
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Before resolving promise');
      resolve('Promise resolved!');
    }, 1000);
  
    setTimeout(() => {
      console.log('After resolving promise');
    }, 2000);
});
  
promise.then((value) => {
    console.log(value);
});

// Output:
// Before resolving promise - after waiting 1s
// Promise resolved!
// After resolving promise - after waiting 2s
```

```js
// Case 3 - Rejection
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('Something went wrong'));
    }, 2000);
});
  
promise3.then(
    (value) => {
        console.log(value); // This will not be called
    },
    (error) => {
        console.error(error.message); // "Something went wrong" after 2 seconds
        return 'Recovered from error';
    }
)
.then((value) => console.warn(value));

// Output:
// Something went wrong
// Recovered from error
```

```js
// Case 4 - async-await
const promise4 = new Promise((resolve, reject) => {
    console.log('Before resolving promise');
    resolve('Promise resolved!')
})
console.log('After initialing promise')
// Async function that uses await
const asyncFunction = async () => {
    const value = await promis4;
    console.log(value); // "Hello, world!" after 1 second
};
asyncFunction();

// Output:
// Before resolving promise
// After initialing promise
// Promise resolved!
```

### Question 2 - Implement Promise's `.catch`

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Something went wrong!'));
  }, 1000);
});

promise.catch((error) => {
  console.error(error.message); // "Something went wrong!" after 1 second
});

// Output
// Something went wrong!
```

### Question 3 - Run the following code

```js
whatWouldBeTheConsoleOrder();

function whatWouldBeTheConsoleOrder() {
    console.log('start');
    
    setTimeout(() => {
      console.log('setTimeout');
    }, 0);
    
    Promise.resolve().then(() => {
      console.log('promise');
    });
    
    console.log('end');
}
```

### Question 4 - Implement `Promise.all`

```js
const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Hello'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'World'));
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 1500, new Error('Error')));

Promise.all([promise1, promise2, promise3])
  .then((results) => {
    console.log(results); // never gets called
  })
  .catch((error) => {
    console.error(error.message); // "Error" after 1.5 seconds
  });

// Output 1:
// Error - waiting 1.5s

// Output 2:
// [ 'Hello - waiting 1s', 'World - waiting 2s', '! - waiting 1.5s' ]
```