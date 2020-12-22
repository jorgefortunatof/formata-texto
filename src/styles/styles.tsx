import styled from 'styled-components';
import { transparentize } from 'polished';
import colors from './colors';

import ToolsBg from '../assets/tools-bg.png';

export const NavigationBar = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 10px 30px;
	border-bottom: 4px solid ${transparentize(0.8, 'black')};

	select {
		font-size: 16px;
		background: transparent;
		color: ${colors.lightest};
		border: none;
		outline: none;

		option {
			background-color: ${colors.dark};
		}
	}

	span {
		color: ${colors.primary};
	}

	svg {
		path {
			fill: ${colors.darkest};
		}
	}
`;

export const Container = styled.div`
	width: 100%;
	max-width: 900px;
	margin: 0 auto;
	background-color: ${colors.darkest};
`;

export const Header = styled.header`
	margin: 120px 0;

	display: flex;
	justify-content: center;
	text-align: center;

	h1 {
		font-size: 68px;
		line-height: 68px;
	}

	svg {
		fill: ${colors.primary};
		margin-right: 20px;
	}

	h1 + svg {
		align-self: flex-end;
	}
`;

export const MainContainer = styled.main`
	background-image: url('${ToolsBg}');
	background-repeat: no-repeat;
	background-position-x: right;
	background-position-y: top;
`;

export const ToolsCard = styled.div`
	max-width: 480px;
	padding: 20px 40px;
	border-radius: 0 12px 12px 0;
	background-color: ${colors.darker};
	box-shadow: 4px 6px 6px -2px ${colors.darkest};

	position: relative;

	> svg {
		display: block;
		position: absolute;

		top: 20px;
		right: 20px;
	}

	h1 {
		font-size: 24px;
		margin-bottom: 20px;
	}

	a {
		height: 30px;
		display: flex;
		align-items: center;
		list-style: none;

		svg {
			width: 10px;
			margin-right: 10px;
		}
	}

	a:hover {
		color: ${colors.primary};
	}
`;

export const Footer = styled.div`
	background-color: ${colors.background};
	text-align: center;
	padding: 20px;

	font-weight: bold;
`;
