# Learning How LLMs Work

A Node.js CLI project demonstrating different ways to interact with **Google's Gemini 2.5 Flash** API. Each file showcases a unique approach to LLM integration — from manual context management to streaming responses.

---

## Tech Stack

- **Node.js** — ES Modules
- **@google/genai** v1.38.0 — Google Gemini API SDK
- **dotenv** — Environment variable management
- **readline-sync** — Synchronous CLI input

---

## Files Overview

| File | Approach | Streaming | Context | Persona |
|------|----------|:---------:|---------|---------|
| `index.js` | Chat session + streaming + thinking | ✅ | SDK-managed | Jarvis |
| `LLM.js` | Manual context window array | ❌ | Manual (`CONTEXT[]`) | mondal |
| `LLM_WITH_CONTEXT.js` | Built-in chat history | ❌ | SDK-managed | None |
| `LLM_streaming_responses.js` | Streaming with manual context | ✅ | Manual (broken) | modi |

---

## Setup

1. **Clone the repo:**
   ```bash
   git clone https://github.com/Arijit-mondal099/learning_how_llm_works.git
   cd learning_how_llm_works
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env` file:**
   ```
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```
   > Get your API key from [Google AI Studio](https://aistudio.google.com/apikey)

4. **Run the default example (streaming chat):**
   ```bash
   npm start
   ```

5. **Run other examples:**
   ```bash
   node LLM.js
   node LLM_WITH_CONTEXT.js
   node LLM_streaming_responses.js
   ```

---

## What Each File Teaches

### `index.js` — Full-Featured Chat (Start Here)
- Chat session with auto-managed history
- Streaming responses (prints as they generate)
- Thinking configuration enabled
- System prompt for persona (Jarvis)

### `LLM.js` — Manual Context Window
- Shows how LLM "memory" works under the hood
- Manually maintains a `CONTEXT[]` array
- Pushes user input → sends full context → pushes model response

### `LLM_WITH_CONTEXT.js` — Simplest Chat
- Minimal code to get a conversational LLM working
- SDK handles all context automatically
- No system prompt, no streaming

### `LLM_streaming_responses.js` — Streaming
- Demonstrates token-by-token response streaming
- **Note:** This file has a bug — `CONTEXT` variable is undefined

---

## Model

All files use **Gemini 2.5 Flash** (`gemini-3-flash-preview`).

---

## Author

**Arijit Mondal** — [GitHub](https://github.com/Arijit-mondal099)
