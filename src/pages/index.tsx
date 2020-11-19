import Head from 'next/head';

import { NavigationBar, Container } from './styles';

import Arrow from '../assets/arrow.svg';
import ToolsIcon from '../assets/tools.svg';

const Home: React.FC = () => (
	<Container>
		<Head>
			<title>Create Next App</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<NavigationBar>
			<h1>
				Formata<span>Texto</span>
			</h1>

			<select name="language">
				<option value="pt-br" selected>
					pt-br
				</option>
				<option value="en">en</option>
			</select>
			<Arrow />
		</NavigationBar>

		<main>
			<header>
				<ToolsIcon />
				<h1>
					Formatador de <br /> texto online
				</h1>
			</header>
		</main>
	</Container>
);

export default Home;
