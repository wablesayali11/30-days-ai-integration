# Day 5 - API Error Handling

## Why Error Handling?

API requests can fail because of:

- Internet problems
- Wrong API URL
- Server errors
- Invalid requests
- Unauthorized requests

Applications should handle these errors gracefully.

## try...catch

try is used to execute code that may produce an error.

catch is used to handle the error.

Example:

try {
    // API request
} catch (error) {
    // Handle error
}

## response.ok

response.ok tells us whether the HTTP response was successful.

Example:

if (!response.ok) {
    throw new Error("API request failed");
}

## HTTP Status Codes

200 → OK
201 → Created
400 → Bad Request
401 → Unauthorized
403 → Forbidden
404 → Not Found
500 → Server Error

## Loading State

While waiting for the API response, we can show:

Loading...

This improves user experience.

## API Request Flow

User clicks button
        ↓
Loading
        ↓
API Request
        ↓
Success OR Error
        ↓
Display result

## Important Concept

A good application should not simply crash when an API fails.

It should show a useful message to the user.

## AI Integration Connection

When we later connect an AI API:

User Question
      ↓
Frontend
      ↓
API Request
      ↓
AI Service
      ↓
Success / Error
      ↓
Response displayed to user

If the AI API fails, our application should show an error message instead of crashing.