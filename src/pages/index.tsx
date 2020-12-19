import Head from 'next/head';

import {
	NavigationBar,
	Container,
	MainContainer,
	Header,
	ToolsCard,
	Footer,
} from './styles';

import TextFormat from '../components/TextFormat';

import ArrowLeft from '../assets/arrow_left.svg';
import ArrowRight from '../assets/arrow_right.svg';

import ToolsIcon from '../assets/tools.svg';

const Home: React.FC = () => (
	<Container>
		<Head>
			<title>FormataTexto</title>
			<link rel="icon" href="/favicon.svg" />
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
			{/* <ToolsCard>
				<h1>Nossas Ferramentas</h1>
				<ToolsIcon />

				<ul>
					<a href="/">
						<ArrowRight />
						<span>Formatador de Textos</span>
					</a>
					<a href="/">
						<ArrowRight />
						<span>Contador de letras, palavras e linhas</span>
					</a>
					<a href="/">
						<ArrowRight />
						<span>Adicionar quebras de linha</span>
					</a>
					<a href="/">
						<ArrowRight />
						<span>Gerador de textos em negrito</span>
					</a>
					<a href="/">
						<ArrowRight />
						<span>Gerador de textos em itálico</span>
					</a>
				</ul>
			</ToolsCard> */}

			<TextFormat />
		</MainContainer>
		<Footer>©FormataTexto - 2020</Footer>
	</Container>
);

export default Home;
