import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/theme';

import Header from '../Header';
import Home from '../Home';
import Offer from '../Offer';
import AddOffer from '../AddOffer';
import Signup from '../Signup';
import React from 'react';

const App = () => (
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<Header />
				<Switch>
					<Route path='/addOffer'>
						<AddOffer />
					</Route>
					<Route path='/offers'>
						<Offer />
					</Route>
					<Route path='/signup'>
						<Signup />
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	</React.StrictMode>
);

export default App;
