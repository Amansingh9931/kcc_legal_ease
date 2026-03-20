import { runOCR } from "../services/ocrService.js";
import { analyzeContract } from "../services/llmService.js";

export const handleUpload = async (req, res) => {
  try {
    let text = "";

    if (req.file) {
      text = await runOCR(req.file.path);
    }

    const result = await analyzeContract(text);

    res.json({
      success: true,
      data: result,
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};