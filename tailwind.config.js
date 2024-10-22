/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '960px',
            xl: '1200px',
        },
        fontFamily: {
            primary: ["var(--font-jetbrains-mono)"],
        },
        extend: {
            colors: {
                primary: '#1c1c22',
                accent: {
                    DEFAULT: '#E4003A',
                    hover: "#E4003A",
                }
            },
            animation: {
                shimmer: 'shimmer 2s linear infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'wave-1': 'wave 2s linear infinite',
                'wave-2': 'wave 2s linear infinite 0.5s',
                'wave-3': 'wave 2s linear infinite 1s',
            },
            keyframes: {
                shimmer: {
                    '0%': { 
                        transform: 'translateX(-100%)',
                        background: 'linear-gradient(to right, transparent 0%, #eab30880 50%, transparent 100%)',
                    },
                    '50%': {
                        background: 'linear-gradient(to right, transparent 0%, #22c55e60 50%, transparent 100%)',
                    },
                    '100%': { 
                        transform: 'translateX(100%)',
                        background: 'linear-gradient(to right, transparent 0%, #eab30880 50%, transparent 100%)',
                    }
                },
                wave: {
                    '0%': {
                        transform: 'scale(0.5)',
                        opacity: '0.8'
                    },
                    '100%': {
                        transform: 'scale(1.5)',
                        opacity: '0'
                    }
                }
            }
        },
    },
    plugins: [require("tailwindcss-animate")],
};