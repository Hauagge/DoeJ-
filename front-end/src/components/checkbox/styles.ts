import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
	color: #fff;

	&:hover {
		background: ${shade(0.6, '#0C2461')};
		color: ${shade(0.2, '#fff')};
	}
`;
