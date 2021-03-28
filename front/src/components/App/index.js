import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyles } from '../../styledComponents/GlobalStyles';

import Header from '../Header';
import Home from '../Home';
import Offer from '../Offer';
import Signup from '../Signup';

const App = () => (
	<Router>
		<GlobalStyles />
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
);

export default App;
