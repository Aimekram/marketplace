import React from 'react';
import { Link } from 'react-router-dom';
import {
	StyledHeader,
	StyledLogo,
	StyledNav,
} from '../../styledComponents/StyledHeader';

const Header = () => (
	<StyledHeader>
		<StyledLogo>
			<Link to='/'>MARKETPLACE</Link>
		</StyledLogo>
		<StyledNav>
			<ul>
				<li>
					<Link to='/signup'>Sign up</Link>
				</li>
			</ul>
		</StyledNav>
	</StyledHeader>
);

export default Header;
