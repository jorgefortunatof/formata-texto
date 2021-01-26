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
		</Head>

		<NavigationBar>
			<h1>
				Formata<span>Texto</span>
			</h1>

			<select name="language">
				<option defaultValue="pt-br">
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
