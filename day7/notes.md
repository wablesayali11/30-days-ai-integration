# Day 7 - Mini Project: API User Explorer

## Project Goal

Build a small web application that fetches user data from a REST API
and displays it on a webpage.

## Concepts Used

- Fetch API
- GET request
- JSON
- async/await
- Promises
- try/catch
- response.ok
- Loading state
- Error handling
- DOM manipulation

## API Used

JSONPlaceholder:

https://jsonplaceholder.typicode.com/users

## Application Flow

User opens application
        ↓
Click "Load Users"
        ↓
Loading state
        ↓
GET API request
        ↓
JSON response
        ↓
Display users
        ↓
If error → Display error message

## Why This Project Matters

This project combines the API concepts learned during Days 2-6
into one working application.

The same basic pattern will later be used when integrating
AI APIs.

## AI Integration Connection

Current:

Frontend
   ↓
GET API
   ↓
JSON response
   ↓
Display data

Future:

React
   ↓
POST request
   ↓
Backend
   ↓
AI API
   ↓
LLM
   ↓
AI response
   ↓
React