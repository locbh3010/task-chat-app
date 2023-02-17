import { AttachFile, SendRounded } from '@mui/icons-material'
import { Avatar, Divider, IconButton, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useRef } from 'react'
import styled from 'styled-components'
import ChatPending from './ChatPending'
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
const StyledMsgScreen = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;

	padding: 32px;

	overflow-x: hidden;
	overflow-y: scroll;
`

const Messages = () => {
	const fileRef = useRef(null)
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
		<StyledMsgScreen>
			<Message
				type="file"
				content={[
					{
						name: 'DemoFile.zip',
						capacity: '3.5MB',
					},
				]}
			/>
			<Message
				position="right"
				type="file"
				content={[
					{
						name: 'DemoFile.zip',
						capacity: '3.5MB',
					},
				]}
			/>
			<Message
				type="text"
				content={[
					'CODE 1: KARU3RG6NY65',
					'We display any errors for each input field by checking for the existence of the corresponding errors object',
				]}
			/>
			<Message
				position="right"
				type="text"
				content={['CODE 1: KARU3RG6NY65', 'We display any errors for each input field by']}
			/>
			<Message
				position="left"
				type="image"
				content={[
					'https://cdn.dribbble.com/userupload/4738479/file/original-f7d626f633a9f0a3aa15200d72c48b0a.png?compress=1&resize=1024x768',
				]}
			/>
			<Message
				position="right"
				type="image"
				content={[
					'https://cdn.dribbble.com/userupload/4685782/file/original-d7f210fd667d4a9436d04d15bb2bdcf2.png?compress=1&resize=1024x768',
					'https://cdn.dribbble.com/userupload/4738479/file/original-f7d626f633a9f0a3aa15200d72c48b0a.png?compress=1&resize=1024x768',
					'https://cdn.dribbble.com/userupload/4721843/file/original-df6f4c6cd58a6fd5d917c0a2d0a268c5.png?compress=1&resize=1024x768',
				]}
			/>
			<ChatPending />
		</StyledMsgScreen>
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
