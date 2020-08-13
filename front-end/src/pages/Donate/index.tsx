import React from 'react';

import { Container, Content, MainContent, Card } from './styles';

import Campaign from '../../assets/Campaign.svg';
import DirectDonation from '../../assets/DirectDonation.svg';
import FutureCause from '../../assets/FutureCause.svg';

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
						<strong>Campanhas</strong>
						<img src={Campaign} alt="Camapnha" />
						<div>
							<p>Doe para as campanhas em andamentos</p>
						</div>
					</Card>
					<Card to="/directdonation">
						<strong>Doações Diretas</strong>
						<img src={DirectDonation} alt="DoacaoDireta" />
						<div>
							<p>
								Conhece alguém que está precisando de uma ajuda?
								As doações podem ser fetas diretamente para esta
								pessoa por aqui
							</p>
						</div>
					</Card>
					<Card to="/donatetocause">
						<strong>Doação para a nossa causa</strong>
						<img src={FutureCause} alt="CausaFutura" />
						<div>
							<p>
								Sua contribuição fará parte de uma grade doação
								para uma causa importante no fim do mês.
								Ajude-nos a fazer alguem feliz!
							</p>
						</div>
					</Card>
				</MainContent>
			</Content>
		</Container>
	);
};

export default Dashboard;
