import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
	root: {
		paddingTop: '120px',
	},
	form: {
		marginTop: '120px',
	},
}));

const Form = () => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<Typography>Wystaw swój komputer</Typography>
			<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Autocomplete
							id='processor'
							options={[
								{
									title: 'The Shawshank Redemption',
									year: 1994,
								},
								{ title: 'The Godfather', year: 1972 },
								{ title: 'The Godfather: Part II', year: 1974 },
							]}
							getOptionLabel={(option) => option.title}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Wybierz procesor'
									variant='outlined'
								/>
							)}
							// autoComplete='fname'
							// name='Procesor'
							// variant='outlined'
							// required
							// fullWidth
							// id='procesor'
							// label='example: Ryzen 3 3100'
							// autoFocus
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							variant='outlined'
							required
							fullWidth
							id='lastName'
							label='Last Name'
							name='lastName'
							autoComplete='lname'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							required
							fullWidth
							id='email'
							label='Email Address'
							name='email'
							autoComplete='email'
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							variant='outlined'
							required
							fullWidth
							name='password'
							label='Password'
							type='password'
							id='password'
							autoComplete='current-password'
						/>
					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									value='allowExtraEmails'
									color='primary'
								/>
							}
							label='I want to receive inspiration, marketing promotions and updates via email.'
						/>
					</Grid>
				</Grid>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					Sign Up
				</Button>
			</form>
		</Container>
	);
};

export default Form;
