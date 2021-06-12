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
	root: {},
	form: {
		margin: '120px 0 80px',
	},
	submit: {
		marginTop: '40px',
	},
}));

const Filters = ({ handleSubmit, filtersOptions, handleFilterChange }) => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<form className={classes.form} noValidate onSubmit={handleSubmit}>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<Autocomplete
							multiple
							limitTags={2}
							id='processor'
							options={filtersOptions}
							getOptionLabel={(option) => option.title}
							onChange={(e, newValue) =>
								handleFilterChange(e, newValue)
							}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Wybierz procesor'
									variant='outlined'
									value='lala'
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
				</Grid>
				<Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					Filter
				</Button>
			</form>
		</Container>
	);
};

export default Filters;
