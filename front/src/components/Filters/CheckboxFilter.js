import React from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const CheckboxFilter = ({ option, checkedBoxes, handleChange }) => {
	return (
		<FormControlLabel
			key={option.id}
			control={
				<Checkbox
					checked={checkedBoxes.includes(option.name)}
					onChange={handleChange}
					name={option.name}
				/>
			}
			label={option.name}
		/>
	);
};

export default CheckboxFilter;
