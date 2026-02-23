import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function History() {
    const [optimizations, setOptimizations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOptimizations = async () => {
            try {
                const response = await fetch('http://localhost:5050/optimizations');
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

    return (
        <div className="bg-[#F3EFEA] dark:bg-[#211911] min-h-screen text-[#171411] font-serif selection:bg-[#b36619]/20">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Navigation */}
                <div className="w-full px-6 py-4 md:px-12 lg:px-20">
                    <nav className="mx-auto flex w-full max-w-[1200px] items-center justify-between rounded-2xl bg-[#EBE5DE]/60 px-6 py-4 backdrop-blur-sm dark:bg-[#2c241b]/60 border border-white/40 dark:border-white/5 shadow-sm">
                        <Link to="/" className="flex items-center gap-3 text-[#171411] dark:text-white">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#b36619] text-white shadow-md">
                                <span className="material-symbols-outlined text-[20px]">description</span>
                            </div>
                            <h1 className="text-xl font-bold tracking-tight">Resume Optimizer</h1>
                        </Link>
                        <div className="hidden items-center gap-8 md:flex">
                            <Link to="/dashboard" className="text-sm font-medium font-sans text-[#877564] hover:text-[#b36619] transition-colors dark:text-gray-400 dark:hover:text-[#8a4d13]">Dashboard</Link>
                            <Link to="/history" className="text-sm font-bold font-sans text-[#b36619] dark:text-[#8a4d13]">History</Link>
                            <Link to="/pricing" className="text-sm font-medium font-sans text-[#877564] hover:text-[#b36619] transition-colors dark:text-gray-400 dark:hover:text-[#8a4d13]">Pricing</Link>
                        </div>
                        <div className="flex items-center gap-4">
                            <button className="hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-white/50 hover:bg-white transition-colors dark:bg-white/10 dark:hover:bg-white/20">
                                <span className="material-symbols-outlined text-[#877564] text-[20px]">notifications</span>
                            </button>
                            <div className="h-10 w-10 overflow-hidden rounded-full border border-white/50 shadow-sm">
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrodkl_rs1QvHF3R-wqOrPeGg8jkJBtnxBXsu0N8App2FtqhvH9s4iDzWemRr5eC8NXPhh2vR51aZ77qebTcxDos8aXJ_oW1BhKLZID5-2il0Av9kg8vy9lM_YD1OMYswkoFlpvoM4pHlwvBkDXB3_imSPu9wxkAScLnyHlveAgz0NU4zILdkTjgLpLx02cqHDoa8DTgLrprpMnnRG9owmPuier2n-yfDOPdBEaDdiWFVjkyZ1UvnMbF5hGQQsl2oMFukdCQwXLvQ" alt="User Avatar" className="h-full w-full object-cover" />
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Main Content */}
                <main className="flex flex-1 flex-col items-center px-6 pb-20 pt-8 md:px-12 lg:px-20">
                    <div className="w-full max-w-[960px]">
                        <header className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                            <div className="flex flex-col gap-3 max-w-xl">
                                <h2 className="text-4xl font-semibold italic leading-tight tracking-tight text-[#171411] dark:text-white md:text-5xl">
                                    Optimization History
                                </h2>
                                <p className="text-lg text-[#877564] dark:text-gray-400 leading-relaxed font-sans">
                                    Review your past resume enhancements and track your improvements over time. An archive of your professional narrative.
                                </p>
                            </div>
                            <Link to="/analyze" className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#171411] px-6 py-3 text-white transition-all hover:bg-[#b36619] hover:shadow-lg dark:bg-white dark:text-[#211911] dark:hover:bg-[#8a4d13] shadow-md">
                                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-90">add</span>
                                <span className="font-medium tracking-wide font-sans">New Optimization</span>
                            </Link>
                        </header>

                        <div className="mb-10 flex flex-col gap-4 rounded-2xl bg-white/40 p-2 backdrop-blur-sm dark:bg-white/5 md:flex-row md:items-center border border-white/40 dark:border-white/5">
                            <div className="relative flex-1">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-[#877564]">
                                    <span className="material-symbols-outlined text-[20px]">search</span>
                                </div>
                                <input type="text" placeholder="Search by role or company..." className="block w-full rounded-xl border-none bg-transparent py-3 pl-11 pr-4 text-base text-[#171411] placeholder-[#877564]/70 focus:ring-2 focus:ring-[#b36619]/20 dark:text-white dark:placeholder-gray-500 font-sans" />
                            </div>
                            <div className="flex items-center gap-2 px-2 pb-2 md:pb-0 font-sans">
                                <div className="relative">
                                    <select className="appearance-none cursor-pointer rounded-xl bg-[#EBE5DE] dark:bg-[#362e26] py-2.5 pl-4 pr-10 text-sm font-medium text-[#171411] hover:bg-[#E0DAD3] focus:outline-none focus:ring-2 focus:ring-[#b36619]/20 dark:text-white dark:hover:bg-[#453b32] border border-transparent hover:border-[#D6CEC5] transition-all">
                                        <option>All Roles</option>
                                        <option>Frontend</option>
                                        <option>Backend</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#171411] dark:text-white">
                                        <span className="material-symbols-outlined text-[18px]">filter_list</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-6">
                            {loading ? (
                                <div className="p-12 text-center text-[#877564]">Loading your optimization history...</div>
                            ) : optimizations.length === 0 ? (
                                <div className="p-12 text-center text-[#877564] bg-white dark:bg-[#2c241b] rounded-2xl border border-white/50 dark:border-white/5">
                                    No past optimizations found. Start a new one!
                                </div>
                            ) : (
                                optimizations.map((opt) => (
                                    <div key={opt.id} className="group relative flex flex-col gap-6 rounded-2xl bg-[#E8E1D9] p-6 transition-all hover:bg-[#E3DBD3] hover:shadow-md dark:bg-[#2A221A] dark:hover:bg-[#332a21] md:flex-row md:items-center md:justify-between border border-transparent hover:border-[#b36619]/10">
                                        <div className="flex flex-1 flex-col gap-3">
                                            <div className="flex items-start justify-between md:justify-start md:gap-4">
                                                <h3 className="text-2xl font-semibold text-[#171411] dark:text-white group-hover:text-[#b36619] transition-colors font-serif">
                                                    Target Role Database Save
                                                </h3>
                                            </div>
                                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[#877564] dark:text-gray-400 font-sans">
                                                <span className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[16px]">business</span>
                                                    Remote
                                                </span>
                                                <span className="h-1 w-1 rounded-full bg-[#877564]/40"></span>
                                                <span className="flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                                                    {new Date(opt.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-between gap-8 border-t border-black/5 pt-4 dark:border-white/5 md:border-t-0 md:pt-0">
                                            <div className="hidden flex-col items-end md:flex">
                                                <span className="text-4xl font-bold text-[#171411] dark:text-white">{opt.score}%</span>
                                                <span className="text-xs text-[#877564] dark:text-gray-500 font-sans uppercase tracking-wider">ATS Score</span>
                                            </div>
                                            <Link to="/analyze" className="group/btn flex items-center justify-center rounded-full bg-white p-3 text-[#171411] shadow-sm transition-all hover:bg-[#b36619] hover:text-white dark:bg-white/10 dark:text-white dark:hover:bg-[#b36619] md:h-12 md:w-12 md:bg-transparent md:shadow-none md:ring-1 md:ring-black/10 md:hover:ring-[#b36619] dark:md:ring-white/20">
                                                <span className="material-symbols-outlined text-[20px] transition-transform group-hover/btn:translate-x-0.5 md:text-[24px]">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                    </div>
                </main>
            </div>
        </div>
    );
}
