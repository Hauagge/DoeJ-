import React from 'react';

import { FiPower } from 'react-icons/fi';

import {
	Container,
	MainHeader,
	HeaderContent,
	Personal,
    Profile,
    HeaderLogo,
	/* Wallet */
} from './styles';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import AltUserImg from '../../assets/AltUserImg.png'

function Header() {
    const { signOut, user } = useAuth();



    /* var avatar = user.avatar_url;
    if (avatar === 'http://localhost:3333/files/null') {
        var avatar = AltUserImg;
       } */


	return (
		<Container>
			<MainHeader>
				<HeaderContent>
                    <HeaderLogo to="/">
					    <img src={logoImg} alt="GoBarber" />
                    </HeaderLogo>
					<Personal>
						<Profile>
							<img src={user.avatar_url === 'http://localhost:3333/files/null' ? AltUserImg : user.avatar_url} alt="Img usuário" />
						<div>
							<span>Bem-vindo,</span>
							<strong>{user.name}</strong>
						</div>
							{/* com o backend funcionando, mais tarde, deve-se trocar o de baixo,  img e o nome pelo de cima, tanto é que está dando o erro de user is assigned a balue but never used */}
							{/* <img
								src="https://avatars3.githubusercontent.com/u/50749539?s=460&u=f3b323cae06227655b6579825d1cadafd99f285b&v=4"
								alt="stefano"
							/>
							<div>
								<span>Bem-vindo,</span>
								<strong>Stefano Pontelli</strong>
							</div> */}
						</Profile>

{/* 						<Wallet>
							<div>
								<span> Carteira: </span>
								<strong> R$ 650,00</strong>
							</div>
						</Wallet> */}
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
