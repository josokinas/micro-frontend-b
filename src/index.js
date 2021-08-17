import React, { StrictMode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { Router, Route, Switch, Link } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as styles from './styles.scss';

if (!window.MFE) window.MFE = {};

const defaultHistory = createBrowserHistory();
const root = document.createElement('div');

window.MFE.B = {
  root,
  render: ({ currentLocation = '', history = defaultHistory, ...restProps }) =>
    render(
      <StrictMode>
        <Router history={history}>
          <p className={styles.text}>Micro Frontend B</p>
          <Link to={`${currentLocation}/sub_1`}>Go to Sub 1</Link>
          <br />
          <Link to={`${currentLocation}/sub_2`}>Go to Sub 2</Link>
          <br />
          <Switch>
            <Route path={`${currentLocation}/sub_1`}>
              <Sub1 />
            </Route>
            <Route path={`${currentLocation}/sub_2`}>
              <Sub2 />
            </Route>
          </Switch>
          <br />
          {JSON.stringify(restProps)}
        </Router>
      </StrictMode>,
      root
    ),
  unmount: () => unmountComponentAtNode(root),
};

const Sub1 = () => 'Sub Route 1';
const Sub2 = () => 'Sub Route 2';
