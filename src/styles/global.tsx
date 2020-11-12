import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		color: black;
  }

	h1{
		font-size: 32px;
	}

	h2{
		font-size: 28px;
	}

	h3{
		font-size: 26px;
	}

  a {
    color: inherit;
    text-decoration: none;
  }

	a:hover{
		cursor: pointer;
	}

  * {
		box-sizing: border-box;
		padding: 0;
    margin: 0;
  }
`;
