import React from 'react';
import { useCookies } from 'react-cookie';
import Modal from 'react-modal';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		position: 'fixed',
		// top: 'auto',
		// left: '15%',
		// right: '15%',
		bottom: '0',
		borderTop: '1px solid rgb(100, 100, 100)',
		background: theme.palette.common.white,
		outline: 'none',
		padding: theme.spacing(4),
		zIndex: 1,
	},
	button: {
		marginTop: theme.spacing(2),
	},
}));

const CookiesModal = () => {
	const classes = useStyles();
	const [cookies, setCookie] = useCookies(['allowcookies']);

	const handleCookie = () => {
		setCookie('allowcookies', true, {
			path: '/',
			expires: new Date(Date.now() + 100 * 24 * 60 * 60 * 1000),
		});
	};

	const closeModal = () => handleCookie();

	return (
		<Modal
			isOpen={cookies.allowcookies ? false : true}
			className={`Modal ${classes.root}`}
			overlayClassName='Overlay'
		>
			<Typography component='h4' variant='h6'>
				COOKIES POLICY
			</Typography>
			<Typography component='p' variant='p'>
				I use cookies to personalize content, ads and to analyze the
				traffic. I also share information about your use of my website
				with my social media, advertising and analytics partners who may
				combine it with other information that you have provided to them
				or that they have collected from your use of their services. If
				you continue browsing, it means that you accept the use of
				cookies on this website.
			</Typography>
			<Button
				variant='contained'
				size='small'
				color='secondary'
				onClick={closeModal}
				className={classes.button}
			>
				OK
			</Button>
		</Modal>
	);
};

export default CookiesModal;
