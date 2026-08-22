# Day 6 - JavaScript Promises and Async/Await

## Synchronous JavaScript

Synchronous code executes one operation at a time.

Example:

console.log("1");
console.log("2");
console.log("3");

Output:

1
2
3

## Asynchronous JavaScript

Asynchronous JavaScript allows slow operations to happen without blocking
the rest of the application.

Examples:

- API requests
- Database operations
- File operations
- AI API requests

## Promise

A Promise represents a value that may be available in the future.

A Promise has three states:

Pending → Waiting
Fulfilled → Successful
Rejected → Failed

## async

The async keyword is used to define an asynchronous function.

Example:

async function getData() {
    // asynchronous code
}

An async function returns a Promise.

## await

await waits for a Promise to complete before continuing the function.

Example:

const response = await fetch(url);

## .then() and .catch()

Promises can be handled using:

.then() → Handle successful result
.catch() → Handle error

Example:

fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));

## async/await with try/catch

Example:

async function getData() {

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }
}

## Why This Matters for AI

AI API requests take time to process.

Therefore our application needs asynchronous programming.

React
 ↓
API Request
 ↓
Waiting...
 ↓
AI Response
 ↓
Display Response

async/await makes this process easier to manage.

## Key Learnings

Promise → Represents future result

async → Creates asynchronous function

await → Waits for Promise

.then() → Handles successful Promise

.catch() → Handles rejected Promise