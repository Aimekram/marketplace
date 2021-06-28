import React from 'react';

import CheckboxFilter from '../Filters/CheckboxFilter';

import { makeStyles } from '@material-ui/core/styles';
import {
	Container,
	FormGroup,
	Grid,
	Slider,
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
									<CheckboxFilter
										option={option}
										checkedBoxes={checkedBoxes}
										handleChange={handleFilterChange}
									/>
								))}
						</FormGroup>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography id='range-slider' gutterBottom>
							Temperature range
						</Typography>
						{/* <Slider
							value={value}
							onChange={handleChange}
							valueLabelDisplay='auto'
							aria-labelledby='range-slider'
							getAriaValueText={valuetext}
						/> */}
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
