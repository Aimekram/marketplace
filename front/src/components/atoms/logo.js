import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		fontStyle: 'normal',
		fontVariant: 'normal',
		fontWeight: 'normal',
		fontStretch: 'normal',
		fontSize: '35.27777863px',
		fontFamily: 'Electrolize',
		strokeWidth: 0,
		userSelect: 'none',
	},
	komp: {
		fill: '#ff6300',
	},
	er: {
		fill: theme.palette.common.white,
	},
}));

const Logo = ({ className }) => {
	const classes = useStyles();

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 118.61436 35.277779'
			version='1.1'
			id='svg8'
			width='100%'
			height='100%'
			className={className}
			aria-labelledby='logoTitle'
		>
			<g id='layer1'>
				<text
					id='text1'
					xmlSpace='preserve'
					className={classes.root}
					x={-2.117}
					y={26.105}
				>
					<title id='logoTitle'>komper</title>
					<tspan className={classes.komp} id='tspan1'>
						komp
					</tspan>
					<tspan className={classes.er} id='tspan2'>
						er
					</tspan>
				</text>
			</g>
		</svg>
	);
};

export default Logo;
