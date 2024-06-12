import '@emotion/react'
import { CSSProperties } from 'react'

// https://emotion.sh/docs/typescript#define-a-theme

export enum AppColor {
	White = 'white',
	Black = 'black',
	Transparent = 'transparent',
}

export type AppColors = {
	[name in AppColor]: string
}

export type SpacingFunc = (...n: number[]) => string

declare module '@emotion/react' {
	export interface Theme {
		spacing: SpacingFunc,
		spacingPx: number,
		colors: AppColors,
	}
}
