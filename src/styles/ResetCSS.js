import { css } from 'styled-components'

export const ResetCSS = css`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}
	* {
		margin: 0;
		padding: 0;
		font: inherit;
	}
	img,
	picture,
	svg,
	video {
		display: block;
		max-width: 100%;
	}
	body {
		min-height: 100vh;
		scroll-behavior: smooth;
	}
	a {
		text-decoration: none;
	}
`
