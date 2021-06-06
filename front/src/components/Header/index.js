import React from 'react';
import { Link } from 'react-router-dom';

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
	},
}));

const Header = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar>
				<Toolbar className={classes.toolbar}>
					<h1 className={classes.toolbarTitle}>
						<Link to='/'>MARKETPLACE</Link>
					</h1>
					<nav>
						<ul>
							<li>
								<Link to='/signup'>Sign up</Link>
							</li>
						</ul>
					</nav>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;
