# API Key Security Practice

## Never do this

Do not put real API keys inside frontend JavaScript.

Example of unsafe code:

const API_KEY = "real-secret-key";

## Better approach

Store secrets in environment variables.

Example:

API_KEY=your_secret_key

And add .env to .gitignore.

## Architecture

Frontend
   ↓
Backend
   ↓
AI API
   ↓
LLM