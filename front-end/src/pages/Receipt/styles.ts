import styled from 'styled-components';

export const Container = styled.div`
    @media print {
        height: 100%;
        width: 100%;
    }
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
    width: 25%;
    align-items: center;
	justify-content: space-between;

    @media print {
        display: flex;
        flex: 1;
        height: 100%;
        width: 100%;
    }

`;


export const MainHead = styled.div`
    margin-top: 2%;
    margin-right: 1%;
`;


export const MainValues = styled.div`
    display: flex;
    flex-direction: row;
    @media print {
        display: contents;
    }

`;

export const FinalButtons = styled.div`
    button:first-child {
        margin-right: 15px;
    }

    @media print {
        display: none;
    }
`;





