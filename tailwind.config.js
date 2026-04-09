/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./.storybook/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))',
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))',
  				'6': 'hsl(var(--chart-6))',
  				'7': 'hsl(var(--chart-7))',
  				'8': 'hsl(var(--chart-8))'
  			},
  			surface: {
  				DEFAULT: 'hsl(var(--ds-surface))',
  				overlay: 'hsl(var(--ds-surface-overlay))',
  				raised: 'hsl(var(--ds-surface-raised))',
  				sunken: 'hsl(var(--ds-surface-sunken))',
  				hovered: 'hsl(var(--ds-surface-hovered))',
  				pressed: 'hsl(var(--ds-surface-pressed))'
  			},
  			'text-brand': 'hsl(var(--ds-text-brand))',
  			'text-subtle': 'hsl(var(--ds-text-subtle))',
  			'text-subtlest': 'hsl(var(--ds-text-subtlest))',
  			'text-inverse': 'hsl(var(--ds-text-inverse))',
  			'text-selected': 'hsl(var(--ds-text-selected))',
  			'text-link': 'hsl(var(--ds-text-link))',
  			danger: {
  				DEFAULT: 'hsl(var(--ds-bg-danger-bold))',
  				foreground: 'hsl(var(--ds-text-inverse))',
  				subtle: 'hsl(var(--ds-bg-danger))',
  				text: 'hsl(var(--ds-text-danger))',
  				border: 'hsl(var(--ds-border-danger))',
  				icon: 'hsl(var(--ds-icon-danger))'
  			},
  			warning: {
  				DEFAULT: 'hsl(var(--ds-bg-warning-bold))',
  				foreground: 'hsl(var(--ds-text-inverse))',
  				subtle: 'hsl(var(--ds-bg-warning))',
  				text: 'hsl(var(--ds-text-warning))',
  				border: 'hsl(var(--ds-border-warning))',
  				icon: 'hsl(var(--ds-icon-warning))'
  			},
  			success: {
  				DEFAULT: 'hsl(var(--ds-bg-success-bold))',
  				foreground: 'hsl(var(--ds-text-inverse))',
  				subtle: 'hsl(var(--ds-bg-success))',
  				text: 'hsl(var(--ds-text-success))',
  				border: 'hsl(var(--ds-border-success))',
  				icon: 'hsl(var(--ds-icon-success))'
  			},
  			discovery: {
  				DEFAULT: 'hsl(var(--ds-bg-discovery-bold))',
  				foreground: 'hsl(var(--ds-text-inverse))',
  				subtle: 'hsl(var(--ds-bg-discovery))',
  				text: 'hsl(var(--ds-text-discovery))',
  				border: 'hsl(var(--ds-border-discovery))',
  				icon: 'hsl(var(--ds-icon-discovery))'
  			},
  			information: {
  				DEFAULT: 'hsl(var(--ds-bg-information-bold))',
  				foreground: 'hsl(var(--ds-text-inverse))',
  				subtle: 'hsl(var(--ds-bg-information))',
  				text: 'hsl(var(--ds-text-information))',
  				border: 'hsl(var(--ds-border-information))',
  				icon: 'hsl(var(--ds-icon-information))'
  			},
  			'bg-brand': 'hsl(var(--ds-bg-brand))',
  			'bg-selected': 'hsl(var(--ds-bg-selected))',
  			'bg-neutral': 'hsl(var(--ds-bg-neutral))',
  			icon: {
  				DEFAULT: 'hsl(var(--ds-icon))',
  				subtle: 'hsl(var(--ds-icon-subtle))',
  				inverse: 'hsl(var(--ds-icon-inverse))',
  				brand: 'hsl(var(--ds-icon-brand))',
  				selected: 'hsl(var(--ds-icon-selected))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: { height: '0' },
  				to: { height: 'var(--radix-accordion-content-height)' }
  			},
  			'accordion-up': {
  				from: { height: 'var(--radix-accordion-content-height)' },
  				to: { height: '0' }
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
