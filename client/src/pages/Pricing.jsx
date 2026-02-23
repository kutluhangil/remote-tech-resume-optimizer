import { Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <div className="bg-[#F3EFEA] text-[#1A1A1A] min-h-screen flex flex-col antialiased">
            {/* Navigation */}
            <nav className="sticky top-0 z-50 px-6 py-4 w-full">
                <div className="max-w-[1200px] mx-auto">
                    <div className="bg-[#F3EFEA]/80 backdrop-blur-md border border-[#1A1A1A]/5 rounded-full px-6 py-3 flex items-center justify-between shadow-sm">
                        <Link to="/" className="flex items-center gap-3">
                            <div className="bg-[#1A1A1A] text-white rounded-full p-1.5">
                                <span className="material-symbols-outlined text-[20px]">description</span>
                            </div>
                            <span className="font-serif font-bold text-lg tracking-tight text-[#1A1A1A]">Remote Tech Jobs</span>
                        </Link>
                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/dashboard" className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">Dashboard</Link>
                            <Link to="/history" className="text-sm font-medium text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors">History</Link>
                            <span className="text-sm font-medium text-[#1A1A1A] font-semibold border-b border-[#1A1A1A]/20">Pricing</span>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="flex-grow px-6 pb-20">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                    <div className="text-center py-16 md:py-24 max-w-2xl mx-auto">
                        <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-6 text-[#1A1A1A]">
                            Simple, Transparent Pricing
                        </h1>
                        <p className="font-serif text-xl md:text-2xl text-[#1A1A1A]/60 italic font-light">
                            Invest in your career with tools designed for clarity.
                        </p>
                    </div>

                    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start mb-24">
                        {/* Basic Tier */}
                        <div className="bg-[#E8E1D9] rounded-2xl p-8 border border-transparent hover:border-[#1A1A1A]/5 transition-colors flex flex-col h-full shadow-sm hover:shadow-md duration-300">
                            <div className="mb-8">
                                <h3 className="font-serif text-2xl font-bold mb-2 text-[#1A1A1A]">Basic</h3>
                                <p className="text-[#1A1A1A]/60 text-sm mb-6 font-sans">Perfect for trying out the platform.</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-serif text-5xl font-medium text-[#1A1A1A]">$0</span>
                                    <span className="text-[#1A1A1A]/60 font-medium">/forever</span>
                                </div>
                            </div>
                            <ul className="flex-grow space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                                    <span className="material-symbols-outlined text-[#1A1A1A]/60 text-[20px]">check</span>
                                    <span>3 Resume Scans/mo</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                                    <span className="material-symbols-outlined text-[#1A1A1A]/60 text-[20px]">check</span>
                                    <span>Basic Keyword Analysis</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/40">
                                    <span className="material-symbols-outlined text-[20px]">close</span>
                                    <span>AI Rewrite Suggestions</span>
                                </li>
                            </ul>
                            <button className="w-full py-3 px-4 rounded-xl border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/80 hover:bg-[#F3EFEA] text-[#1A1A1A] font-medium transition-all text-sm uppercase tracking-wide">
                                Get Started
                            </button>
                        </div>

                        {/* Pro Tier (Featured) */}
                        <div className="bg-[#E8E1D9] rounded-2xl p-8 border border-[#1A1A1A]/10 shadow-lg shadow-[#1A1A1A]/5 flex flex-col h-full relative transform md:-translate-y-4">
                            <div className="absolute top-0 right-0 left-0 flex justify-center -mt-3">
                                <span className="bg-[#D6CEC5] text-[#1A1A1A]/90 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">Most Popular</span>
                            </div>
                            <div className="mb-8">
                                <h3 className="font-serif text-2xl font-bold mb-2 text-[#1A1A1A]">Pro</h3>
                                <p className="text-[#1A1A1A]/60 text-sm mb-6 font-sans">For serious job seekers.</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-serif text-5xl font-medium text-[#1A1A1A]">$9</span>
                                    <span className="text-[#1A1A1A]/60 font-medium">/mo</span>
                                </div>
                            </div>
                            <ul className="flex-grow space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-sm font-medium text-[#1A1A1A]">
                                    <span className="material-symbols-outlined text-[#1A1A1A]/80 text-[20px]">check_circle</span>
                                    <span>Unlimited Scans</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-[#1A1A1A]">
                                    <span className="material-symbols-outlined text-[#1A1A1A]/80 text-[20px]">check_circle</span>
                                    <span>AI Rewrite Suggestions</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm font-medium text-[#1A1A1A]">
                                    <span className="material-symbols-outlined text-[#1A1A1A]/80 text-[20px]">check_circle</span>
                                    <span>Priority Support</span>
                                </li>
                            </ul>
                            <button className="w-full py-3 px-4 rounded-xl bg-[#2F2E2C] hover:bg-[#1A1A1A] text-[#F3EFEA] font-medium transition-all shadow-md shadow-[#1A1A1A]/10 text-sm uppercase tracking-wide">
                                Upgrade to Pro
                            </button>
                        </div>

                        {/* Credits Pack */}
                        <div className="bg-[#E8E1D9] rounded-2xl p-8 border border-transparent hover:border-[#1A1A1A]/5 transition-colors flex flex-col h-full shadow-sm hover:shadow-md duration-300">
                            <div className="mb-8">
                                <h3 className="font-serif text-2xl font-bold mb-2 text-[#1A1A1A]">Credits Pack</h3>
                                <p className="text-[#1A1A1A]/60 text-sm mb-6 font-sans">Top up when you need it.</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="font-serif text-5xl font-medium text-[#1A1A1A]">$15</span>
                                    <span className="text-[#1A1A1A]/60 font-medium">/pack</span>
                                </div>
                            </div>
                            <ul className="flex-grow space-y-4 mb-8">
                                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                                    <span className="material-symbols-outlined text-[#1A1A1A]/60 text-[20px]">check</span>
                                    <span>50 One-time Credits</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-[#1A1A1A]/80">
                                    <span className="material-symbols-outlined text-[#1A1A1A]/60 text-[20px]">check</span>
                                    <span>Detailed Reports</span>
                                </li>
                            </ul>
                            <button className="w-full py-3 px-4 rounded-xl border border-[#1A1A1A]/20 hover:border-[#1A1A1A]/80 hover:bg-[#F3EFEA] text-[#1A1A1A] font-medium transition-all text-sm uppercase tracking-wide">
                                Buy Pack
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
