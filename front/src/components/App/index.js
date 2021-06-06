import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../styles/theme';

import Header from '../Header';
import Home from '../Home';
import Offer from '../Offer';
import Signup from '../Signup';

const App = () => (
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<Router>
			<Header />
			<Switch>
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
);

export default App;
