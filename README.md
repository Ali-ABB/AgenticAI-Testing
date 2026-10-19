# AgenticAI Testing Framework

Independent Playwright + TypeScript framework for **agentic** evaluation (goals, tool calls, multi-step trajectories).

This repo is **separate** from:

- **UI Testing Framework** — browser UI automation (`Playwright-Automation`)
- **GenAI Testing Framework** — RAG / golden-dataset LLM evaluation

## Setup

```bash
npm install
npx playwright install
cp .env.example .env   # then set AGENT_API_KEY
```

## Run tests

```bash
npx playwright test
npx playwright test --project=chromium
npx playwright show-report
```

## Layout

- `data/` — agent scenarios
- `tests/` — agent evaluation specs (scaffold)
- `playwright.config.ts` — Playwright config

## Next steps

Wire `tests/agent-smoke.spec.ts` to your agent API and assert:

1. Correct tools are selected
2. Final answer matches `must_include` / `must_not_include`
3. No unauthorized tool calls
