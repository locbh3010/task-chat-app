import { Typography } from '@mui/material'
import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

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
					background-color: ${type === 'image' ? 'transparent' : ' #ecf0f1'};
					color: black;

					border-top-right-radius: 30px;
					border-bottom-right-radius: 30px;
					border-top-left-radius: ${({ order }) => (order === 'first' && '30px') || (order === 'both' && '30px')};
					border-bottom-left-radius: ${({ order }) => (order === 'last' && '30px') || (order === 'both' && '30px')};
			  `}

	${({ type, multiple }) =>
		type === 'image' && multiple
			? css`
					display: grid;
					grid-template-columns: repeat(2, 1fr);
					gap: 4px;

					max-width: 60%;

					img {
						flex-shrink: 0;
					}
			  `
			: css`
					max-width: 40%;
			  `}
`

const findOrder = (length, index) => {
	let order
	if (length === 1) order = 'both'
	else if (index === 0) order = 'first'
	else if (index === length - 1) order = 'last'

	return order
}

const Message = ({ content, position, type }) => {
	return (
		<>
			{type === 'text' &&
				content.length > 0 &&
				content.map((msg, index) => (
					<StyledMsg
						order={findOrder(content.length, index)}
						type={type}
						position={position}>
						<Typography
							variant="body2"
							key={msg}>
							{msg}
						</Typography>
					</StyledMsg>
				))}
			{type === 'image' && content.length > 1 && (
				<StyledMsg
					order="both"
					position={position}
					type={type}
					multiple>
					{content.map((src) => (
						<img
							src={src}
							className="img-cover"
							alt=""
						/>
					))}
				</StyledMsg>
			)}
			{type === 'image' && content.length === 1 && (
				<StyledMsg
					order="both"
					position={position}
					type={type}>
					<img
						src={content[0]}
						className="img-cover"
						alt=""
					/>
				</StyledMsg>
			)}
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
