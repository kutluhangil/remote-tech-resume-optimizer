import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="glass-nav rounded-full px-6 py-3 flex items-center justify-between gap-8 max-w-4xl w-full shadow-sm dark:bg-neutral-800/80 dark:border-neutral-700">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className="material-symbols-outlined text-primary dark:text-white">description</span>
                    <span className="font-serif font-bold text-lg tracking-tight text-primary dark:text-white">ResumeOpt</span>
                </Link>
                <div className="hidden md:flex items-center gap-8">
                    <Link to="/#features" className="text-sm font-medium text-text-main/80 hover:text-primary transition-colors dark:text-neutral-300 dark:hover:text-white">Features</Link>
                    <Link to="/pricing" className="text-sm font-medium text-text-main/80 hover:text-primary transition-colors dark:text-neutral-300 dark:hover:text-white">Pricing</Link>
                    <a href="#about" className="text-sm font-medium text-text-main/80 hover:text-primary transition-colors dark:text-neutral-300 dark:hover:text-white">About</a>
                </div>
                <div className="flex items-center gap-3">
                    <Link to="/login" className="hidden sm:flex items-center justify-center px-3 h-8 rounded-full text-xs font-bold bg-white/50 border border-neutral-200 hover:bg-white text-primary transition-all dark:bg-neutral-700 dark:border-neutral-600 dark:text-white">
                        Login
                    </Link>
                    <Link to="/analyze" className="flex items-center justify-center h-10 px-5 rounded-full bg-primary hover:bg-primary-hover text-white text-sm font-bold transition-all shadow-lg shadow-primary/20 dark:bg-white dark:text-primary">
                        Get Started
                    </Link>
                </div>
            </nav>
        </div>
    );
}
