/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#2F2E2C", // Changed from blue to deep warm charcoal
                "primary-hover": "#4a4642",
                "secondary": "#E8E1D9",
                "accent": "#F3EFEA",
                "editorial-bg": "#F3EFEA",
                "editorial-surface": "#E8E1D9",
                "charcoal": "#1A1A1A",
                "warm-gray": "#585653",
                "text-main": "#151414",
                "text-muted": "#5C5C5C",
                "background-light": "#F3EFEA", // Warm beige as requested
                "background-dark": "#191919",
                "surface-light": "#E8E1D9", // Slightly darker beige
                "surface-dark": "#2a2a2a",
                "border-soft": "#d6cec5",
            },
            fontFamily: {
                "display": ["Manrope", "Newsreader", "serif"],
                "serif": ["Playfair Display", "Newsreader", "serif"], // Added for the requested serif headline
                "sans": ["Noto Sans", "Inter", "sans-serif"],
                "body": ["Inter", "Noto Sans", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.5rem",
                "lg": "1rem",
                "xl": "1.5rem",
                "2xl": "2rem",
                "full": "9999px"
            },
            boxShadow: {
                'soft': '0 20px 40px -10px rgba(43, 41, 39, 0.1)',
                'floating': '0 10px 30px -5px rgba(66, 56, 48, 0.06)',
                'float': '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
            }
        },
    },
    plugins: [],
}
