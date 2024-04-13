const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const OpenAI = require("openai");
const app = express();
app.use(bodyParser.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: "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",
});

app.post("/chatbot", async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      prompt: prompt,
      temperature: 0,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    res.send(completion.choices[0].text);
  } catch (error) {
    console.error("Error fetching completion:", error);
    res.status(500).send("Failed to fetch response from OpenAI.");
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}`);
});