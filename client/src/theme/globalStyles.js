import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap');

	html, body {
		background: rgba(255, 255, 255, 0.8);
		color: #424242;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'Manrope', sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	
	${'' /* Page Title Header - Inter */}
	h1 {
		font-family: 'Inter', sans-serif;
		font-size: 28px;
		font-weight: 800;
		text-transform: uppercase;
	}

	${'' /* Page Title Header - Nunito */}
	h2 {
		font-family: 'Nunito', sans-serif;
		font-size: 28px;
		font-weight: 800;
	}

	h3 {
		font-family: 'Nunito', sans-serif;
		font-size: 25px;
		font-weight: 600;
	}


`;

export default GlobalStyles;
