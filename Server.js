const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Proxy endpoint to forward requests to Ollama
app.post("/api/generate", async (req, res) => {
  try {
    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body)
    });

    const text = await response.text();
    let result = {};
    try {
      result = JSON.parse(text.trim().split("\n").pop());
    } catch (e) {
      console.error("Parsing error:", e, text);
      return res.status(500).json({ error: "Invalid Ollama response" });
    }

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Proxy error" });
  }
});

app.use(express.static(".")); // serve HTML/CSS/JS from same folder

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Proxy + static server running at http://localhost:${PORT}`));
