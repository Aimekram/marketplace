import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { GlobalStyles } from "../../styledComponents/GlobalStyles";

import Home from "../Home";
import Offer from "../Offer";
import Signup from "../Signup";

const App = () => (
  <Router>
    <GlobalStyles />
    <h1>MARKETPLACE</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/offers">
        <Offer />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
