import styled from 'styled-components';

export const Container = styled.div``;

export const MainHeader = styled.header`
	padding: 16px 0;
	background: #4a69bd;
`;
export const HeaderContent = styled.div`
	width: 100%;
	margin: 0 auto;
	display: flex;
	align-items: center;
	padding: 0px 30px;

	> img {
		margin-left: 50px;
		height: 60px;
	}

	button {
		margin-left: auto;
		background: transparent;
		border: 0;

		svg {
			margin-right: 50px;
			color: #fff;
			width: 20px;
			height: 20px;
		}
	}
`;

export const Personal = styled.div`
	display: flex;
	align-items: center;
	margin: auto;
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	margin-left: 80px;

	img {
		width: 56px;
		height: 56px;
		border-radius: 50%;
	}

	div {
		display: flex;
		flex-direction: column;
		margin-left: 16px;
		line-height: 24px;

		span {
			color: #fff;
		}

		strong {
			color: #fff;
		}
	}
`;

export const Wallet = styled.div`
	margin-left: 80px;
	margin-right: 80px;
	background: #0c2461;
	padding: 5px 10px;
	border-radius: 20px;
	font-size: 25px;
`;
