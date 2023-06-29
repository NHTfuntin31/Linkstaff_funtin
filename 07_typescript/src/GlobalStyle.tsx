import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		list-style: none;
		text-decoration: none;
		box-sizing: border-box;
	}
	html {
		font-size: 62.5%;
	}
	body {
		font-family: 'Roboto', sans-serif;
	}
	h1 {
		font-size: 4.2rem;
	}
	h2 {
		font-size: 2.3rem;
	}
	h3 {
		font-size: 1.8rem;
	}
	h4 {
		font-size: 1.5rem;
	}
	h5 {
		font-size: 1.4rem;
	}
	@media (max-width: 760px) {
		html {
			font-size: 40%;
		}
	}


`

export default GlobalStyle