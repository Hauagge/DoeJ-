import React from 'react';

import { Container, Content, MainContent } from './styles';

import logoImg from '../../assets/logo.svg';

import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';

const Dashboard: React.FC = () => {
	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />
				<MainContent>
					<div />

					<img src={logoImg} alt="Doeja" />
					<h1>Olá Stéfano Pontelli</h1>
				</MainContent>
			</Content>
		</Container>
	);
};

export default Dashboard;
