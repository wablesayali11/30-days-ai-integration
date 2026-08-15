# Day 3 - JavaScript Fetch and POST Requests

## GET vs POST

GET is used to retrieve data from an API.

POST is used to send or create new data.

GET:
Client → API → Data

POST:
Client → API
       ↓
    New Data

## Request Body

The request body contains the data that we send to the server.

Example:

{
  "name": "Sayali",
  "course": "Computer Engineering"
}

## JSON.stringify()

JSON.stringify() converts a JavaScript object into a JSON string.

Example:

const student = {
    name: "Sayali",
    course: "Computer Engineering"
};

JSON.stringify(student);

## Fetch

fetch() is a JavaScript function used to make HTTP requests.

Example:

fetch(url, options);

## POST Request

A POST request can be written as:

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});

## Important Concepts

GET → Receive data
POST → Send/Create data

Request Body → Data sent to the server

JSON.stringify() → Converts JavaScript object into JSON string

response.json() → Converts JSON response into JavaScript data

## AI Integration Connection

In our future AI Study Assistant:

React
  ↓
POST request
  ↓
Node.js + Express
  ↓
AI API
  ↓
AI Response
  ↓
React