import { css } from 'styled-components'

export const GlobalClasses = css`
	.img-cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.absolute-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
`
