import React from 'react';

import { Container, Content, MainContent, Card } from './styles';

import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';

const Dashboard: React.FC = () => {
	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />
				<MainContent>
					<Card to="/donatetocampains">
						<p>Campanhas</p>
					</Card>
					<Card to="/directdonation">
						<p>Doações Diretas</p>
					</Card>
					<Card to="/donatetocause">
						<p>Doação para a nossa causa</p>
					</Card>
				</MainContent>
			</Content>
		</Container>
	);
};

export default Dashboard;
