import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';

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
			<Typography component='h1' variant='h1'>
				HERO SLOGAN
			</Typography>
			<Button
				component={Link}
				to={'/addOffer'}
				variant='contained'
				size='large'
				color='secondary'
			>
				Wystaw swój komputer
			</Button>
			<Button
				component={Link}
				to={'/offers'}
				variant='contained'
				size='large'
				color='primary'
			>
				Znajdź komputer dla siebie
			</Button>
		</Container>
	);
};

export default Hero;
