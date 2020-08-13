import React from 'react';

import { Container, Content, MainContent} from './styles';

import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';

const DirectDonation: React.FC = () => {
	return (
		<Container>
			<Header />
			<Content>
				<SideMenu />
				<MainContent>
                    <div>
                        <h1>
                            DOAÇÕES DIRETAS
                        </h1>
                    </div>
{/* Inicio do formulario de preenchimento, dá pra usar as coisaas prontas mais pra frente (input por exemplo)*/}
                    <div>
                    <input type="text" name="moneyAmount" placeholder="Quanto deseja doar?"/>
                    </div>

                    <div>
                        <label>
                            Escolha em qual mercado deve ser retirado a doação:
                            <select>

                                <option selected value="Selecionar">Selecionar</option>
                                <option value="Mercado1">Mercado1</option>
                                <option value="Mercado2">Mercado2</option>
                                <option value="Mercado3">Mercado3</option>
                            </select>
                        </label>
                    </div>

                    <button>DOAR</button>

				</MainContent>
			</Content>
		</Container>
	);
};

export default DirectDonation;
