import Tesseract from "tesseract.js";

export const runOCR = async (filePath) => {
  const { data } = await Tesseract.recognize(filePath, "eng");
  return data.text;
};