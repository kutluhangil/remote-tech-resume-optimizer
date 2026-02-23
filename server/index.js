const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory array to store optimization results
let optimizations = [];

app.get("/", (req, res) => {
  res.send("API is running...");
});

// GET /optimizations - Return stored optimizations, most recent first
app.get("/optimizations", (req, res) => {
  const sortedOptimizations = [...optimizations].sort((a, b) => b.createdAt - a.createdAt);
  res.json(sortedOptimizations);
});

// POST /analyze - Process and store the optimization
app.post("/analyze", (req, res) => {
  const { resume, jobDescription } = req.body;

  if (!resume || !jobDescription) {
    return res.status(400).json({ error: "Missing resume or job description" });
  }

  // Generate generic dummy results for demonstration
  const matchScore = Math.floor(Math.random() * 41) + 60; // Random score between 60 and 100
  const missingKeywords = ["GraphQL", "CI/CD", "AWS", "Figma", "WebSockets"].sort(() => 0.5 - Math.random()).slice(0, 3);
  const suggestions = [
    "Quantify your impact in the 'Stripe Integration' section. Use metrics like 'reduced latency by 20%'.",
    "Consider adding 'Cross-functional collaboration' to improve your ATS readability for this role.",
    "Your summary is strong, but focus more on the async communication aspects required for this remote position."
  ].sort(() => 0.5 - Math.random()).slice(0, 2);

  const result = {
    matchScore,
    missingKeywords,
    suggestions
  };

  // Create the optimization record
  const newOptimization = {
    id: crypto.randomUUID(),
    resume,
    jobDescription,
    result,
    score: matchScore,
    createdAt: Date.now()
  };

  // Store it in memory
  optimizations.push(newOptimization);

  res.json(newOptimization);
});

const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});