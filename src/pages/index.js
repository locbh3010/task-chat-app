import Layout from '@/components/Layout'
import { Chat } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Head from 'next/head'
import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 16px;
	height: 100%;
`

const Home = () => {
	return (
		<div>
			<Head>
				<title>Home Page</title>
			</Head>
			<Layout>
				<StyledContainer>
					<Chat
						color="primary"
						sx={{ width: 120, height: 120 }}
					/>
					<Box sx={{ textAlign: 'center' }}>
						<Typography variant="h3">Task Chat App</Typography>
						<Typography
							variant="h6"
							sx={{ color: 'GrayText' }}>
							Make By Huu Loc
						</Typography>
					</Box>
				</StyledContainer>
			</Layout>
		</div>
	)
}

export default Home
