import { Stack } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'

const Layout = ({ children }) => {
	return (
		<Stack
			direction="row"
			height="100vh">
			<Sidebar />
			{children}
		</Stack>
	)
}

export default Layout
