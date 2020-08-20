import styled from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.main`
	max-width: 1920px;
	display: flex;
`;
export const MainContent = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
	justify-content: flex-start;

`;

export const Infos = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2%;
    padding: 10px;
    background: #8ba4d8;
	border-radius: 5px;
    height: 40%;
    width: 40%;
    align-items: center;
	justify-content: space-between;

    input {
        font-size: 20px;
    }

    label {
        font-size: 20px;

        select {
            font-size: 20px;
        }
    }

    button {
        font-size: 20px;
    }

`;
