import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	Checkbox,
	Container,
	FormControlLabel,
	FormGroup,
	Grid,
	TextField,
	Typography,
} from '@material-ui/core';
// import { Autocomplete } from '@material-ui/lab'; //TODO: delete /lab package?

const useStyles = makeStyles((theme) => ({
	root: {},
	form: {
		margin: '120px 0 80px',
	},
	submit: {
		marginTop: '40px',
	},
}));

const Filters = ({ filtersOptions, handleFilterChange, checkedBoxes }) => {
	const classes = useStyles();

	return (
		<Container className={classes.root}>
			<form className={classes.form} noValidate>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={6}>
						<FormGroup>
							{filtersOptions &&
								filtersOptions.map((option) => (
									<FormControlLabel
										key={option}
										control={
											<Checkbox
												checked={checkedBoxes.includes(
													option
												)}
												onChange={handleFilterChange}
												name={option}
											/>
										}
										label={option}
									/>
								))}
						</FormGroup>
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
				{/* <Button
					type='submit'
					variant='contained'
					color='primary'
					className={classes.submit}
				>
					Filter
				</Button> */}
			</form>
		</Container>
	);
};

export default Filters;
