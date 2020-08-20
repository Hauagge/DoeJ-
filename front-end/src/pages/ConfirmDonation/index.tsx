import React from 'react';

import { Container, Content, MainContent, MainHead, MainValues, Infos} from './styles';

import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';

const ConfirmDonation: React.FC = () => {
	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />
				<MainContent>
                    <MainHead>
                        <h1>
                            CONFIRMAR DOAÇÃO
                        </h1>
                    </MainHead>
                    <Infos>
                        <MainValues>
                            <strong>Valor a ser doado: &nbsp;</strong>
                            <p> R$ 50 </p>
                        </MainValues>
                        <MainValues>

                            <strong>Mercado escolhido: &nbsp;</strong>
                            <p> Mercado X </p>
                        </MainValues>

                            <button>CONFIRMAR DOÇÃO?</button>
                    </Infos>
				</MainContent>
			</Content>
		</Container>
	);
};

export default ConfirmDonation;
