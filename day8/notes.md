# Day 8 - AI APIs and API Key Security

## AI API

An AI API allows an application to communicate with an AI model
through an API.

Example flow:

Application
    ↓
AI API
    ↓
LLM
    ↓
AI Response

## LLM

LLM stands for Large Language Model.

It is an AI model designed to understand and generate human language.

## API Key

An API key is a secret credential used to authenticate requests
to an API service.

API keys must be kept private.

## Why API Keys Should Not Be in Frontend

Frontend JavaScript is visible to users.

Therefore a secret API key should not be placed directly in:

- HTML
- CSS
- JavaScript frontend code
- React frontend code

## Environment Variables

Environment variables can be used to store configuration and secrets.

Example:

API_KEY=your_secret_key

## .gitignore

.gitignore tells Git which files should not be tracked.

Example:

.env
node_modules/

## Secure AI API Architecture

User
 ↓
React Frontend
 ↓
Backend
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

## Important Rule

Never commit real API keys or secrets to GitHub.

Use environment variables and keep .env out of Git.

## Day 8 Learning

AI API → Interface for communicating with an AI service.

LLM → Large Language Model.

API Key → Secret credential.

.env → Stores environment variables.

.gitignore → Prevents selected files from being tracked by Git.