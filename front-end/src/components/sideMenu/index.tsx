import React from 'react';

import { Container, SideMenuLink } from './styles';

function SideMenu() {
	return (
		<Container>
			<h1>Menu</h1>
			<SideMenuLink to="/donate">Doar</SideMenuLink>
			<SideMenuLink to="/donateHistory">
				Historico de Doações
			</SideMenuLink>
		</Container>
	);
}

export default SideMenu;
