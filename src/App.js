import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
              </li>
              </ul>
        </nav>

        <Switch>
          <Route path="/" exact component ={Greeting} />
          </Switch>
        </div>
    </Router>
  );
};

export default App;
