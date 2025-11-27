import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Three Days Off Brand Colors
        'warm-cream': '#F5F1E8',
        'deep-brown': '#2C1810',
        'sage-green': '#6B8E6B',
        'soft-gray': '#E8E5E0',
        'warm-white': '#FEFCF8',
        // Additional contemplative colors
        'quiet-blue': '#4A7C7E',
        'breath-gray': '#F8F6F3',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.2' }],
        'subheading': ['1.25rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'breathe': 'breathe 4s ease-in-out infinite',
        'counter-update': 'counterUpdate 0.5s ease-out',
        'sacred-pulse': 'sacredPulse 10s ease-in-out infinite',
        'contemplative-enter': 'contemplativeEnter 2s ease-out',
        'network-breathe': 'networkBreathe 10s ease-in-out infinite',
        'golden-ratio-scale': 'goldenRatioScale 6.18s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        counterUpdate: {
          '0%': { opacity: '0.5', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Sacred Geometry & Consciousness-Serving Animations
        sacredPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '40%': { transform: 'scale(1.08)', opacity: '1' }, // 4s inhale
          '60%': { transform: 'scale(1.08)', opacity: '1' }, // Hold
        },
        contemplativeEnter: {
          '0%': { transform: 'scale(0) rotate(-180deg)', opacity: '0' },
          '50%': { transform: 'scale(0.8) rotate(-90deg)', opacity: '0.5' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '1' },
        },
        networkBreathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '40%': { transform: 'scale(1.08)' }, // Sacred inhale
        },
        goldenRatioScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '61.8%': { transform: 'scale(1.618)' }, // Golden ratio peak
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config

