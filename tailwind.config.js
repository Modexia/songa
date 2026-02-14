/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // Manual dark mode switching
    theme: {
        extend: {
            colors: {
                'logisco-teal': '#006072',
                'logisco-teal-dark': '#004d5b',
                'logisco-orange': '#FF6B35',
                'brand-orange': '#FF6B35', // Alias for backward compatibility
                'logisco-light': '#F0F9FA',
                'songa-dark': '#0F172A', // Keeping for backward compatibility
                'songa-orange': '#FF6B35', // Updated to match logisco orange
                'songa-gray': '#64748B',
                'songa-light': '#F8FAFC',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
