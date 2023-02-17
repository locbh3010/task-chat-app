import { AttachFile, SendRounded } from '@mui/icons-material'
import { Avatar, Divider, IconButton, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Message from './Message'

const StyledEnterNewMsg = styled.form`
	display: flex;
	align-items: center;
	padding: 0px 32px 30px;
	position: sticky;
	background-color: white;
	bottom: 0;
	left: 0;
	width: 100%;
	z-index: 100;
	height: 130px;
	border-top: 1px solid rgba(0, 0, 0, 0.1);
	gap: 8px;
`

const Messages = () => {
	const fileRef = useRef(null)
	const [sendMsg, setSendMsg] = useState('')

	const header = (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			sx={{ paddingBlock: 2, paddingInline: 4 }}>
			<Stack
				direction="row"
				spacing={2}
				alignItems="center">
				<Avatar sx={{ width: 50, height: 50 }}></Avatar>
				<div>
					<Typography
						variant="h5"
						fontWeight="bold"
						alignItems="center">
						Ayaka Dekhara
					</Typography>

					<Typography variant="subtitle1">last seen 30min</Typography>
				</div>
			</Stack>
		</Stack>
	)
	const EnterMsg = (
		<StyledEnterNewMsg>
			<TextField
				placeholder="Enter a message..."
				sx={{ flexGrow: 1 }}
			/>
			<input
				type="file"
				multiple
				style={{ display: 'none' }}
				id="file"
				ref={fileRef}
			/>
			<IconButton onClick={() => fileRef.current.click()}>
				<AttachFile
					fontSize="large"
					sx={{ rotate: '45deg' }}
				/>
			</IconButton>
			<IconButton type="submit">
				<SendRounded
					fontSize="large"
					sx={{ rotate: '-45deg' }}
				/>
			</IconButton>
		</StyledEnterNewMsg>
	)
	const messageScreen = (
		<Stack sx={{ paddingInline: 4, flex: 1, overflowY: 'scroll', paddingBlock: 4, overflowX: 'hidden' }}>
			<Message
				content="Lorem ipsum dolor sit amet consectetur rit fuga est voluptas nostrum?"
				position="right"
			/>
			<Message content="Lorem ipsum dolor sit amet consectetur rit fuga est voluptas nostrum?" />
			<Message content="Lorem ipsum" />
			<Message
				content="Lorem ipsum dolor sit amet consectetur rit fuga est voluptas nostrum?"
				position="right"
			/>
			<Message
				content="Lorem ipsum  nostrum?"
				position="right"
			/>
			<Message content="Lorem ipsum dolor sit amet consectetur rit fuga est voluptas nostrum?" />
			<Message content="Lorem ipsum" />
			<Message
				content="Lorem ips con amet consectetur rit fuga es voluptas nostrum?"
				position="right"
			/>
		</Stack>
	)
	return (
		<Box sx={{ flex: 1, height: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
			{header}
			<Divider />
			{messageScreen}
			{EnterMsg}
		</Box>
	)
}

export default Messages
