/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nc: {
          bg: '#F3EDE3',
          'bg-deep': '#E7DCCB',
          surface: '#FFFFFF',
          'surface-raised': '#FFFFFF',
          'surface-subtle': '#E7DCCB',
          border: '#DCD1C0',
          'border-subtle': '#E8DFD1',
          'border-focus': '#805536',
          text: '#29251F',
          'text-muted': '#665E54',
          'text-dim': '#8C8173',
          accent: '#805536',
          'accent-hover': '#6C462B',
          'accent-subtle': 'rgba(128, 85, 54, 0.08)',
        },
        role: {
          build: '#805536',
          'build-bg': 'rgba(128, 85, 54, 0.08)',
          'build-border': 'rgba(128, 85, 54, 0.25)',
          design: '#96603B',
          'design-bg': 'rgba(150, 96, 59, 0.08)',
          'design-border': 'rgba(150, 96, 59, 0.25)',
          business: '#6E4D36',
          'business-bg': 'rgba(110, 77, 54, 0.08)',
          'business-border': 'rgba(110, 77, 54, 0.25)',
          research: '#5C4533',
          'research-bg': 'rgba(92, 69, 51, 0.08)',
          'research-border': 'rgba(92, 69, 51, 0.25)',
        }
      },
      fontFamily: {
        heading: ['"Bricolage Grotesque"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
      borderRadius: {
        'nc-lg': '16px',
        'nc-xl': '24px',
        'nc-full': '9999px',
      },
      boxShadow: {
        'glow-accent': '0 4px 20px rgba(128, 85, 54, 0.18)',
        'glow-card': '0 8px 30px rgba(41, 37, 31, 0.06)',
        'card': '0 1px 3px rgba(41, 37, 31, 0.04), 0 4px 14px rgba(41, 37, 31, 0.03)',
        'card-hover': '0 8px 30px rgba(41, 37, 31, 0.09)',
      }
    },
  },
  plugins: [],
}
