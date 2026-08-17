# Day 4 - REST API and CRUD

## What is REST API?

REST API is a way for applications to communicate with each other
using HTTP methods.

## CRUD

CRUD stands for:

C - Create
R - Read
U - Update
D - Delete

## HTTP Methods

GET:
Used to retrieve data.

POST:
Used to create new data.

PUT:
Used to replace/update an existing resource.

PATCH:
Used to partially update an existing resource.

DELETE:
Used to delete data.

## CRUD Mapping

Create → POST
Read → GET
Update → PUT/PATCH
Delete → DELETE

## Example

Student Management System:

POST → Add a student
GET → View students
PATCH → Update student
DELETE → Delete student

## REST API Flow

Frontend
   ↓
HTTP Request
   ↓
REST API
   ↓
Server
   ↓
Response
   ↓
Frontend

## Important Concepts

Endpoint:
A URL where an API resource can be accessed.

Request:
Information sent from client to server.

Response:
Information returned by server to client.

HTTP Method:
Defines what operation we want to perform.

## AI Integration Connection

Our future AI application can use APIs like:

POST /api/ask

The frontend sends a question to the backend.

React
 ↓
POST request
 ↓
Backend
 ↓
AI API
 ↓
AI Response
 ↓
React