const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { GoogleGenAI } = require("@google/genai");

dotenv.config();

const app = express();

// =====================================
// CORS CONFIGURATION
// =====================================

app.use(
  cors({
    origin: "https://glowcare-1.onrender.com",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// =====================================
// BODY PARSER
// =====================================

app.use(express.json({ limit: "10mb" }));

// =====================================
// GEMINI AI
// =====================================

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// =====================================
// TEST BACKEND
// =====================================

app.get("/", (req, res) => {
  res.json({
    message: "GlowCare backend is running!",
  });
});

// =====================================
// SKIN ANALYSIS API
// =====================================

app.post("/analyze-skin", async (req, res) => {
  try {
    const { image } = req.body;

    // Check image
    if (!image) {
      return res.status(400).json({
        error: "Image is required",
      });
    }

    // Remove base64 image prefix
    const base64Image = image.replace(
      /^data:image\/\w+;base64,/,
      ""
    );

    // Send image to Gemini
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

    // Get Gemini response
    const text = response.text;

    console.log("Gemini response:", text);

    // Remove markdown code blocks if present
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    // Convert Gemini response to JSON
    const result = JSON.parse(cleanedText);

    // Send result to frontend
    res.json(result);

  } catch (error) {
    console.error("Gemini error:", error);

    res.status(500).json({
      error: "AI skin analysis failed",
      details: error.message,
    });
  }
});

// =====================================
// START SERVER
// =====================================

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
