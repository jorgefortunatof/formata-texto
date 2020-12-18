import { useState, useCallback } from 'react';
import { Container, InputContainer, Title } from './styles';
import ArrowRight from '../../assets/arrow_right.svg';

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

	return (
		<Container>
			<Title>
				<ArrowRight />
				<h1>Formatador de Texto</h1>
			</Title>

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
					<button type="button">Captlize</button>
					<button type="button">Formato frase</button>
				</div>
				<textarea
					rows={20}
					value={text}
					onChange={event => setText(event.target.value)}
				/>
			</InputContainer>
		</Container>
	);
};

export default TextFormat;
