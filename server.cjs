const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Origin",
    "https://glowcare-1.onrender.com"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json({ limit: "10mb" }));

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.get("/", (req, res) => {
  res.json({
    message: "GlowCare backend is running!",
  });
});

app.post("/analyze-skin", async (req, res) => {
  try {
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({
        error: "Image is required",
      });
    }

    const base64Image = image.replace(
      /^data:image\/\w+;base64,/,
      ""
    );

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: "image/jpeg",
                data: base64Image,
              },
            },
            {
              text: `
Analyze this face image for a skincare application called GlowCare.

Return ONLY valid JSON in this exact format:

{
  "skinType": "string",
  "concerns": ["string", "string"],
  "recommendation": "string"
}

Possible skin types:
- Oily
- Dry
- Combination
- Normal

Identify only visible skincare concerns.
Do not diagnose medical conditions.
Do not identify the person.
Give general skincare recommendations only.

Keep the response short and practical.
`,
            },
          ],
        },
      ],
    });

    const text = response.text;

    console.log("Gemini response:", text);

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(cleanedText);

    res.json(result);
  } catch (error) {
    console.error("Gemini error:", error);

    res.status(500).json({
      error: "AI skin analysis failed",
      details: error.message,
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
