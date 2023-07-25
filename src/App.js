import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Greeting from './components/Greeting.js'; // Add .js extension here
// Rest of the code...

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  </Router>
);

export default App;
