import React from 'react';

import { Container, Content, MainContent, MainHead, MainValues, Infos, FinalButtons} from './styles';

import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';

const Receipt: React.FC = () => {
	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />
				<MainContent>
                    <MainHead>
                        <h1>
                            RECIBO
                        </h1>
                    </MainHead>
                    <Infos>
                        <MainValues>
                        <p> R$ 50 </p><strong>&nbsp; em doação para ser utilizado no&nbsp;</strong> <p> Mercado X </p>

                        </MainValues>
                        <MainValues>

                        <strong>VOUCHER</strong>
                        </MainValues>

                        <FinalButtons>
                            <button>COMPARTILHAR</button>
                            <button onClick={() => window.print()}>IMPRIMIR</button>
                        </FinalButtons>


                    </Infos>
				</MainContent>
			</Content>
		</Container>
	);
};

export default Receipt;
