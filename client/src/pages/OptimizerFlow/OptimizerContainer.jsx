import { useState, useContext } from "react";
import OptimizationInput from "./OptimizationInput";
import OptimizationResults from "./OptimizationResults";
import { AuthContext } from "../../context/AuthContext";

export default function OptimizerContainer() {
    const [resume, setResume] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthContext);

    const handleAnalyze = async () => {
        if (!resume || !jobDescription) return;
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5050/analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
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

    const handleReset = () => {
        setResult(null);
    };

    return (
        <>
            {!result ? (
                <OptimizationInput
                    resume={resume}
                    setResume={setResume}
                    jobDescription={jobDescription}
                    setJobDescription={setJobDescription}
                    handleAnalyze={handleAnalyze}
                    loading={loading}
                />
            ) : (
                <OptimizationResults
                    result={result}
                    handleReset={handleReset}
                />
            )}
        </>
    );
}
