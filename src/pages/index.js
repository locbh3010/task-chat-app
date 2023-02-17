import Messages from '@/components/Messages'
import Sidebar from '@/components/Sidebar'
import { Stack } from '@mui/system'
import React from 'react'

const Home = () => {
	return (
		<Stack
			direction="row"
			height="100vh">
			<Sidebar />
			<Messages />
		</Stack>
	)
}

export default Home
