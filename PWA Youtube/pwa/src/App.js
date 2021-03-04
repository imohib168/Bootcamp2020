import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// Components
import { Home } from './components/Home';
import { About } from './components/About';
import { Users } from './components/Users';

const App = () => {
  return (
    <>
      <Router>
        <Link to="/">Home</Link> {' | '}
        <Link to="/about">About</Link> {' | '}
        <Link to="/users">Users</Link> {' | '}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
