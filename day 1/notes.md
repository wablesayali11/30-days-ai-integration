# Day 1 - AI Integration Fundamentals

## 1. What is AI?

AI stands for Artificial Intelligence.

AI allows computers to perform tasks that normally require human intelligence.

Examples:
- Understanding text
- Answering questions
- Recognizing images
- Making predictions

## 2. What is Generative AI?

Generative AI is a type of AI that can create new content such as:
- Text
- Code
- Images
- Audio
- Video

## 3. What is LLM?

LLM stands for Large Language Model.

An LLM is an AI model that can understand and generate human-like text.

## 4. What is an API?

API stands for Application Programming Interface.

An API is an interface that allows different software applications to communicate with each other.

## 5. Request and Response

Request:
The information or instruction sent to an API.

Response:
The data returned by the API.

Example:

Request:
"Explain Java."

Response:
"Java is a programming language..."

## 6. What is an API Key?

An API key is a secret credential used to authenticate or authorize an application.

We should never upload API keys to GitHub because someone could steal and misuse them.

API keys should be stored securely using environment variables such as .env.

## 7. AI Integration Flow

React
  ↓
Node.js + Express Backend
  ↓
AI API
  ↓
AI Response
  ↓
React
  ↓
User

## 8. Important Concept

AI integration means connecting our application with an AI service through an API.

Example:

User:
"Explain Binary Search."

React → Backend → AI API → AI Response → React → User