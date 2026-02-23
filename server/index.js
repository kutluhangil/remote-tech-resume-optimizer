const express = require("express");
const cors = require("cors");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();

app.use(cors());
app.use(express.json());

const JWT_SECRET = "supersecretkey";

// In-memory databases
let optimizations = [];
let users = [];

// Middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get("/", (req, res) => {
  res.send("API is running...");
});

// POST /register
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: "Missing fields" });

  if (users.find(u => u.email === email)) return res.status(400).json({ error: "User already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: crypto.randomUUID(), name, email, password: hashedPassword };
  users.push(user);

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
  res.json({ token, name: user.name, email: user.email });
});

// POST /login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Missing fields" });

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET);
  res.json({ token, name: user.name, email: user.email });
});

// GET /optimizations - Return stored optimizations, filtered by user
app.get("/optimizations", authenticateToken, (req, res) => {
  const userOptimizations = optimizations.filter(opt => opt.userId === req.user.id);
  const sortedOptimizations = [...userOptimizations].sort((a, b) => b.createdAt - a.createdAt);
  res.json(sortedOptimizations);
});

// POST /analyze - Process and store the optimization
app.post("/analyze", authenticateToken, (req, res) => {
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
    userId: req.user.id,
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