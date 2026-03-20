export const clausePrompt = (clauseText) => `
You are a legal assistant.

Simplify the following contract clause into plain English.
Also identify if it is risky.

Clause:
"${clauseText}"

Return JSON:
{
  "summary": "...",
  "risk": "Low | Medium | High",
  "reason": "...",
  "suggestion": "..."
}
`;