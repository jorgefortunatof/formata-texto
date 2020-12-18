import styled from 'styled-components';
import { lighten } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.div`
	background-color: ${colors.darker};
	border-radius: 12px;

	margin: 140px 90px;
	padding: 60px 40px;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;

	h1 {
		display: inline;
	}

	svg {
		width: 24px;
		margin-right: 20px;
	}
`;

export const InputContainer = styled.div`
	margin-top: 40px;

	div {
		display: flex;
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
