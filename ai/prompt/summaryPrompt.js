export const summaryPrompt = (fullText) => `
Summarize this contract in simple language.

Focus on:
- Key terms
- Obligations
- Risks

Text:
"${fullText}"

Return in bullet points.
`;