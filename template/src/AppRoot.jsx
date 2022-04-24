import React from 'react'
import styled from '@emotion/styled'
import { useSelector } from 'react-redux'

const InterfaceContainer = styled.div({
	width: '100vw',
	minHeight: '100vh',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
})

const AppRoot = React.memo(props => {
	const booted = useSelector(state => state.app.booted)

	if(!booted) {
		return null
	}

	return (
		<InterfaceContainer>
			<h1>🥃</h1>
			You did it.  Cheers.
		</InterfaceContainer>
	)
})

export default AppRoot
