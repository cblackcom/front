import type { CSSObject } from '@emotion/react'
import '@fontsource/ibm-plex-mono'

export const AppColor = {
	White: 'white',
	Black: 'black',
	Transparent: 'transparent',
	Error: 'error',
} as const

export type AppColor = typeof AppColor[keyof typeof AppColor]

const colors: AppColors = {
	white: '#ffffff',
	black: '#000000',
	transparent: 'transparent',
	error: '#ff0000',
}

export type AppColors = {
	[name in AppColor]: string
}

export const AppOpacity = {
	Full: 'full',
	Dimmed: 'dimmed',
	Disabled: 'disabled',
	Hover: 'hover',
} as const

export type AppOpacity = typeof AppOpacity[keyof typeof AppOpacity]

const opacities: AppOpacities = {
	full: 1,
	dimmed: 0.7,
	disabled: 0.5,
	hover: 0.8,
}

export type AppOpacities = {
	[name in AppOpacity]: number
}

const fontFamily = `'IBM Plex Mono', monospace`

export interface TypographyStyle {
	fontFamily: string
	fontSize: string
	fontWeight: number | string
	lineHeight?: number | string
}

const typography: AppTypography = {
	heading1: {
		fontFamily,
		fontSize: '2rem',
		fontWeight: 'bold',
		lineHeight: 1.2,
	},
	heading2: {
		fontFamily,
		fontSize: '1.5rem',
		fontWeight: 'bold',
		lineHeight: 1.3,
	},
	body: {
		fontFamily,
		fontSize: '1rem',
		fontWeight: 'normal',
		lineHeight: 1.5,
	},
	bodySmall: {
		fontFamily,
		fontSize: '0.875rem',
		fontWeight: 'normal',
		lineHeight: 1.5,
	},
	caption: {
		fontFamily,
		fontSize: '0.75rem',
		fontWeight: 'normal',
		lineHeight: 1.4,
	},
	button: {
		fontFamily,
		fontSize: '1rem',
		fontWeight: 'bold',
		lineHeight: 1,
	},
	buttonSmall: {
		fontFamily,
		fontSize: '0.875rem',
		fontWeight: 'bold',
		lineHeight: 1,
	},
	display: {
		fontFamily,
		fontSize: '4rem',
		fontWeight: 'bold',
		lineHeight: 1,
	},
}

export type AppTypography = {
	heading1: TypographyStyle
	heading2: TypographyStyle
	body: TypographyStyle
	bodySmall: TypographyStyle
	caption: TypographyStyle
	button: TypographyStyle
	buttonSmall: TypographyStyle
	display: TypographyStyle
}

export interface AppTheme {
	colors: AppColors
	opacities: AppOpacities
	typography: AppTypography
}

export const defaultTheme: AppTheme = {
	colors,
	opacities,
	typography,
}

export const globalStyle: CSSObject = {
	'html': {
		backgroundColor: colors.black,
	},
	'body': {
		backgroundColor: colors.black,
		color: colors.white,
		fontFamily,
	},
	'#root': {
		display: 'flex',
		minHeight: '100vh',
	},
}
