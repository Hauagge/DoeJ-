import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { shade } from 'polished';

export const Container = styled.aside`
	display: flex;
	flex-shrink: 0;
	align-items: center;
	width: 240px;
	height: 100vh;
	background: #1e3799;
	flex-direction: column;
	box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25);

	h1 {
		font-size: 30px;
		height: 50px;
		margin-top: 5px;
	}

    @media print {
        display: none;
    }
`;

export const SideMenuLink = styled(NavLink)`
  width: 100%;
  height: 50px;
  text-align: center;
  text-decoration: none;
  padding-top: 10px;
  color: #fff;
  border: 1px solid black;

  &:hover {
    background: ${shade(0.3, '#0C2461')};
	color: ${shade(0.2, '#fff')};
  }
`;
