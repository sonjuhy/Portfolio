---
trigger: always_on
---


# Project Context: Next.js + Gemini AI Integration

This project is built on **Next.js (App Router)** and utilizes the **Google Gemini API** for AI-driven features. Adhere to the following guidelines for all code generation and modifications.

---

## 1. Tech Stack Core Rules
- **Framework**: Next.js 14+ (App Router strictly required)
- **Language**: TypeScript (Strict Mode)
- **Styling**: Tailwind CSS (Utility-first approach)
- **Components**: Default to **React Server Components (RSC)**. Use `'use client'` only for interactive client-side logic.
- **AI SDK**: Use the `@google/generative-ai` official SDK.

## 2. Gemini API Implementation Guidelines
- **API Protection**: Never expose API keys. All Gemini calls must reside within **Route Handlers** (`app/api/`) or **Server Actions**.
- **Streaming**: Implement `generateContentStream()` where possible to optimize User Experience (UX).
- **Error Handling**: Gracefully handle Quota limits (429) and Safety Setting blocks with user-friendly error messages.

## 3. Code Style & Architecture
- **Data Mutation**: Prioritize **Next.js Server Actions** for form submissions and data updates.
- **Environment Variables**: Keep sensitive keys (e.g., `GOOGLE_API_KEY`) on the server-side. Do NOT use the `NEXT_PUBLIC_` prefix for these.
- **UI Patterns**: Use **Skeleton UI** for loading states to provide immediate visual feedback.

## 4. Prompt Engineering Principles
- **Role-Play**: Always define a persona (e.g., "You are a Senior Full-stack Engineer").
- **Structured Output**: Request JSON format when parsing is required to ensure consistent data structures.