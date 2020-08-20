import styled from 'styled-components';

import Background from '../../assets/background.png';

export const Container = styled.div``;

export const Content = styled.main`
	max-width: 1920px;
	display: flex;
`;
export const MainContent = styled.div`
	flex: 1;

	div {
		position: absolute;
		z-index: -1;
		background: url(${Background}) no-repeat center;
		background-size: cover;
		opacity: 0.5;
		width: 82.35vw;
		height: 86.7vh;
	}
	img {
		position: absolute;
		width: 400px;
		left: 45%;
		top: 40%;
	}

	h1 {
		position: absolute;

		color: black;
		top: 65%;
		left: 48%;
	}
`;
