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

	@media (max-width: 700px) {
		margin: 40px 20px;
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

	label {
		display: block;
		margin-top: 20px;
	}

	@media (max-width: 700px) {
		h1 {
			font-size: 20px;
		}
	}
`;

export const InputContainer = styled.div`
	margin-top: 20px;

	div {
		display: flex;
		flex-wrap: wrap;
	}

	> span {
		display: block;
		margin-top: 10px;
		color: ${colors.primary};
	}

	div:first-child > button {
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

	> button {
		width: 100%;
		font-size: 18px;
		padding: 15px;
		background-color: ${colors.darkest};

		color: ${colors.lightest};
		outline: none;
		border: none;
		font-weight: bold;

		border-radius: 0 0 6px 6px;

		&:hover {
			color: ${colors.primary};
			background-color: ${lighten(0.05, colors.darkest)};
			cursor: pointer;
		}
	}

	textarea {
		width: 100%;
		resize: none;
		outline: none;

		padding: 10px;
	}
`;
