import axios from "axios";

export const translateText = async (text, targetLang = "hi") => {
  try {
    const res = await axios.post(
      "https://translation.googleapis.com/language/translate/v2",
      {},
      {
        params: {
          q: text,
          target: targetLang,
          key: process.env.GOOGLE_TRANSLATE_API_KEY,
        },
      }
    );

    return res.data.data.translations[0].translatedText;
  } catch (err) {
    console.error("Translation Error:", err.message);
    return text;
  }
};