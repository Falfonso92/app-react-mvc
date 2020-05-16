import React from 'react';
import logo from '../../logo.svg';
import styles from './main.module.scss';
import { Switch, Route, Redirect, HashRouter as Router } from 'react-router-dom';
import Employees from '../employees/employees';

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={styles.AppLink}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        <Router>
          <Switch>
            <Redirect from="/" to="/employees" exact></Redirect>
            <Route path="/employees">
              <Employees></Employees>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
