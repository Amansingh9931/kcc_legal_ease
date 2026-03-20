import axios from "axios";
import { clausePrompt } from "../prompts/clausePrompt.js";

export const analyzeClause = async (clauseText) => {
  try {
    const prompt = clausePrompt(clauseText);

    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    const content = response.data.choices[0].message.content;

    return JSON.parse(content);
  } catch (err) {
    console.error("Clause Analysis Error:", err.message);
    return null;
  }
};