import { Logout, Search } from '@mui/icons-material'
import { Avatar, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'
import styled from 'styled-components'
import AddNewChat from './AddNewChat'
import Conversation from './Conversation'

const StyledSidebarContainer = styled.div`
	height: 100vh;
	max-width: 350px;
	min-width: 350px;
	overflow-y: scroll;
	border-right: 1px solid rgba(0, 0, 0, 0.2);
	padding-inline: 10px;
`
const StyledAvatar = styled(Avatar)`
	cursor: pointer;
`
const Sidebar = () => {
	const header = (
		<Stack
			direction="row"
			justifyContent="space-between"
			alignItems="center"
			sx={{ marginTop: 3, marginBottom: 2 }}>
			<Stack
				direction="row"
				alignItems="center"
				spacing={1}>
				<StyledAvatar
					alt="Huu Loc"
					src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/276167690_1733945496953609_1438222469946108538_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=0ePtt1JoCYYAX85gmTZ&tn=QOp1c29oG3HrE8_j&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfB332d3koUpwSbkcdsVWOag60Vcf4-akOzMhvh_IO1Erw&oe=63F3631D"
				/>
				<Typography
					variant="h5"
					component="h3"
					fontWeight="700">
					My Name
				</Typography>
			</Stack>
			<Stack
				direction="row"
				alignItems="center"
				spacing={1}>
				<AddNewChat />
				<IconButton>
					<Logout />
				</IconButton>
			</Stack>
		</Stack>
	)
	const search = (
		<TextField
			fullWidth
			placeholder="Search..."
			sx={{ mt: 3 }}
			InputProps={{
				startAdornment: (
					<InputAdornment position="start">
						<Search />
					</InputAdornment>
				),
			}}
		/>
	)
	const conversationList = (
		<Stack
			spacing={2}
			marginTop={4}>
			<Conversation
				src="https://gamesao.vnncdn.net/Resources/Upload/Images/News/3194b2bb-1255-401b-9076-d0680e7288e5.png"
				name="Huu Loc"
				chatPreview="with a background color of #353b48 if it has an"
			/>
			<Conversation
				name="Ayaka Dekhara"
				chatPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, praesentium!"
				isActive
			/>
			<Conversation
				name="Ayaka Dekhara"
				chatPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, praesentium!"
			/>
			<Conversation
				name="Ayaka Dekhara"
				chatPreview="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, praesentium!"
			/>
		</Stack>
	)
	return (
		<StyledSidebarContainer>
			{header}
			{search}
			{conversationList}
		</StyledSidebarContainer>
	)
}

export default Sidebar
