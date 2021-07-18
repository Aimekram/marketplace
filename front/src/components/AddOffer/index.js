import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';

// import Form from './Form';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		color: theme.palette.common.white,
	},
}));

const AddOffer = () => {
	// const [data, setData] = useState({});
	const classes = useStyles();

	return (
		<Container component='main' className={classes.root}>
			<Typography>Strona w budowie</Typography>
		</Container>
		// <Form />
	);
};

export default AddOffer;
