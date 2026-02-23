import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard() {
    const [optimizations, setOptimizations] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token } = useContext(AuthContext);

    useEffect(() => {
        const fetchOptimizations = async () => {
            try {
                const response = await fetch('http://localhost:5050/optimizations', {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                const data = await response.json();
                setOptimizations(data);
            } catch (error) {
                console.error("Failed to fetch optimizations:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchOptimizations();
    }, []);

    // Calculate metrics
    const totalOptimizations = optimizations.length;
    const latestScore = totalOptimizations > 0 ? optimizations[0].score : 0;
    const isHighReadiness = latestScore >= 80;

    return (
        <div className="bg-[#F3EFEA] dark:bg-[#211911] text-[#171411] dark:text-gray-100 min-h-screen flex flex-col items-center font-serif">
            {/* Floating Navigation */}
            <div className="fixed top-6 z-50 w-full max-w-[960px] px-4">
                <nav className="bg-white/80 dark:bg-[#2c241b]/90 backdrop-blur-md border border-white/50 dark:border-white/10 shadow-sm rounded-full px-6 py-3 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[#b36619] text-2xl">edit_note</span>
                        <span className="text-xl font-bold tracking-tight text-[#171411] dark:text-white">Resume Optimizer</span>
                    </Link>
                    <div className="hidden md:flex items-center gap-8 font-sans">
                        <Link to="/dashboard" className="text-sm font-bold text-[#b36619] transition-colors dark:text-[#b36619]">Dashboard</Link>
                        <Link to="/history" className="text-sm font-medium text-[#877564] hover:text-[#b36619] transition-colors dark:text-gray-400 dark:hover:text-[#b36619]">History</Link>
                        <Link to="/pricing" className="text-sm font-medium text-[#877564] hover:text-[#b36619] transition-colors dark:text-gray-400 dark:hover:text-[#b36619]">Pricing</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-sm font-medium text-[#171411] hover:text-[#b36619] transition-colors dark:text-gray-200 font-sans">EN/ES</button>
                        <div className="w-px h-4 bg-gray-300 dark:bg-gray-600"></div>
                        <div className="size-8 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-600" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBiYONbMf5D3mZbOTgTildWOkQKVT-oOjjdtazOHmd1iZcpUwXaJxxWqHC0ymDGjVe9uBrQDuKTX3OMskz5Gsoli3MChbvZXuvtNVqObetzhkZsIfz7SqQLTUFhE8nzYqCKKf_5HUhWX7mE6VszHGuBGRwim5sRXmSffJE-ul4zPdJY2435THWrUnZrMnoWlegM1f7_sa60_wZ5I92M7TSNyJra1f0YLXMGwRolTQi4SL4-NAMd8djC03hFoCRYXDDgQmtn6qwtU90')" }}></div>
                    </div>
                </nav>
            </div>

            <main className="w-full max-w-[1024px] pt-32 pb-12 px-6 flex flex-col gap-10">
                <header className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-[#171411]/10 pb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-5xl md:text-6xl font-medium tracking-tight text-[#171411] dark:text-white">Your Workspace</h1>
                        <p className="text-xl text-[#877564] dark:text-gray-400 italic">Ready for your next role?</p>
                    </div>
                    <Link to="/analyze" className="group flex items-center gap-2 bg-[#171411] dark:bg-[#b36619] text-white dark:text-white px-6 py-3 rounded-xl hover:bg-[#b36619] dark:hover:bg-[#8a4d13] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        <span className="text-sm font-bold font-sans tracking-wide">New Optimization</span>
                    </Link>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-4 flex flex-col gap-6">
                        <div className="bg-white dark:bg-[#2c241b] p-8 rounded-2xl shadow-sm border border-white/50 dark:border-white/5 flex flex-col justify-between h-full min-h-[240px] relative overflow-hidden group">
                            <div className="absolute -right-10 -top-10 size-40 bg-[#b36619]/5 rounded-full blur-3xl group-hover:bg-[#b36619]/10 transition-colors"></div>
                            <div className="flex items-start justify-between">
                                <span className="text-[#877564] dark:text-gray-400 font-medium font-sans text-sm uppercase tracking-wider">Total Optimizations</span>
                                <span className="material-symbols-outlined text-[#b36619]/40">monitoring</span>
                            </div>
                            <div className="flex flex-col gap-1 mt-4">
                                <span className="text-7xl font-light text-[#171411] dark:text-white">
                                    {loading ? "-" : totalOptimizations}
                                </span>
                                <Link to="/history" className="text-[#b36619] hover:text-[#8a4d13] font-medium font-sans text-sm flex items-center gap-1 mt-2 group-hover:translate-x-1 transition-transform">
                                    View History <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                                </Link>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#E8E1D9] dark:bg-[#2c241b] p-5 rounded-xl border border-white/50 dark:border-white/5 flex flex-col gap-3">
                                <span className="text-[#877564] dark:text-gray-400 text-xs font-bold font-sans uppercase tracking-wider">Latest Score</span>
                                <span className="text-3xl font-medium text-[#171411] dark:text-white">
                                    {loading ? "-" : (totalOptimizations > 0 ? `${latestScore}%` : "N/A")}
                                </span>
                            </div>
                            <div className="bg-[#E8E1D9] dark:bg-[#2c241b] p-5 rounded-xl border border-white/50 dark:border-white/5 flex flex-col gap-3">
                                <span className="text-[#877564] dark:text-gray-400 text-xs font-bold font-sans uppercase tracking-wider">Readiness</span>
                                <span className="text-3xl font-medium text-[#171411] dark:text-white">
                                    {loading ? "-" : (totalOptimizations > 0 ? (isHighReadiness ? "High" : "Low") : "N/A")}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-8 flex flex-col gap-6">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-xl font-medium text-[#171411] dark:text-white">Recent Optimizations</h3>
                            <Link to="/history" className="text-sm text-[#877564] hover:text-[#b36619] dark:text-gray-400 transition-colors font-sans">View All</Link>
                        </div>

                        <div className="flex flex-col gap-4">
                            {loading ? (
                                <div className="p-6 text-center text-[#877564]">Loading recent optimizations...</div>
                            ) : optimizations.length === 0 ? (
                                <div className="p-6 text-center text-[#877564] bg-white dark:bg-[#2c241b] rounded-2xl border border-white/50 dark:border-white/5">
                                    No optimizations yet. Start your first one!
                                </div>
                            ) : (
                                optimizations.slice(0, 3).map((opt) => (
                                    <div key={opt.id} className="group bg-white dark:bg-[#2c241b] p-6 rounded-2xl shadow-sm border border-white/50 dark:border-white/5 hover:shadow-md transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                                        <div className="flex-1 flex flex-col gap-1">
                                            <h4 className="text-xl font-bold text-[#171411] dark:text-white group-hover:text-[#b36619] transition-colors">Target Role</h4>
                                            <div className="flex items-center gap-2 mt-1 flex-wrap">
                                                {opt.result?.missingKeywords?.slice(0, 2).map((kw, i) => (
                                                    <span key={i} className="px-2 py-0.5 rounded bg-[#E8E1D9] dark:bg-white/10 text-xs text-[#877564] dark:text-gray-300 font-sans">{kw}</span>
                                                ))}
                                                <span className="text-xs text-[#877564] dark:text-gray-500 ml-1 font-sans">
                                                    • {new Date(opt.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6 sm:justify-end">
                                            <div className="flex flex-col items-end">
                                                <span className="text-4xl font-light text-[#171411] dark:text-white">{opt.score}%</span>
                                                <span className={`text-xs font-medium font-sans flex items-center ${opt.score >= 80 ? 'text-green-600' : 'text-amber-600'}`}>
                                                    <span className="material-symbols-outlined text-[14px] mr-0.5">{opt.score >= 80 ? 'trending_up' : 'trending_flat'}</span>
                                                    {opt.score >= 80 ? 'Good Match' : 'Needs Work'}
                                                </span>
                                            </div>
                                            <Link to={`/history`} className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#877564] group-hover:bg-[#b36619] group-hover:text-white group-hover:border-[#b36619] transition-all">
                                                <span className="material-symbols-outlined">arrow_outward</span>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h3 className="text-xl font-medium text-[#171411] dark:text-white mb-6 px-2">From the Editor</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#171411] dark:bg-black text-white p-8 rounded-2xl relative overflow-hidden flex flex-col justify-end min-h-[200px] group cursor-pointer">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 opacity-60" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAlaIrgc4OQ_SbS-l5YD85j7otPO1LQtktfKEQ41hIVQMy-2HRFGn5J6OaQCzqnJBx6RkuGvUKvcyI8kKCQHxJR9xRzFYQhFusv5Y5kU94GcwmgN7U_Kics6t3cy9B3cON-N3dDxGxCcfNAZjW6Dia5pP2bIppaB6TNhUoMy8maRArmtIdGK3NEstsOrSXUQO4nMaaVPa58EECqSzSKEXj1kZukMk_0lA27gh74vunLXy-vQnqt7wQdeQLMLATTPm2_6pKnW2X8TX0')" }}></div>
                            <div className="relative z-20">
                                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold font-sans mb-3 border border-white/10">Guide</span>
                                <h4 className="text-2xl font-serif font-medium leading-tight mb-2">Crafting the Perfect Remote Cover Letter</h4>
                                <p className="text-white/70 text-sm font-sans line-clamp-2">Learn the subtle art of addressing asynchronous communication skills in your application.</p>
                            </div>
                        </div>
                        <div className="bg-[#E8E1D9] dark:bg-[#2c241b] p-8 rounded-2xl border border-white/50 dark:border-white/5 flex flex-col justify-center items-start gap-4">
                            <span className="material-symbols-outlined text-4xl text-[#b36619]">psychology</span>
                            <div>
                                <h4 className="text-2xl font-serif font-bold text-[#171411] dark:text-white mb-2">AI Analysis Insight</h4>
                                <p className="text-[#877564] dark:text-gray-400 text-sm leading-relaxed max-w-md font-sans">
                                    {totalOptimizations > 0
                                        ? (optimizations[0].result?.suggestions?.[0] || 'Keep optimizing your resume to land your dream role!')
                                        : 'Start an analysis to get AI powered insights on your resume.'}
                                </p>
                            </div>
                            <Link to="/history" className="text-sm font-bold text-[#171411] font-sans dark:text-white underline decoration-[#b36619] decoration-2 underline-offset-4 hover:text-[#b36619] transition-colors">Read Full Report</Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
