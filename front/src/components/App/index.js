import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { GlobalStyles } from "../../styledComponents/GlobalStyles";

import Home from "../Home";
import AdShort from "../AdShort";

const App = () => (
  <Router>
    <GlobalStyles />
    <h1>MARKETPLACE</h1>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ad">SingleAd</Link></li>
      </ul>
    </nav>

    <Switch>
      <Route path="/ad">
        <AdShort />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
);

export default App;
