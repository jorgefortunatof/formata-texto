import { useState, useCallback, useRef } from 'react';
import { Container, Card, InputContainer, Header } from './styles';

const TextFormat: React.FC = () => {
	const textArea = useRef(null);

	const [copySuccessMessage, setCopySuccessMessage] = useState(false);
	const [text, setText] = useState('');

	const toUpperCase = useCallback(() => {
		setText(text.toUpperCase());
	}, [text]);

	const toLowerCase = useCallback(() => {
		setText(text.toLowerCase());
	}, [text]);

	const invertText = useCallback(() => {
		setText(text.split('').reverse().join(''));
	}, [text]);

	const capitalizeWords = useCallback(() => {
		const capitalizedWords = text
			.trim()
			.split('\n')
			.map(paragraph =>
				paragraph
					.split(' ')
					.map(word => {
						if (!word) return word;

						const wordSplited = word.toLowerCase().split('');
						wordSplited[0] = wordSplited[0].toUpperCase();

						return wordSplited.join('');
					})
					.join(' '),
			)
			.join('\n');

		setText(capitalizedWords);
	}, [text]);

	const capitalizeParagraphs = useCallback(() => {
		const capitalizedParagraphs = text
			.trim()
			.split('\n')
			.map(paragraph => {
				if (!paragraph) return paragraph;

				const paragraphSplited = paragraph.toLowerCase().split('');
				paragraphSplited[0] = paragraphSplited[0].toUpperCase();

				return paragraphSplited.join('');
			})
			.join('\n');

		setText(capitalizedParagraphs);
	}, [text]);

	const invertCase = useCallback(() => {
		setText(
			text
				.split('')
				.map(letter => {
					if (!letter) return letter;

					if (letter === letter.toUpperCase()) {
						return letter.toLowerCase();
					}

					return letter.toUpperCase();
				})
				.join(''),
		);
	}, [text]);

	const copyToClipboard = useCallback(() => {
		if (!text) return;

		textArea.current.select();
		document.execCommand('copy');

		setCopySuccessMessage(true);

		setTimeout(() => {
			setCopySuccessMessage(false);
		}, 5000);
	}, [text]);

	return (
		<Container>
			<Card>
				<Header>
					<h1>
						Acidentalmente escreveu algo com o CapsLock ligado, e não quer ter
						que escrever tudo de novo?
					</h1>
					<label htmlFor="texto">
						Insira seu texto e escolha para que tipo de formato deseja
						converter.
					</label>
				</Header>
				<InputContainer>
					<div>
						<button onClick={toUpperCase} type="button">
							MAIÚSCULO
						</button>
						<button onClick={toLowerCase} type="button">
							minúsculo
						</button>
						<button onClick={invertText} type="button">
							Inverter
						</button>
						<button onClick={capitalizeWords} type="button">
							Estilo Título
						</button>
						<button onClick={capitalizeParagraphs} type="button">
							Estilo Parágrafo
						</button>
						<button onClick={invertCase} type="button">
							Inverter Caixa
						</button>
					</div>
					<textarea
						id="texto"
						ref={textArea}
						rows={20}
						value={text}
						onChange={event => setText(event.target.value)}
						placeholder="Cole seu texto aqui..."
					/>

					<button onClick={copyToClipboard}>Copiar texto</button>

					<span>{copySuccessMessage && 'Copiado com sucesso!'}</span>
				</InputContainer>
			</Card>
			<h2>Formatar texto para maiúsculo</h2>
			<p>
				O formatador de texto para maiúsculo, vai converter os caracteres de
				qualquer texto que você inserir para caixa alta. Para formatar para
				maiúsculo, basta colar seu texto na caixa acima e clicar em "MAIÚSCULO".
			</p>

			<h2>Formatar texto para minúsculo</h2>
			<p>
				O Formatador de texto para minúsculo, vai formatar os caracteres do
				texto que você inserir para caixa baixa. Para formatar para minúsculo,
				você deve color um texto na caixa acima e clicar em "minúsculo".
			</p>

			<h2>Inverter texto</h2>
			<p>
				O inversor de texto, como o nome já sugere, vai inverter a ordem dos
				caracteres do texto que você inserir. Para inverter textos, basta colar
				o seu texto na caixa acima e clicar em "inverter".
			</p>

			<h2>Estilo título</h2>
			<p>
				O formatador estilo título, vai converter a primeira letra de cada
				palavra para caixa alta e vai manter o restante como caixa baixa. Para
				formatar com estilo título, você deve inserir seu texto na caixa acima{' '}
				<br />e clicar em "Estilo Título".
			</p>

			<h2>Estilo parágrafo</h2>
			<p>
				O formatador estilo parágrafo, vai converter a primeira letra de cada
				parágrafo para maiúscula e manter o restante como minúsculo. Para
				formatar seu texto no estilo parágrafo, você pode colar o texto
				escolhido na caixa acima e clicar em "Estilo Parágrafo".
			</p>

			<h2>Inverter caixa</h2>
			<p>
				O inversor de caixa, vai converter os caracteres que possuem caixa alta
				para caixa baixa e os que possuem caixa baixa para caixa alta. Para usar
				o inversor de caixa basta inserir o texto escolhido na caixa acima{' '}
				<br />e clicar em "Inverter Caixa".
			</p>
		</Container>
	);
};

export default TextFormat;
