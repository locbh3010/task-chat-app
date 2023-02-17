import React from 'react'
import styled from 'styled-components'

const StyledChatPending = styled.div`
	width: 90px;
	padding: 16px 28px;

	border-radius: 30px;
	border-bottom-left-radius: 8px;

	background-color: #ecf0f1;
`

const StyledTyping = styled.div`
	display: flex;
	align-items: center;
	height: 17px;
`

const StyledDot = styled.div`
	animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
	background-color: #6cad96;
	border-radius: 50%;
	height: 7px;
	margin-right: 4px;
	vertical-align: middle;
	width: 7px;
	display: inline-block;
	flex-shrink: 0;

	:nth-of-type(1) {
		animation-delay: 200ms;
	}
	:nth-of-type(2) {
		animation-delay: 300ms;
	}
	:nth-of-type(3) {
		animation-delay: 400ms;
	}

	@keyframes mercuryTypingAnimation {
		0% {
			transform: translateY(0px);
			background-color: #6cad96;
		}
		28% {
			transform: translateY(-7px);
			background-color: #9ecab9;
		}
		44% {
			transform: translateY(0px);
			background-color: #b5d9cb;
		}
	}
`

const ChatPending = () => {
	return (
		<StyledChatPending>
			<StyledTyping>
				<StyledDot delay="200ms" />
				<StyledDot delay="300ms" />
				<StyledDot delay="400ms" />
			</StyledTyping>
		</StyledChatPending>
	)
}

export default ChatPending
