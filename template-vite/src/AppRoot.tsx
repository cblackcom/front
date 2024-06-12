import React from 'react'
import styled from '@emotion/styled'
import { useAppSelector } from './redux/storeTypes'
import signatureSvg from '/signature.svg'

const InterfaceContainer = styled.div({
	width: '100vw',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const AppRoot = React.memo(() => {
	const booted = useAppSelector(state => state.app.booted)

	if(!booted) {
		return null
	}

	return (
		<InterfaceContainer>
			<img src={signatureSvg} alt="CBLACK" style={{width: 240}} />
			<h1>🥃</h1>
			You did it.  Cheers.
		</InterfaceContainer>
	)
})

export default AppRoot
