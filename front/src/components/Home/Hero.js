import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '80px',
		minHeight: '50vh',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			HERO SLOGAN
			<Button variant='contained' size='large' color='secondary'>
				Wystaw swój komputer
			</Button>
		</Container>
	);
};

export default Hero;
