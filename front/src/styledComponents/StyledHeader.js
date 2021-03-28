import styled from 'styled-components';

export const StyledHeader = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 3rem;
`;

export const StyledLogo = styled.h1`
	font-size: 2rem;
	margin: 1rem 0;
`;

export const StyledNav = styled.nav`
	ul {
		display: flex;
		justify-content: space-around;
		margin: 0.5rem;

		li {
			border-bottom: 2px solid transparent;
			&:hover {
				border-bottom: 2px solid black;
			}
		}
	}
`;
