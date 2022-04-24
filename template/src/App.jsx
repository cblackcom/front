import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider as ReduxProvider } from 'react-redux'
import { appBoot } from './redux/appThunk'
import appReducer from './redux/appReducer'
import { Global as EmotionGlobal } from '@emotion/react'
import { CssBaseline as MUICssBaseline } from '@mui/material'
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles'
import { globalStyle, muiTheme } from './style'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppRoot from './AppRoot'

const store = configureStore({
	reducer: {
		app: appReducer,
	},
})

const App = React.memo(props => {
	useEffect(() => {
		store.dispatch(appBoot())
	}, [])

	return (
		<ReduxProvider store={store}>
			<MUICssBaseline />
			<EmotionGlobal styles={globalStyle} />
			<MUIThemeProvider theme={muiTheme}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<AppRoot />} />
					</Routes>
				</BrowserRouter>
			</MUIThemeProvider>
		</ReduxProvider>
	)
})

const root = createRoot(document.getElementById('reactroot'))
root.render(<App />)
