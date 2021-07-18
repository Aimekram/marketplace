import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../atoms/logo';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	toolbar: {
		flexWrap: 'wrap',
	},
	toolbarTitle: {
		flexGrow: 1,
		maxWidth: '150px',
		lineHeight: 1,
		transition: 'opacity .3s',
		'&:hover': {
			opacity: 0.8,
		},
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar className={classes.toolbar}>
					<Link to='/' className={classes.toolbarTitle}>
						<Logo />
					</Link>
					{/* <nav>
						<ul>
							<li>
								<Link to='/signup'>Sign up</Link>
							</li>
						</ul>
					</nav> */}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
