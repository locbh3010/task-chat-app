import { IconButton, Typography } from '@mui/material'
import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { TextSnippet } from '@mui/icons-material'

const StyledMsg = styled.div`
	width: fit-content;
	max-width: 60%;
	min-width: 5%;

	word-break: break-all;

	padding: ${({ type }) => (type === 'text' ? '20px 30px' : '0px')};

	overflow: hidden;

	flex-shrink: 0;

	/* sender => position right */
	/* recipent => position left */
	margin-block: 2px;
	${({ position, type }) =>
		position === 'right'
			? css`
					margin-left: auto;

					background-color: ${type === 'image' ? 'transparent' : '#6c5ce7'};
					color: white;

					border-top-left-radius: 30px;
					border-bottom-left-radius: 30px;
					border-top-right-radius: ${({ order }) => (order === 'first' && '30px') || (order === 'both' && '30px')};
					border-bottom-right-radius: ${({ order }) => (order === 'last' && '30px') || (order === 'both' && '30px')};
			  `
			: css`
					background-color: ${type === 'image' ? 'transparent' : '#ecf0f1'};
					color: black;

					border-top-right-radius: 30px;
					border-bottom-right-radius: 30px;
					border-top-left-radius: ${({ order }) => (order === 'first' && '30px') || (order === 'both' && '30px')};
					border-bottom-left-radius: ${({ order }) => (order === 'last' && '30px') || (order === 'both' && '30px')};
			  `};

	${({ type }) =>
		type === 'image' &&
		css`
			max-width: 40%;

			img {
				flex-shrink: 0;
			}
		`};

	${({ type }) =>
		type === 'file' &&
		css`
			min-width: 10%;

			padding: 4px 24px;

			display: flex;
			align-items: center;
			gap: 8px;

			background-color: #ecf0f1;
			color: black;

			.file-name {
				font-weight: 700;
			}
			.file-capacity {
				font-style: italic;
			}
		`}
`

// * Ví dụ: gửi 3 tin nhắn thì tìm xem tin nhắn hiện tại ở vị trí đầu hay là vị trí cuối
// * Để style border radius
const findOrder = (length, index) => {
	let order
	if (length === 1) order = 'both'
	else if (index === 0) order = 'first'
	else if (index === length - 1) order = 'last'

	return order
}

const Message = ({ content, position, type }) => {
	const textContent =
		type === 'text' &&
		content.length > 0 &&
		content.map((msg, index) => (
			<StyledMsg
				order={findOrder(content.length, index)}
				type={type}
				position={position}
				key={msg}>
				<Typography
					variant="body2"
					key={msg}>
					{msg}
				</Typography>
			</StyledMsg>
		))
	const multipleImageContent =
		type === 'image' &&
		content.length > 0 &&
		content.map((img, index) => (
			<StyledMsg
				order={findOrder(content.length, index)}
				position={position}
				type={type}>
				<img
					src={img}
					className="img-cover"
					alt=""
				/>
			</StyledMsg>
		))
	const fileContent =
		type === 'file' &&
		content.length > 0 &&
		content.map((file, index) => (
			<StyledMsg
				key={file.name}
				order={findOrder(content.length, index)}
				type={type}
				position={position}>
				<IconButton color="primary">
					<TextSnippet />
				</IconButton>
				<div>
					<Typography
						variant="subtitle2"
						className="file-name">
						{file.name}
					</Typography>
					<Typography
						variant="caption"
						className="file-capacity">
						{file.capacity}
					</Typography>
				</div>
			</StyledMsg>
		))

	return (
		<>
			{textContent}
			{multipleImageContent}
			{fileContent}
		</>
	)
}

Message.propTypes = {
	content: PropTypes.array.isRequired,
	position: PropTypes.oneOf(['right', 'left']),
	type: PropTypes.oneOf(['text', 'file', 'image']),
}

Message.defaultProps = {
	type: 'text',
	position: 'left',
}

export default Message
