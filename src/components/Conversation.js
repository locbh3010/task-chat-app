import { MoreVert } from '@mui/icons-material'
import { Avatar, Box, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

const StyledContainer = styled(Stack)`
	flex-direction: row;
	border-radius: 12px;
	padding: 16px;
	overflow: hidden;
	max-width: 100%;
	transition: all 0.15s linear;
	${({ isActive }) =>
		isActive
			? css`
					background-color: #2c3a47;
			  `
			: `:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}`}
`

const Conversation = ({ avatar, name, chatPreview, id }) => {
	const [isActive, setIsActive] = useState(false)
	const router = useRouter()

	const Action = () => {
		const [anchorEl, setAnchorEl] = React.useState(null)
		const open = Boolean(anchorEl)

		const handleClick = (event) => {
			setAnchorEl(event.currentTarget)
		}
		const handleClose = () => {
			setAnchorEl(null)
		}

		return (
			<div
				style={{ marginLeft: 'auto' }}
				onClick={(e) => e.preventDefault()}>
				<IconButton
					color="info"
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}>
					<Tooltip title="Options">
						<MoreVert />
					</Tooltip>
				</IconButton>
				<Menu
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}>
					<MenuItem onClick={handleClose}>Delete</MenuItem>
					<MenuItem onClick={handleClose}>View Profile</MenuItem>
				</Menu>
			</div>
		)
	}

	useEffect(() => {
		router.query.id === id ? setIsActive(true) : setIsActive(false)
	}, [router])

	return (
		<Link href={`/${id}`}>
			<StyledContainer
				direction="row"
				alignItems="center"
				spacing={2}
				isActive={isActive}>
				<Avatar
					alt="User"
					src={avatar ? avatar : ''}
					sx={{
						width: 50,
						height: 50,
						cursor: 'pointer',
					}}
				/>
				<Box sx={{ maxWidth: '60%', overflow: 'hidden' }}>
					<Typography
						variant="h6"
						fontWeight="600"
						sx={{ color: isActive ? 'white' : 'black', cursor: 'pointer' }}
						noWrap>
						{name}
					</Typography>
					<Typography
						variant="caption"
						sx={{ color: isActive ? 'rgba(255,255,255,0.5)' : 'GrayText', cursor: 'pointer' }}
						noWrap>
						{chatPreview}
					</Typography>
				</Box>
				<Action />
			</StyledContainer>
		</Link>
	)
}

Conversation.propTypes = {
	avatar: PropTypes.string,
	name: PropTypes.string.isRequired,
	chatPreview: PropTypes.string.isRequired,
}

export default Conversation
