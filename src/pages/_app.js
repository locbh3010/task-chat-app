import { GlobalStyle } from '@/GlobalStyle'
import { CssVarsProvider } from '@mui/joy'

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<CssVarsProvider />

			<Component {...pageProps} />
		</>
	)
}
