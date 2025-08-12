import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
				'heading': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
				'display': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
				'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
			},
			fontSize: {
				// Accessible typography scale with consistent line-height and letter-spacing
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
				'sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
				'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0rem' }],
				'lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.015em' }],
				'2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
				'4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
				'6xl': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
				'7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.045em' }],
				'8xl': ['6rem', { lineHeight: '0.95', letterSpacing: '-0.05em' }],
				'9xl': ['8rem', { lineHeight: '0.9', letterSpacing: '-0.055em' }],
				// Responsive brand sizes that scale properly
				'brand-xs': ['1rem', { lineHeight: '1.3', letterSpacing: '0.05em', fontWeight: '600' }],
				'brand-sm': ['clamp(1.25rem, 4vw, 1.75rem)', { lineHeight: '1.2', letterSpacing: '0.04em', fontWeight: '700' }],
				'brand-md': ['clamp(1.75rem, 5vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '0.03em', fontWeight: '800' }],
				'brand-lg': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1', letterSpacing: '0.02em', fontWeight: '900' }],
				'brand-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '0.01em', fontWeight: '900' }],
			},
			colors: {
				// System colors with WCAG AA+ compliance
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				
				// Accessible color palette
				primary: {
					DEFAULT: 'hsl(218 100% 65%)', // #3b82f6 - AA compliant blue
					foreground: 'hsl(0 0% 100%)', // #ffffff - Maximum contrast
					50: 'hsl(218 100% 97%)',
					100: 'hsl(218 100% 93%)',
					500: 'hsl(218 100% 65%)',
					600: 'hsl(218 89% 51%)',
					700: 'hsl(218 89% 42%)',
					900: 'hsl(218 89% 25%)',
				},
				secondary: {
					DEFAULT: 'hsl(210 40% 12%)', // #1e293b - Dark slate
					foreground: 'hsl(0 0% 95%)', // Near white
					100: 'hsl(210 40% 95%)',
					200: 'hsl(210 40% 85%)',
					800: 'hsl(210 40% 15%)',
					900: 'hsl(210 40% 12%)',
				},
				
				// Accessible accent colors
				accent: {
					DEFAULT: 'hsl(196 100% 60%)', // #00bcd4 - Cyan accent
					foreground: 'hsl(0 0% 0%)', // Black for maximum contrast
					50: 'hsl(196 100% 95%)',
					100: 'hsl(196 100% 88%)',
					500: 'hsl(196 100% 60%)',
					600: 'hsl(196 100% 47%)',
					700: 'hsl(196 100% 38%)',
				},
				
				// Status colors with proper contrast
				success: {
					DEFAULT: 'hsl(142 76% 36%)', // #22c55e
					foreground: 'hsl(0 0% 100%)',
				},
				warning: {
					DEFAULT: 'hsl(45 93% 47%)', // #f59e0b
					foreground: 'hsl(0 0% 0%)',
				},
				destructive: {
					DEFAULT: 'hsl(0 84% 60%)', // #ef4444
					foreground: 'hsl(0 0% 100%)',
				},
				
				// Neutral grays with proper contrast ratios
				muted: {
					DEFAULT: 'hsl(210 40% 20%)', // #334155
					foreground: 'hsl(0 0% 85%)', // Light gray text
				},
				
				// UI component colors
				popover: {
					DEFAULT: 'hsl(210 40% 8%)', // #0f172a
					foreground: 'hsl(0 0% 95%)',
				},
				card: {
					DEFAULT: 'hsl(210 40% 10%)', // #1e293b with transparency
					foreground: 'hsl(0 0% 95%)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
