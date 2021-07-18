import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../atoms/logo';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Container, Typography } from '@material-ui/core';

import backgroundImg from '../../images/heroBackground.jpg';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '70vh',
		display: 'flex',
		flexFlow: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		backgroundImage: `url(${backgroundImg})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundColor: `${theme.palette.tertiary.main}ee`,
		backgroundBlendMode: 'multiply',
		marginBottom: theme.spacing(10),
		boxShadow: theme.shadows[4],
	},
	logo: {
		width: '40vw',
		maxWidth: '460px',
		minWidth: '250px',
	},
	typography: {
		padding: theme.spacing(3),
		color: theme.palette.common.white,
		maxWidth: '770px',
	},
	button: {
		margin: theme.spacing(2, 4),
		textTransform: 'none',
		fontSize: '1.2rem',
		color: theme.palette.common.white,
		transition: 'all .3s',
		padding: theme.spacing(2, 4),
		[theme.breakpoints.up('md')]: {
			margin: theme.spacing(6, 4),
		},
	},
	addOffer: {
		backgroundColor: theme.palette.tertiary.main,
	},
	findOffer: {
		backgroundColor: theme.palette.secondary.main,
	},
}));

const Hero = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root} maxWidth='false'>
			<Typography component='h1' className={classes.typography}>
				<Logo className={classes.logo} />
			</Typography>
			<Typography
				component='h2'
				variant='h4'
				className={classes.typography}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nisl
				massa, molestie vitae mauris eu, gravida rutrum tellus.
			</Typography>
			<div>
				<Button
					component={Link}
					to={'/addOffer'}
					variant='contained'
					size='large'
					className={`${classes.button} ${classes.addOffer}`}
				>
					Wystaw swój komputer
				</Button>
				<Button
					component={Link}
					to={'/offers'}
					variant='contained'
					size='large'
					color='purple'
					className={`${classes.button} ${classes.findOffer}`}
				>
					Znajdź komputer dla siebie
				</Button>
			</div>
		</Container>
	);
};

export default Hero;
