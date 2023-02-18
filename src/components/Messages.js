import { AttachFile, SendRounded } from '@mui/icons-material'
import { ListDivider } from '@mui/joy'
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
				autoComplete={false}
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
			<IconButton
				type="submit"
				sx={{ color: 'white', bgColor: 'primary' }}>
				<SendRounded fontSize="large" />
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
				time={['Th6 12thg 2, 23, 17:05']}
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
				time={['Th6 12thg 2, 23, 17:08']}
			/>
			<Message
				type="text"
				content={[
					'CODE 1: KARU3RG6NY65',
					'We display any errors for each input field by checking for the existence of the corresponding errors object',
				]}
				time={['Th6 12thg 2, 23, 18:35', 'Th6 12thg 2, 23, 18:37']}
			/>
			<Message
				position="right"
				type="text"
				content={['CODE 1: KARU3RG6NY65', 'We display any errors for each input field by']}
				time={['Th6 12thg 2, 23, 18:40', 'Th6 12thg 2, 23, 18:20']}
			/>
			<ListDivider sx={{ marginBlock: 4, color: 'GrayText' }}>
				<Typography>Th7 13thg 2</Typography>
			</ListDivider>
			<Message
				position="left"
				type="image"
				content={[
					'https://cdn.dribbble.com/userupload/4738479/file/original-f7d626f633a9f0a3aa15200d72c48b0a.png?compress=1&resize=1024x768',
				]}
				time={['Th7 13thg 2, 23, 07:35']}
			/>
			<Message
				position="left"
				type="text"
				content={['CODE 1: KARU3RG6NY65']}
				time={['Th7 13thg 2, 23, 07:40']}
			/>
			<Message
				position="right"
				type="image"
				content={[
					'https://cdn.dribbble.com/userupload/4685782/file/original-d7f210fd667d4a9436d04d15bb2bdcf2.png?compress=1&resize=1024x768',
					'https://cdn.dribbble.com/userupload/4738479/file/original-f7d626f633a9f0a3aa15200d72c48b0a.png?compress=1&resize=1024x768',
					'https://cdn.dribbble.com/userupload/4721843/file/original-df6f4c6cd58a6fd5d917c0a2d0a268c5.png?compress=1&resize=1024x768',
				]}
				time={['Th7 13thg 2, 23, 07:45', 'Th7 13thg 2, 23, 07:50', 'Th7 13thg 2, 23, 07:60']}
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
