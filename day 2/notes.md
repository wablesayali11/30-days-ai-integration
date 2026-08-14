# Day 2 — HTTP & REST APIs

## 1. What is HTTP?

HTTP stands for **HyperText Transfer Protocol**.

It is a set of rules that allows clients and servers to communicate over the web.

Example:

Client → HTTP Request → Server
Client ← HTTP Response ← Server

---

## 2. Client and Server

### Client

A client is an application that sends a request to a server.

Examples:

* Web browser
* React application
* Mobile application

### Server

A server receives requests, processes them, and sends responses.

In our AI project:

**React = Client**

**Node.js + Express = Server**

---

## 3. What is an HTTP Request?

An HTTP request is a message sent by a client to a server to perform an operation or request data.

A request can contain:

* Method
* URL
* Headers
* Body

Example:

```text
POST /api/ask
```

---

## 4. What is an HTTP Response?

An HTTP response is the data sent by the server back to the client after processing a request.

Example:

```json
{
  "answer": "A process is a program in execution."
}
```

---

## 5. HTTP Methods

HTTP methods tell the server what operation we want to perform.

### GET

Used to **retrieve/read data**.

```text
GET /students
```

Meaning: Get the list of students.

### POST

Used to **create/send new data**.

```text
POST /students
```

Example body:

```json
{
  "name": "Sayali",
  "course": "Computer Engineering"
}
```

### PUT

Used to **update existing data**.

```text
PUT /students/101
```

Meaning: Update student 101.

### DELETE

Used to **delete data**.

```text
DELETE /students/101
```

Meaning: Delete student 101.

---

## 6. CRUD

CRUD represents the four basic operations performed on data.

| Operation | Meaning | HTTP Method |
| --------- | ------- | ----------- |
| C         | Create  | POST        |
| R         | Read    | GET         |
| U         | Update  | PUT         |
| D         | Delete  | DELETE      |

Easy way to remember:

```text
GET     → Read
POST    → Create
PUT     → Update
DELETE  → Delete
```

---

## 7. What is JSON?

JSON stands for **JavaScript Object Notation**.

It is a common format used to exchange data between applications.

Example:

```json
{
  "name": "Sayali",
  "course": "Computer Engineering",
  "skills": ["Java", "React", "Python"]
}
```

JSON can contain:

* Strings
* Numbers
* Boolean values
* Arrays
* Objects
* null

---

## 8. HTTP Status Codes

Status codes tell us what happened with the request.

### 2xx — Success

```text
200 → OK / Successful request
201 → Created successfully
```

### 4xx — Client Error

```text
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
```

### 5xx — Server Error

```text
500 → Internal Server Error
```

Important codes:

```text
200 → Success
201 → Created
400 → Bad Request
401 → Unauthorized
404 → Not Found
500 → Server Error
```

---

## 9. What is REST API?

REST stands for **Representational State Transfer**.

A REST API is an API that uses HTTP methods to work with resources.

Example:

```text
GET     /students
POST    /students
PUT     /students/101
DELETE  /students/101
```

Here, `students` is a resource.

---

## 10. Request and Response Flow

A typical web application works like this:

```text
Client
   ↓
HTTP Request
   ↓
Server
   ↓
Process Request
   ↓
HTTP Response
   ↓
Client
```

---

## 11. AI Integration Flow

In our AI Study Assistant:

```text
User
 ↓
React Frontend
 ↓
Node.js + Express Backend
 ↓
AI API
 ↓
LLM
 ↓
AI Response
 ↓
Backend
 ↓
React
 ↓
User
```

Example:

User enters:

```text
"Explain what a process is in Operating Systems."
```

React sends the question to the backend.

The backend sends the request to the AI API.

The AI generates the answer.

The backend sends the answer back to React.

React displays the answer to the user.

---

## 12. Key Learnings

Today I learned:

* HTTP
* Client and Server
* HTTP Request
* HTTP Response
* GET
* POST
* PUT
* DELETE
* CRUD
* JSON
* HTTP Status Codes
* REST API
* Basic AI API request flow

## Day 2 Summary

The main concept I learned today is:

**HTTP allows clients and servers to communicate, while REST APIs use HTTP methods such as GET, POST, PUT, and DELETE to work with resources.**

This knowledge will be used later when connecting my React frontend with a Node.js/Express backend and an AI API.
