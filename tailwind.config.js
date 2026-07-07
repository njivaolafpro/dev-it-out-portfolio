/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        surface2: 'var(--surface-2)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        accentHot: 'var(--accent-hot)',
        beige: 'var(--beige)',
        violet: 'var(--violet)',
        text: 'var(--text)',
        muted: 'var(--text-muted)',
        success: 'var(--success)',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderColor: { DEFAULT: 'var(--border)' },
      boxShadow: {
        glow: '0 0 40px -12px rgba(245, 166, 35, 0.35)',
        card: '0 8px 30px -12px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [],
};
