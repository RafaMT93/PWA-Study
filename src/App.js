import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';

function App() {
  return (
    <div className="App">
      <section>
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </section>
    </div>
  );
}

export default App;
