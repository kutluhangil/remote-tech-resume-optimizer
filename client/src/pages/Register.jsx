import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="bg-[#F3EFEA] dark:bg-[#211911] min-h-screen flex flex-col items-center justify-start relative font-sans text-[#171411] overflow-x-hidden selection:bg-[#b36619]/20 selection:text-[#b36619]">
            {/* Navigation */}
            <nav className="w-full mx-auto px-4 sm:px-6 pt-6 z-50">
                <div className="bg-white/80 dark:bg-[#2c241b]/80 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between shadow-sm border border-white/50 dark:border-white/10 mx-auto max-w-3xl">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="text-[#b36619] transition-transform group-hover:rotate-12 duration-300">
                            <span className="material-symbols-outlined text-[28px]">description</span>
                        </div>
                        <h1 className="font-serif font-semibold text-lg tracking-tight text-[#171411] dark:text-gray-100">RTJ Optimizer</h1>
                    </div>
                    <Link to="/" className="text-sm font-medium text-[#171411]/80 hover:text-[#b36619] transition-colors flex items-center gap-1 dark:text-gray-300 dark:hover:text-[#b36619]">
                        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center w-full px-4 py-12">
                <div className="bg-white dark:bg-[#1a140e] w-full max-w-[520px] rounded-2xl shadow-sm border border-[#e6e1dc] dark:border-[#3a3a3a] overflow-hidden relative">
                    <div className="h-1.5 w-full bg-gradient-to-r from-[#b36619]/40 via-[#b36619] to-[#b36619]/40"></div>

                    <div className="p-8 sm:p-12">
                        <div className="text-center mb-10">
                            <h2 className="font-serif text-4xl font-bold text-[#171411] dark:text-white mb-3 italic">Create Your Account</h2>
                            <p className="text-[#877564] dark:text-gray-400 text-base">Join thousands of developers optimizing their remote career.</p>
                        </div>

                        <form className="space-y-5">
                            <div className="space-y-1.5">
                                <label htmlFor="fullname" className="block text-sm font-medium text-[#171411] dark:text-gray-200 font-serif tracking-wide">Full Name</label>
                                <input type="text" id="fullname" placeholder="e.g. Alex Morgan" className="w-full rounded-lg border-gray-200 bg-[#FAFAF9] dark:bg-[#2c241b] dark:border-[#3a3a3a] px-4 py-3 text-[#171411] dark:text-gray-100 placeholder-[#877564]/70 focus:border-[#b36619] focus:ring-[#b36619]/20 focus:ring-4 transition-all duration-200 outline-none" />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="email" className="block text-sm font-medium text-[#171411] dark:text-gray-200 font-serif tracking-wide">Email Address</label>
                                <input type="email" id="email" placeholder="name@example.com" className="w-full rounded-lg border-gray-200 bg-[#FAFAF9] dark:bg-[#2c241b] dark:border-[#3a3a3a] px-4 py-3 text-[#171411] dark:text-gray-100 placeholder-[#877564]/70 focus:border-[#b36619] focus:ring-[#b36619]/20 focus:ring-4 transition-all duration-200 outline-none" />
                            </div>

                            <div className="space-y-1.5">
                                <label htmlFor="password" className="block text-sm font-medium text-[#171411] dark:text-gray-200 font-serif tracking-wide">Password</label>
                                <div className="relative">
                                    <input type="password" id="password" placeholder="••••••••" className="w-full rounded-lg border-gray-200 bg-[#FAFAF9] dark:bg-[#2c241b] dark:border-[#3a3a3a] px-4 py-3 text-[#171411] dark:text-gray-100 placeholder-[#877564]/70 focus:border-[#b36619] focus:ring-[#b36619]/20 focus:ring-4 transition-all duration-200 outline-none" />
                                    <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-[#877564] hover:text-[#b36619] transition-colors">
                                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                                    </button>
                                </div>
                            </div>

                            <button type="button" className="w-full bg-[#b36619] hover:bg-[#b36619]/90 text-white font-medium py-3.5 px-4 rounded-lg shadow-sm transition-all duration-300 transform active:scale-[0.98] mt-2 flex items-center justify-center gap-2 group">
                                <span>Create Account</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </form>

                        <div className="relative my-8">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-gray-200 dark:border-[#3a3a3a]"></div>
                            </div>
                            <div className="relative flex justify-center">
                                <span className="bg-white dark:bg-[#1a140e] px-3 text-sm text-[#877564] dark:text-gray-500 font-serif italic">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <button type="button" className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 dark:border-[#3a3a3a] rounded-lg text-sm font-medium text-[#171411] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2c241b] transition-colors focus:ring-2 focus:ring-[#b36619]/20 outline-none">
                                Google
                            </button>
                            <button type="button" className="flex items-center justify-center gap-3 px-4 py-3 border border-gray-200 dark:border-[#3a3a3a] rounded-lg text-sm font-medium text-[#171411] dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-[#2c241b] transition-colors focus:ring-2 focus:ring-[#b36619]/20 outline-none">
                                GitHub
                            </button>
                        </div>
                    </div>

                    <div className="bg-[#F8F7F6] dark:bg-[#15100c] px-8 py-5 text-center border-t border-gray-100 dark:border-[#3a3a3a]">
                        <p className="text-[#877564] dark:text-gray-400 text-sm font-sans">
                            Already have an account?
                            <Link to="/login" className="font-semibold text-[#b36619] hover:text-[#b36619]/80 transition-colors inline-flex items-center gap-0.5 group ml-1">
                                Log in
                                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">chevron_right</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </main>

            <footer className="w-full py-6 text-center z-10">
                <p className="text-xs text-[#877564]/60 dark:text-gray-600 font-serif">
                    © 2024 Remote Tech Jobs Resume Optimizer. All rights reserved.
                </p>
            </footer>
        </div>
    );
}
