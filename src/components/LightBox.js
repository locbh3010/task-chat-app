import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box, Modal } from '@mui/material'

const StyledBox = styled(Box)`
	background-color: white;
	width: 90%;
	height: 85%;
	overflow: hidden;
	border: none;
`

const LightBox = ({ image, open, handleClose }) => {
	return (
		<Modal
			open={open}
			onClose={handleClose}>
			<StyledBox className="absolute-center">
				<img
					src={image}
					className="img-cover"
					alt=""
				/>
			</StyledBox>
		</Modal>
	)
}

LightBox.propTypes = {
	image: PropTypes.string,
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
}

export default LightBox
