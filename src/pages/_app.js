import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;	
		box-sizing: border-box
	}
	body {
		scroll-behavior: smooth;
	}
	a {
		text-decoration: none
	}
	.img-cover {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />

			<Component {...pageProps} />
		</>
	)
}
