import { useState } from "react";

function App() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5050/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ resume, jobDescription })
      });

      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error:", error);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Remote Tech Resume Optimizer</h1>

      <h3>Resume</h3>
      <textarea
        rows="6"
        style={{ width: "100%", marginBottom: "20px" }}
        value={resume}
        onChange={(e) => setResume(e.target.value)}
      />

      <h3>Job Description</h3>
      <textarea
        rows="6"
        style={{ width: "100%", marginBottom: "20px" }}
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
      />

      <button onClick={handleAnalyze} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze & Optimize"}
      </button>

      {result && (
        <div style={{ marginTop: "40px" }}>
          <h2>Match Score: {result.matchScore}%</h2>

          <h3>Missing Keywords</h3>
          <ul>
            {result.missingKeywords.map((keyword, index) => (
              <li key={index}>{keyword}</li>
            ))}
          </ul>

          <h3>Suggestions</h3>
          <ul>
            {result.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;