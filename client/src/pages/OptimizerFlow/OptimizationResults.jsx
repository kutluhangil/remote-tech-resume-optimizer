import { Link } from 'react-router-dom';

export default function OptimizationResults({ result, handleReset }) {
    return (
        <div className="bg-[#F3EFEA] dark:bg-[#211911] min-h-screen flex flex-col items-center selection:bg-[#b36619]/20 selection:text-[#b36619] transition-colors duration-300 font-serif">
            <nav className="sticky top-6 z-50 w-full max-w-[960px] px-4 md:px-0 mb-12">
                <div className="bg-white dark:bg-[#2c241b]/90 backdrop-blur-md shadow-sm border border-black/5 dark:border-white/5 rounded-full px-6 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 text-[#171411] dark:text-white">
                        <div className="bg-[#b36619]/10 p-2 rounded-full text-[#b36619]">
                            <span className="material-symbols-outlined text-xl">auto_fix_high</span>
                        </div>
                        <h1 className="font-bold text-lg tracking-tight italic font-serif">Resume Optimizer</h1>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 font-sans">
                        <Link to="/dashboard" className="text-[#171411] dark:text-white text-base font-medium hover:text-[#b36619] transition-colors">Dashboard</Link>
                        <Link to="/history" className="text-[#877564] dark:text-neutral-400 text-base font-medium hover:text-[#b36619] transition-colors">History</Link>
                    </div>
                </div>
            </nav>

            <main className="w-full max-w-[960px] px-6 pb-20 flex flex-col gap-10">
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-black/5 dark:border-white/5">
                    <div className="flex flex-col gap-3 max-w-lg">
                        <div className="flex items-center gap-2 text-[#b36619] font-medium italic font-serif">
                            <span className="material-symbols-outlined text-lg">check_circle</span>
                            <span>Analysis Complete</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl text-[#171411] dark:text-white font-medium leading-[1.1] tracking-tight font-serif">
                            Optimization Results
                        </h2>
                    </div>
                    <button onClick={handleReset} className="group flex items-center gap-2 px-6 py-3 bg-white dark:bg-[#2c241b] border border-black/10 dark:border-white/10 rounded-full hover:bg-[#b36619] hover:border-[#b36619] hover:text-white transition-all duration-300 shadow-sm font-sans">
                        <span className="material-symbols-outlined text-xl">add</span>
                        <span className="font-bold text-sm tracking-wide">Start New Optimization</span>
                    </button>
                </header>

                <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-6 bg-white dark:bg-[#2c241b] rounded-[2rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group shadow-sm border border-black/5 dark:border-white/5">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[120px]">analytics</span>
                        </div>
                        <div>
                            <h3 className="text-lg font-medium text-[#877564] dark:text-neutral-400 mb-1 font-serif">Overall Match Score</h3>
                            <p className="text-sm text-[#877564]/80 dark:text-neutral-500 font-sans">Based on job description relevancy</p>
                        </div>
                        <div className="mt-8 flex items-baseline gap-2">
                            <span className="text-8xl md:text-9xl font-light text-[#b36619] tracking-tighter italic font-serif">{result.matchScore}%</span>
                        </div>
                        <div className="w-full bg-[#F3EFEA] dark:bg-neutral-800 h-2 rounded-full mt-6 overflow-hidden">
                            <div className="bg-[#b36619] h-full rounded-full transition-all duration-1000" style={{ width: `${result.matchScore}%` }}></div>
                        </div>
                    </div>

                    <div className="md:col-span-6 flex flex-col gap-6">
                        <div className="flex-1 bg-white dark:bg-[#2c241b] rounded-[2rem] p-8 flex flex-col justify-center shadow-sm border border-black/5 dark:border-white/5">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex flex-col">
                                    <h3 className="text-xl font-medium text-[#171411] dark:text-white font-serif">ATS Parse Rate</h3>
                                    <span className="text-[#877564] dark:text-neutral-400 text-sm font-sans">Readability for automated systems</span>
                                </div>
                                <span className="px-3 py-1 bg-[#b36619]/10 text-[#b36619] rounded-full text-xs font-bold uppercase tracking-wider font-sans">High</span>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-4">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 pb-2 border-b border-black/5 dark:border-white/5">
                            <span className="material-symbols-outlined text-[#b36619]">sell</span>
                            <h3 className="text-xl font-bold text-[#171411] dark:text-white font-serif">Missing Keywords</h3>
                        </div>
                        <div className="flex flex-wrap gap-3 content-start">
                            {result.missingKeywords && result.missingKeywords.length > 0 ? result.missingKeywords.map((keyword, i) => (
                                <div key={i} className="px-4 py-2 rounded-full bg-white dark:bg-[#2c241b] border border-black/5 dark:border-white/10 text-[#171411] dark:text-neutral-200 text-sm font-medium hover:border-[#b36619]/50 transition-colors font-sans">
                                    {keyword}
                                </div>
                            )) : (
                                <p className="text-sm font-sans text-green-600">No major keywords missing! Great job.</p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-2 pb-2 border-b border-black/5 dark:border-white/5">
                            <span className="material-symbols-outlined text-[#b36619]">lightbulb</span>
                            <h3 className="text-xl font-bold text-[#171411] dark:text-white font-serif">Improvement Suggestions</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            {result.suggestions && result.suggestions.length > 0 ? result.suggestions.map((suggestion, i) => (
                                <div key={i} className="bg-white dark:bg-[#2c241b] p-6 rounded-[1.5rem] border border-black/5 dark:border-white/5 shadow-sm">
                                    <div className="size-8 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 flex items-center justify-center mb-3">
                                        <span className="material-symbols-outlined text-sm">edit_note</span>
                                    </div>
                                    <p className="text-[#877564] dark:text-neutral-400 text-sm leading-relaxed font-sans mt-2">
                                        {suggestion}
                                    </p>
                                </div>
                            )) : (
                                <p className="text-sm font-sans text-green-600">Your resume seems highly optimized!</p>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
