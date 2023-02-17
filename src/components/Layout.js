import { Stack } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'

const StyledContainer = styled.div`
	flex: 1;
	height: 100vh;
	overflow-y: scroll;
`

const Layout = ({ children }) => {
	return (
		<Stack
			direction="row"
			height="100vh">
			<Sidebar />
			<StyledContainer>{children}</StyledContainer>
		</Stack>
	)
}

export default Layout
