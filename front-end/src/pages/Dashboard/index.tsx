import React from 'react';

import { Container, Content, MainContent } from './styles';

import logoImg from '../../assets/logo.svg';

import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {

    const { user } = useAuth();

	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />
				<MainContent>
					<div />

					<img src={logoImg} alt="Doeja" />
					<h1>Olá {user.name}</h1>
				</MainContent>
			</Content>
		</Container>
	);
};

export default Dashboard;
