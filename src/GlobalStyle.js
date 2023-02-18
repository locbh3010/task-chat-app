import { GlobalClasses } from './styles/GlobalClasses'
import { ResetCSS } from './styles/ResetCSS'

const { createGlobalStyle } = require('styled-components')

export const GlobalStyle = createGlobalStyle`
	${ResetCSS}
	${GlobalClasses}
`
