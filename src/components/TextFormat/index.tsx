import { useState, useCallback } from 'react';
import { Container, Card, InputContainer, Header } from './styles';

const TextFormat: React.FC = () => {
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
			.map(paragraph => paragraph.split(' ')
				.map(word => {
					if (!word) return word;

					const wordSplited = word.split('');
					wordSplited[0] = wordSplited[0].toUpperCase();

					return wordSplited.join('');
				}).join(' ')
			).join('\n');

		setText(capitalizedWords);
	}, [text]);

	const capitalizeParagraphs = useCallback(() => {
		const capitalizedParagraphs = text
			.trim()
			.split('\n')
			.map(paragraph => {
				if (!paragraph) return paragraph;

				const paragraphSplited = paragraph.split('');
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

	return (
		<Container>
			<Card>
				<Header>
					<h1>
						Acidentalmente escreveu algo com o Caps Lock ligado, e não quer
						escrever tudo de novo?
					</h1>
					<p>
						Insira o seu texto e escolha para que tipo de formato deseja
						utilizar.
					</p>
				</Header>
				<InputContainer>
					<div>
						<button onClick={toUpperCase} type="button">
							MAIÚSCULO
						</button>
						<button onClick={toLowerCase} type="button">
							minúscula
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
						rows={20}
						value={text}
						onChange={event => setText(event.target.value)}
						placeholder="Cole seu texto aqui..."
					/>
				</InputContainer>
			</Card>
			<h2>Lorem ipsum dolor</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nulla
				tortor, ultricies vel molestie eget, imperdiet ut lacus. Praesent porta
				erat at vestibulum ornare.
			</p>

			<h2>Consectetur adipiscing</h2>
			<p>
				Lorem vestibulum ornare sit amet, consectetur adipiscing elit. Quisque
				nulla tortor, ultricies vel molestie eget, imperdiet ut lacus. Praesent
				porta erat at vestibulum ornare.
			</p>

			<h2>Ornare adipiscing</h2>
			<p>
				Lorem vestibulum ornare sit amet, consectetur adipiscing elit. Quisque
				nulla tortor, ultricies vel molestie eget, imperdiet ut lacus. Praesent
				porta erat at vestibulum ornare.
			</p>
		</Container>
	);
};

export default TextFormat;
