import { createTheme as createMuiTheme } from '@mui/material/styles'

export const colors = {
	blue: '#0000FF',
}

// const fontFamily = "Roboto, sans-serif"

export const globalStyle = {
	'html,body': {
		// fontFamily,
	},
	'#reactroot': {
		display: 'flex',
		minHeight: '100vh',
	},
}

const muiThemeBase = {
	spacing: 8,
	// https://material-ui.com/customization/palette/
	palette: {
		mode: 'light',
		primary: {
			main: colors.blue,
		},
	},
	colors,
	// typography: {
	// 	fontFamily,
	// },
	components: {
		MuiDataGrid: {
			// 
		},
	},
}

export const muiTheme = createMuiTheme(muiThemeBase)

// export const muiThemeDark = createMuiTheme({
// 	...muiThemeBase,
// 	palette: {
// 		...muiThemeBase.palette,
// 		mode: 'dark',
// 	},
// })
