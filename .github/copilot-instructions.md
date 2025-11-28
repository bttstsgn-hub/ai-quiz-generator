<!-- .github/copilot-instructions.md -->
# Copilot / AI Agent Instructions — test_generator

Summary
- **Purpose:** Small client + backend app that generates AI-ready test prompts from school "criteria" data.
- **Stack:** Static frontend (`index.html`, `app.js`, `styles.css`) + minimal Express backend (`server.js`). No build step.

How the app works (big picture)
- Frontend (`index.html` + `app.js`) hosts UI: grade buttons, subject buttons, a textarea `#test-topic`, and a `Generate` button.
- Frontend calls Backend API at `http://localhost:3000/api/criteria/:grade/:subject` to fetch a plain-text criteria string.
- Backend (`server.js`) holds the authoritative `CRITERIA_DATA` object in-file and returns JSON { success, criteria }.
- After fetching, the frontend composes an AI prompt (placed into `#test-topic`) — this is the main AI integration point.

Key files to inspect
- `server.js` — Express API, port `3000`, CORS allowed (`*`), endpoint: `/api/criteria/:grade/:subject`.
  - CRITERIA_DATA lives here as an in-memory JSON-like object. To add or fix criteria, edit this file.
- `app.js` — frontend logic. Normalizes subject names to lowercase to match keys in `CRITERIA_DATA`. Uses `fetch` to request criteria and fills `#test-topic` with final AI input.
- `index.html` — DOM structure and element IDs/classes the agent may interact with: `#test-topic`, `#num-questions`, `#difficulty`, `.generate-btn`, `.grade-btn`, `.subject-btn`, `#test-output-message`.
- `package.json` — shows `type: commonjs` and `express` dependency; there is no `start` script (run server with `node server.js`).

Developer workflows (how to run & debug)
- Start backend: `node server.js` (listens on port 3000). Confirm console logs: `Backend API http://localhost:3000`.
- Open `index.html` in a browser (file:// or with a static server). Frontend expects backend at `http://localhost:3000`.
- If using Live Server or other static server, keep backend running so `fetch` calls succeed.
- There are no automated tests or build tasks in this repo.

Project-specific conventions & gotchas
- Subject keys in `CRITERIA_DATA` are stored and looked up in lowercase: frontend calls `subject.toLowerCase()` before query — ensure subject button text maps to those keys (see `index.html` subjects: `нийгэм`, `математик`, etc.).
- Grade strings must match exactly the keys in `CRITERIA_DATA` (examples: `9-р анги`, `6-р анги`). Frontend sends grade text verbatim, so preserve the formatting.
- CRITERIA_DATA is the single source-of-truth; there is no DB or external content store. Edits to criteria happen directly in `server.js`.
- Backend returns plain text inside `criteria` (not structured JSON); the frontend inserts that text directly into the AI prompt textarea.
- There is a `save-btn` in the UI but no backend endpoint for saving tests; do not assume persistence exists.

Examples & snippets (from the codebase)
- API request example (used in `app.js`):

  `fetch('http://localhost:3000/api/criteria/9-р анги/нийгэм')`

- Expected successful response:

  `{ "success": true, "criteria": "<plain text criteria here>" }`

When updating or merging copilot instructions
- If this file already exists, preserve any repository-specific rules and add the sections above.
- Keep guidance concise and reference the exact filenames/IDs shown here.

Questions for the repo owner
- Should we add a `start` script to `package.json` (e.g., `node server.js`)?
- Would you prefer extracting `CRITERIA_DATA` to a separate JSON file or a small data folder for easier editing?

If anything is unclear or you'd like more details (examples of common edits, or a proposed `start` script and extraction patch), tell me which option to proceed with.
