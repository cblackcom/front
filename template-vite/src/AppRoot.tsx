import React from 'react'
import styled from '@emotion/styled'
import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from './style'
import { useAppSelector } from './redux/storeTypes'
import signatureSvg from '/signature.svg'

const InterfaceContainer = styled.div(({theme}) => ({
	backgroundColor: theme.colors.black,
	color: theme.colors.white,
	width: '100vw',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	rowGap: theme.spacing(2),
}))

const Signature = styled.img({
	width: '240px',
})

const GlassEmoji = styled.div({
	fontSize: '2em',
})

const AppRoot = React.memo(() => {
	const booted = useAppSelector(state => state.app.booted)

	if(!booted) {
		return null
	}

	return (
		<ThemeProvider theme={defaultTheme}>
			<InterfaceContainer>
				<Signature src={signatureSvg} alt="CBLACK" />
				<GlassEmoji>🥃</GlassEmoji>
				You did it.  Cheers.
			</InterfaceContainer>
		</ThemeProvider>
	)
})

export default AppRoot
