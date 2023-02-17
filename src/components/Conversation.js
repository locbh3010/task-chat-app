import { MoreVert } from '@mui/icons-material'
import { Avatar, Box, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import Link from 'next/link'

const StyledContainer = styled(Stack)`
	flex-direction: row;
	border-radius: 12px;
	padding: 16px;
	overflow: hidden;
	max-width: 100%;
	transition: all 0.15s linear;
	${(props) =>
		props.isActive
			? css`
					background-color: #2c3a47;
			  `
			: `:hover {
		background-color: rgba(0, 0, 0, 0.2);
	}`}
`

const Conversation = ({ src, name, chatPreview, isActive }) => {
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
			<div style={{ marginLeft: 'auto' }}>
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

	return (
		<StyledContainer
			direction="row"
			alignItems="center"
			spacing={2}
			isActive={isActive}>
			<Link href="/id">
				<Avatar
					alt="User"
					src={src ? src : ''}
					sx={{
						width: 50,
						height: 50,
						cursor: 'pointer',
					}}
				/>
			</Link>
			<Box sx={{ maxWidth: '60%', overflow: 'hidden' }}>
				<Link href="/id">
					<Typography
						variant="h6"
						fontWeight="600"
						sx={{ color: isActive ? 'white' : 'black', cursor: 'pointer' }}
						noWrap>
						{name}
					</Typography>
				</Link>
				<Link href="/id">
					<Typography
						variant="caption"
						sx={{ color: isActive ? 'rgba(255,255,255,0.5)' : 'GrayText', cursor: 'pointer' }}
						noWrap>
						{chatPreview}
					</Typography>
				</Link>
			</Box>
			<Action />
		</StyledContainer>
	)
}

Conversation.defaultProps = {
	isActive: false,
}

Conversation.propTypes = {
	src: PropTypes.string,
	name: PropTypes.string.isRequired,
	chatPreview: PropTypes.string.isRequired,
	isActive: PropTypes.bool,
}

export default Conversation
