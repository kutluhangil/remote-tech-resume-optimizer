import { Link } from 'react-router-dom';

export default function OptimizationInput({ resume, setResume, jobDescription, setJobDescription, handleAnalyze, loading }) {
    return (
        <div className="bg-[#F3EFEA] dark:bg-[#211911] text-[#2C241B] dark:text-gray-100 min-h-screen flex flex-col font-serif antialiased selection:bg-[#b36619]/20 selection:text-[#b36619]">
            <nav className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white/60 dark:bg-[#2C241B]/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between border border-[#E8E1D9] dark:border-[#3E342B] shadow-sm">
                        <Link to="/" className="flex items-center gap-3 text-[#b36619]">
                            <span className="material-symbols-outlined text-[28px]">description</span>
                            <h1 className="text-xl font-bold tracking-tight italic">Resume Optimizer</h1>
                        </Link>
                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/dashboard" className="text-sm font-medium font-sans text-[#2C241B] dark:text-gray-200 hover:text-[#b36619] transition-colors">Dashboard</Link>
                            <Link to="/history" className="text-sm font-medium font-sans text-[#2C241B] dark:text-gray-200 hover:text-[#b36619] transition-colors">History</Link>
                            <Link to="/pricing" className="text-sm font-medium font-sans text-[#2C241B] dark:text-gray-200 hover:text-[#b36619] transition-colors">Pricing</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col items-center">
                <header className="w-full max-w-4xl text-center mb-10 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8E1D9]/50 dark:bg-white/5 border border-[#b36619]/10 mb-2">
                        <span className="material-symbols-outlined text-[#b36619] text-sm">auto_awesome</span>
                        <span className="text-xs font-semibold text-[#b36619] uppercase tracking-wider font-sans">AI Powered</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-medium italic text-[#171411] dark:text-white leading-tight font-serif">
                        New Optimization
                    </h2>
                    <p className="text-lg text-[#5D544C] dark:text-gray-300 max-w-xl mx-auto leading-relaxed font-sans">
                        Paste your details below to tailor your resume specifically for the algorithm.
                    </p>
                </header>

                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
                    <div className="group relative flex flex-col h-full min-h-[500px] bg-[#E8E1D9] dark:bg-[#2A231C] rounded-xl p-1 border border-transparent hover:border-[#b36619]/20 transition-colors">
                        <div className="bg-white/40 dark:bg-[#362e26] rounded-lg flex-1 flex flex-col p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="resume-input" className="flex items-center gap-2 text-lg font-medium text-[#2C241B] dark:text-gray-100 font-sans">
                                    <span className="material-symbols-outlined text-[#b36619]">description</span>
                                    Your Current Resume
                                </label>
                            </div>
                            <textarea
                                id="resume-input"
                                value={resume}
                                onChange={(e) => setResume(e.target.value)}
                                placeholder="Paste your resume text here..."
                                className="w-full flex-1 bg-transparent border-0 p-0 text-base leading-relaxed resize-none focus:ring-0 placeholder:text-[#877564]/60 dark:placeholder:text-gray-600 text-[#2C241B] dark:text-gray-200 font-sans"
                            ></textarea>
                        </div>
                    </div>

                    <div className="group relative flex flex-col h-full min-h-[500px] bg-[#E8E1D9] dark:bg-[#2A231C] rounded-xl p-1 border border-transparent hover:border-[#b36619]/20 transition-colors">
                        <div className="bg-white/40 dark:bg-[#362e26] rounded-lg flex-1 flex flex-col p-6 backdrop-blur-sm">
                            <div className="flex items-center justify-between mb-4">
                                <label htmlFor="job-input" className="flex items-center gap-2 text-lg font-medium text-[#2C241B] dark:text-gray-100 font-sans">
                                    <span className="material-symbols-outlined text-[#b36619]">work</span>
                                    Remote Job Description
                                </label>
                            </div>
                            <textarea
                                id="job-input"
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                placeholder="Paste the full job description here..."
                                className="w-full flex-1 bg-transparent border-0 p-0 text-base leading-relaxed resize-none focus:ring-0 placeholder:text-[#877564]/60 dark:placeholder:text-gray-600 text-[#2C241B] dark:text-gray-200 font-sans"
                            ></textarea>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-4 w-full max-w-md">
                    <button
                        onClick={handleAnalyze}
                        disabled={loading}
                        className="group relative w-full h-14 bg-[#b36619] hover:bg-[#b36619]/90 text-white rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-3 overflow-hidden font-sans"
                    >
                        <span className="material-symbols-outlined">analytics</span>
                        <span>{loading ? "Analyzing..." : "Analyze & Optimize"}</span>
                    </button>
                </div>
            </main>
        </div>
    );
}
