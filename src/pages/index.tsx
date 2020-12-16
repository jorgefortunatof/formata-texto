import Head from 'next/head';

import {
	NavigationBar,
	Container,
	MainContainer,
	Header,
	ToolCard,
} from './styles';

import ArrowLeft from '../assets/arrow_left.svg';
import ArrowRight from '../assets/arrow_right.svg';

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
		</NavigationBar>

		<Header>
			<ArrowRight />
			<h1>
				Formatador de <br /> Texto Online
			</h1>
			<ArrowLeft />
		</Header>

		<MainContainer>
			<ToolsIcon />
			<ToolCard>
				<li>
					<ArrowRight />
					<span>Contador de Palavras</span>
				</li>
				<li>
					<ArrowRight />
					<span>Formatador de Palavras para maiusculo</span>
				</li>
				<li>
					<ArrowRight />
					<span>Formatador de Palavras para minusculo</span>
				</li>
				<li>
					<ArrowRight />
					<span>Fomatador de Palavras para priemeira letra maiuscula</span>
				</li>
			</ToolCard>
		</MainContainer>
	</Container>
);

export default Home;
