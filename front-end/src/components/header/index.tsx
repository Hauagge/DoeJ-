import React from 'react';

import { FiPower } from 'react-icons/fi';

import {
	Container,
	MainHeader,
	HeaderContent,
	Personal,
	Profile,
	Wallet
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';

function Header() {
	const { signOut, user } = useAuth();
	return (
		<Container>
			<MainHeader>
				<HeaderContent>
					<img src={logoImg} alt="GoBarber" />
					<Personal>
						<Profile>
							{/* <img src={user.avatar_url} alt="stefano" />
						<div>
							<span>Bem-vindo,</span>
							<strong>{user.name}</strong>
						</div> */}
							{/* com o backend funcionando, mais tarde, deve-se trocar o de baixo,  img e o nome pelo de cima, tanto é que está dando o erro de user is assigned a balue but never used */}
							<img
								src="https://avatars3.githubusercontent.com/u/50749539?s=460&u=f3b323cae06227655b6579825d1cadafd99f285b&v=4"
								alt="stefano"
							/>
							<div>
								<span>Bem-vindo,</span>
								<strong>Stefano Pontelli</strong>
							</div>
						</Profile>

						<Wallet>
							<div>
								<span> Carteira: </span>
								<strong> R$ 650,00</strong>
							</div>
						</Wallet>
					</Personal>
					<button type="button" onClick={signOut}>
						<FiPower />
					</button>
				</HeaderContent>
			</MainHeader>
		</Container>
	);
}

export default Header;
