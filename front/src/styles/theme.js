import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const globalTheme = createMuiTheme({
	palette: {
		primary: {
			main: purple[500],
		},
		secondary: {
			main: green[500],
		},
	},
});

const theme = createMuiTheme({
	...globalTheme,
	// globals
	overrides: {
		MuiCssBaseline: {
			'@global': {
				ul: {
					margin: 0,
					padding: 0,
					listStyle: 'none',
				},
				a: {
					color: 'inherit',
					textDecoration: 'none',
					'&:hover': {
						color: globalTheme.palette.secondary.main,
					},
				},
			},
		},
	},
});

export default theme;
