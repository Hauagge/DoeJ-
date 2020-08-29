import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div``;

export const Content = styled.main`
	max-width: 1920px;
	display: flex;
`;
export const MainContent = styled.div`
    display: flex;

    >div {
        position: absolute;
        top: 10%;
        left: 50%;
        height: 50px;
        width: 150px;
        margin-top: 20px;
    }
`;

export const Card = styled(NavLink)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
	height: 70%;
	width: 25.25vw;
	margin: 100px 10px 60px 40px;
    text-align: center;
	background: #8ba4d8;
    border: 1px solid #8ba4d8;
    box-shadow: rgb(0, 0, 0) 0px 0rem 0.5rem;
	padding: 22px 32px;
	border-radius: 5px;
	color: #000;


	strong {
		margin-top: 30px;
		font-size: 20px;
		font-weight: bold;
		line-height: 54px;
	}

    img {
        margin-top: 90px;
        height: 180px;
    }

    div {
        height: 180px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    p {
        margin-top: 60px;
    }

	&:hover {
		border: 1px solid white;
		transform: translateY(-4px);
	}
`;
