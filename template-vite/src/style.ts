import '@fontsource/ibm-plex-mono'
import type { AppColors } from './theme'
import { Theme } from '@emotion/react'

const colors: AppColors = {
	white: '#ffffff',
	black: '#000000',
	transparent: 'transparent',
}

// const fontFamily = "Roboto, sans-serif"

export const globalStyle = {
	'html': {
		backgroundColor: colors.black,
	},
	'body': {
		backgroundColor: colors.black,
		color: colors.white,
		fontFamily: `'IBM Plex Mono', monospace`,
	},
	'#reactroot': {
		display: 'flex',
		minHeight: '100vh',
	},
}

const spacingPx = 8

export const defaultTheme: Theme = {
	spacingPx,
	spacing: (...n: number[]): string => n.map(n => `${n * spacingPx}px`).join(' '),
	colors,
}
