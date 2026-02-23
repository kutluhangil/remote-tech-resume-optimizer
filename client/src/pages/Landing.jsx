import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Landing() {
    return (
        <div className="relative flex flex-col w-full text-text-main bg-background-light dark:bg-background-dark dark:text-white transition-colors duration-300 antialiased min-h-screen">
            <Navigation />

            <main className="flex-grow pt-32 pb-20">
                <section className="container mx-auto px-6 lg:px-12 mb-24">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column Component */}
                        <div className="flex flex-col gap-8 max-w-2xl">
                            <div className="flex flex-col gap-4">
                                <span className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-neutral-200/50 text-xs font-medium text-primary/80 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-700">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    New: Git Analysis v2.0
                                </span>
                                <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium text-primary dark:text-white">
                                    Optimize Your Resume for Remote Tech Jobs
                                </h1>
                                <p className="text-lg md:text-xl text-text-muted dark:text-neutral-400 font-light leading-relaxed max-w-lg">
                                    The minimalist AI tool designed to help developers pass ATS filters and land remote roles with precision.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/analyze" className="flex items-center justify-center h-12 px-8 rounded-full bg-primary hover:bg-primary-hover text-white text-base font-medium transition-all shadow-xl shadow-primary/25 hover:-translate-y-0.5 dark:bg-white dark:text-primary">
                                    Analyze Resume
                                </Link>
                                <button className="h-12 px-8 rounded-full bg-transparent border border-primary/20 hover:border-primary/50 text-primary text-base font-medium transition-all hover:bg-primary/5 dark:text-white dark:border-white/20 dark:hover:bg-white/10">
                                    View Sample
                                </button>
                            </div>
                        </div>

                        {/* Right Column Visual */}
                        <div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-[#E8E1D9] to-white rounded-full blur-3xl opacity-60 dark:from-neutral-800 dark:to-neutral-900"></div>

                            <div className="relative w-full max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-soft p-8 rotate-y-6 rotate-x-6 transition-transform duration-500 hover:rotate-0 border border-white/50 dark:border-neutral-700">
                                <div className="flex justify-between items-start mb-8">
                                    <div>
                                        <h3 className="text-lg font-bold text-primary dark:text-white">Resume Analysis</h3>
                                        <p className="text-sm text-text-muted dark:text-neutral-400">Senior Frontend Engineer</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        <div className="text-4xl font-serif font-bold text-primary dark:text-white">78<span className="text-xl font-sans text-text-muted dark:text-neutral-500">%</span></div>
                                        <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full dark:bg-green-900/30 dark:text-green-400">Good Match</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-text-muted dark:text-neutral-400">Remote Readiness</span>
                                            <span className="text-primary dark:text-white">92/100</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary dark:bg-neutral-700 rounded-full overflow-hidden">
                                            <div className="h-full w-[92%] bg-primary dark:bg-white rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm font-medium">
                                            <span className="text-text-muted dark:text-neutral-400">Keywords Match</span>
                                            <span className="text-primary dark:text-white">65/100</span>
                                        </div>
                                        <div className="h-2 w-full bg-secondary dark:bg-neutral-700 rounded-full overflow-hidden">
                                            <div className="h-full w-[65%] bg-yellow-500 rounded-full"></div>
                                        </div>
                                    </div>

                                    <div className="bg-secondary/30 dark:bg-neutral-900/50 rounded-xl p-4 mt-6">
                                        <div className="flex gap-3">
                                            <span className="material-symbols-outlined text-amber-600 text-xl">lightbulb</span>
                                            <div className="text-sm">
                                                <p className="font-medium text-primary dark:text-white mb-1">Suggestion</p>
                                                <p className="text-text-muted dark:text-neutral-400 leading-relaxed">Quantify your impact in the "Stripe Integration" section. Use metrics like "reduced latency by 20%".</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="py-24 bg-surface-light dark:bg-surface-dark/20 rounded-[3rem] mx-4 md:mx-8">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="font-serif text-3xl md:text-4xl text-primary dark:text-white mb-4">How It Works</h2>
                            <p className="text-text-muted dark:text-neutral-400 max-w-lg mx-auto">Three simple steps to optimize your resume for the nuances of remote engineering roles.</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-white/50 dark:border-neutral-700 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-secondary/50 dark:bg-neutral-700 flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">content_paste</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Paste Resume</h3>
                                    <p className="text-text-muted dark:text-neutral-400 text-sm leading-relaxed">Upload your existing PDF or simply paste the text directly into our secure editor.</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-white/50 dark:border-neutral-700 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-secondary/50 dark:bg-neutral-700 flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">add_link</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Add Job Description</h3>
                                    <p className="text-text-muted dark:text-neutral-400 text-sm leading-relaxed">Link the job posting you are targeting. We analyze the specific requirements.</p>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-sm border border-white/50 dark:border-neutral-700 flex flex-col gap-6 group hover:-translate-y-1 transition-transform duration-300">
                                <div className="w-12 h-12 rounded-full bg-secondary/50 dark:bg-neutral-700 flex items-center justify-center text-primary dark:text-white group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">bar_chart</span>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-primary dark:text-white mb-2">Get ATS Score</h3>
                                    <p className="text-text-muted dark:text-neutral-400 text-sm leading-relaxed">Receive a detailed breakdown, semantic match score, and optimization tips.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
