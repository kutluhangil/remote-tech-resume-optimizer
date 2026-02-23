import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            const response = await fetch('http://localhost:5050/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to login');
            }

            login({ name: data.name, email: data.email }, data.token);
            navigate('/dashboard');
        } catch (err) {
            setError(err.message);
        }
    };
    return (
        <div className="bg-[#F3EFEA] text-[#211911] antialiased min-h-screen flex flex-col items-center relative overflow-x-hidden selection:bg-[#b36619]/20 selection:text-[#b36619] font-serif">
            {/* Floating Navigation */}
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
                <div className="bg-white/80 backdrop-blur-md border border-white/50 shadow-sm rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-lg w-full transition-all duration-300 hover:shadow-lg">
                    <div className="flex items-center gap-2 text-[#211911]">
                        <span className="material-symbols-outlined text-[24px] text-[#b36619]">description</span>
                        <span className="font-serif font-bold text-lg tracking-tight">Resume Optimizer</span>
                    </div>
                    <Link to="/" className="group flex items-center gap-1 text-sm font-sans font-medium text-[#6b5d52] hover:text-[#b36619] transition-colors">
                        <span className="material-symbols-outlined text-[18px] transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to Home
                    </Link>
                </div>
            </nav>

            {/* Main Layout */}
            <main className="flex-1 flex flex-col items-center justify-center w-full px-4 py-24 sm:px-6 lg:px-8">
                {/* Login Card */}
                <div className="w-full max-w-[480px] bg-white rounded-2xl shadow-sm border border-white/60 p-8 md:p-12 relative overflow-hidden">
                    {/* Decorative subtle gradient blob behind */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#b36619]/5 rounded-full blur-3xl pointer-events-none"></div>

                    {/* Header */}
                    <div className="text-center mb-10 relative z-10">
                        <h1 className="font-serif text-4xl md:text-5xl font-medium text-[#211911] mb-3 tracking-tight">Welcome Back</h1>
                        <p className="font-sans text-[#6b5d52] text-sm md:text-base leading-relaxed">
                            Please enter your details to access your workspace.
                        </p>
                    </div>

                    {/* Form */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded-lg text-sm font-sans relative z-10 text-center">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleLogin} className="space-y-6 relative z-10">
                        <div className="space-y-2">
                            <label htmlFor="email" className="block font-sans text-sm font-medium text-[#211911] pl-1">Email Address</label>
                            <div className="relative">
                                <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required placeholder="name@example.com" className="block w-full h-14 rounded-xl border-[#d6cec5] bg-[#F3EFEA]/30 text-[#211911] placeholder:text-[#6b5d52]/60 focus:border-[#b36619] focus:ring-[#b36619]/20 focus:ring-4 transition-all duration-200 font-sans px-4 text-base" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block font-sans text-sm font-medium text-[#211911] pl-1">Password</label>
                            <div className="relative">
                                <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} required placeholder="••••••••" className="block w-full h-14 rounded-xl border-[#d6cec5] bg-[#F3EFEA]/30 text-[#211911] placeholder:text-[#6b5d52]/60 focus:border-[#b36619] focus:ring-[#b36619]/20 focus:ring-4 transition-all duration-200 font-sans px-4 text-base" />
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input type="checkbox" className="h-5 w-5 rounded border-[#d6cec5] text-[#b36619] focus:ring-[#b36619]/20 transition-all cursor-pointer" />
                                <span className="font-sans text-sm text-[#6b5d52] group-hover:text-[#211911] transition-colors">Remember me</span>
                            </label>
                            <a href="#" className="font-sans text-sm font-medium text-[#b36619] hover:text-[#8f5214] transition-colors">Forgot Password?</a>
                        </div>

                        <button type="submit" className="w-full h-14 bg-[#b36619] hover:bg-[#8f5214] text-white font-sans font-medium rounded-xl shadow-lg shadow-[#b36619]/20 hover:shadow-[#b36619]/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 text-lg">
                            Log In
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t border-[#d6cec5]/60"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-white px-4 text-xs font-sans font-medium text-[#6b5d52] uppercase tracking-wider">Or continue with</span>
                        </div>
                    </div>

                    {/* Social Auth */}
                    <div className="grid grid-cols-1 gap-4">
                        <button type="button" className="flex w-full items-center justify-center gap-3 h-12 rounded-xl border border-[#d6cec5] bg-white hover:bg-[#F3EFEA]/50 hover:border-[#b36619]/30 transition-all duration-200 group">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOChy5LU90ic9TxuI8iRkt3YCTVyAWhKBNkEbX5F1cI3VJHpOK5Z2GAJnqWzrT6Aqehqw74FUOrDMiWan3No3aA5WpaNHIrfD2_kR6_sOdM41aooa92E8rHbafV53h_BAQXOv-4Nll6WyD_pmwFeKuWKcKyBllmPF9hrxKZEFpwS0GDNML1BNDupJL-opnYS_SdSLWjh9pUoBVCCrh71n0HLNcwesnRQhkbGAMxo3z7b3nrRsWCJknHZOgK1wQmvJHUD7tKzHU65Q" alt="Google Logo" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span className="font-sans text-sm font-medium text-[#211911] group-hover:text-[#b36619] transition-colors">Continue with Google</span>
                        </button>
                        <button type="button" className="flex w-full items-center justify-center gap-3 h-12 rounded-xl border border-[#d6cec5] bg-white hover:bg-[#F3EFEA]/50 hover:border-[#b36619]/30 transition-all duration-200 group">
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAObijsG14n9UBkq765ZkL_iyPXmifykO5m-jey2uC2Fp8j7E9govdD-54PFhyLWD06MshVbf9XNKElpUGJE0Yeh9BOpm65XS0bbe3l2c-eqMB0D96kL0ybtfKPWGBB6oq2IxcNPf8krhN44svp3WkNpSzefEPY1K_JFE9JDuJgbuOELD18WmlAkSlBRyLTMVo1gpdD41MBplbj-R1Xr1ys9rOwXCGR827baR3ExuzHKjMvKsFuj5honVcY__AXLSB0DjgBZpx0HzE" alt="GitHub Logo" className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity" />
                            <span className="font-sans text-sm font-medium text-[#211911] group-hover:text-[#b36619] transition-colors">Continue with GitHub</span>
                        </button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="font-sans text-sm text-[#6b5d52]">
                            Don't have an account?
                            <Link to="/register" className="font-medium text-[#b36619] hover:text-[#8f5214] hover:underline underline-offset-4 transition-all ml-1">Sign up</Link>
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
}
