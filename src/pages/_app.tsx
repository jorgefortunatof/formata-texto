import type { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Component {...pageProps} />
		<GlobalStyle />
	</>
);

export default MyApp;
