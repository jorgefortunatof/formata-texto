import Head from 'next/head';

import {
	NavigationBar,
	Container,
	Header,
	Footer,
} from '../styles/styles';

import TextFormat from '../components/TextFormat';

import ArrowLeft from '../assets/arrow_left.svg';
import ArrowRight from '../assets/arrow_right.svg';

const Home: React.FC = () => (
	<Container>
		<Head>
			<title>Formata Texto</title>
			<link rel="icon" href="/favicon.svg" />
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content="o formata texto serve para converter, formatar ou inverter caracteres e textos." />
		</Head>

		<NavigationBar>
			<h1>
				Formata<span>Texto</span>
			</h1>

			<select name="language">
				<option value="pt-br" selected>
					pt-br
				</option>
				{/* <option value="en">en</option> */}
			</select>
		</NavigationBar>

		<Header>
			<ArrowRight />
			<h1>
				Formatador de <br /> Texto Online
			</h1>
			<ArrowLeft />
		</Header>

		<TextFormat />
		<Footer>©FormataTexto - 2020</Footer>
	</Container>
);

export default Home;
