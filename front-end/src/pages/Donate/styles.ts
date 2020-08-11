import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Content = styled.main`
	max-width: 1920px;
	display: flex;
`;
export const MainContent = styled.div`display: flex;`;

export const Card = styled(NavLink)`
    text-decoration: none;
	height: 80%;
	width: 25.25vw;
	margin: auto 15px;
    text-align: center;
	background: #8ba4d8;
    box-shadow: rgb(0, 0, 0) 0px 0rem 0.5rem;
	padding: 22px 32px;
	border-radius: 5px;
	color: #000;

	p {
		margin-top: 14px;
		font-size: 20px;
		font-weight: bold;
		line-height: 54px;
	}

	&:hover {
		border: 1px solid white;
		transform: translateY(-5px);
	}
`;
