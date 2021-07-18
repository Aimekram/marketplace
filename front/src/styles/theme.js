import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const globalTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#022140',
		},
		secondary: {
			main: '#2d5f5d',
		},
		tertiary: {
			main: '#265077',
		},
	},
	typography: {
		fontFamily: ['Montserrat', 'Open Sans', 'sans-serif'].join(','),
	},
});

let theme = createMuiTheme({
	...globalTheme,
	// globals
	overrides: {
		MuiCssBaseline: {
			'@global': {
				body: {
					backgroundColor: globalTheme.palette.primary.main,
				},
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
				main: {
					paddingTop: '64px',
				},
			},
		},
	},
});

theme = responsiveFontSizes(theme);

export default theme;
