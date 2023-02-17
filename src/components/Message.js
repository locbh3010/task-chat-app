import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledMsg = styled.div`
	width: fit-content;
	word-break: break-all;
	max-width: 60%;
	min-width: 5%;
	padding: 20px 30px;
	margin: 8px 0;
	background-color: white;
	border-radius: 4px;
	background-color: #ecf0f1;
`

const StyledSenderMsg = styled(StyledMsg)`
	margin-left: auto;
	background-color: #6c5ce7;
	color: white;
`

const Message = ({ content, position }) => {
	if (position === 'right')
		return (
			<StyledSenderMsg>
				<Typography variant="body1">{content}</Typography>
			</StyledSenderMsg>
		)
	else
		return (
			<StyledMsg>
				<Typography variant="body1">{content}</Typography>
			</StyledMsg>
		)
}

Message.propTypes = {
	content: PropTypes.string.isRequired,
	position: PropTypes.string,
}

export default Message
