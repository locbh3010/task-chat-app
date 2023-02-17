import { Chat, Email } from '@mui/icons-material'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, TextField, Tooltip } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useState } from 'react'

const AddNewChat = () => {
	const [open, setOpen] = useState(false)
	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<>
			<IconButton onClick={handleOpen}>
				<Tooltip title="Add new chat">
					<Chat />
				</Tooltip>
			</IconButton>
			<Dialog
				open={open}
				onClose={handleClose}>
				<DialogTitle>New Chat</DialogTitle>
				<DialogContent>
					<DialogContentText>Enter email:</DialogContentText>
					<Stack
						direction="row"
						spacing={1}
						alignItems="stretch">
						<TextField
							placeholder="Email"
							type="email"
							sx={{ mt: 1, width: '380px' }}
							variant="standard"
						/>
					</Stack>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>Cancel</Button>
					<Button
						onClick={handleClose}
						autoFocus>
						Continute
					</Button>
				</DialogActions>
			</Dialog>
		</>
	)
}

export default AddNewChat
