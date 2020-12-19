import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
	margin: 80px 40px;
	color: ${colors.light};

	> h2 {
		font-size: 20px;
		text-align: center;
	}

	> p {
		margin-bottom: 40px;
		text-align: center;
	}
`;

export const Card = styled.div`
	background-color: ${colors.darker};
	border-radius: 12px;

	margin-bottom: 60px;
	padding: 40px 40px;
`;

export const Header = styled.div`
	h1 {
		color: ${colors.lightest};
		display: inline;
		font-size: 25px;
	}

	p {
		margin-top: 20px;
	}
`;

export const InputContainer = styled.div`
	margin-top: 20px;

	div {
		display: flex;
		flex-wrap: wrap;
	}

	button {
		flex: 1;
		font-size: 18px;
		padding: 15px;
		background-color: ${colors.darkest};

		color: ${colors.lightest};
		outline: none;
		border: none;
		font-weight: bold;

		&:hover {
			color: ${colors.primary};
			background-color: ${lighten(0.05, colors.darkest)};
			cursor: pointer;
		}

		&:last-child {
			border-radius: 0 6px 0 0;
		}

		&:first-child {
			border-radius: 6px 0 0 0;
		}
	}

	textarea {
		width: 100%;
		resize: none;
		outline: none;

		padding: 10px;
		border-radius: 0 0 6px 6px;
	}
`;
