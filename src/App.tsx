// https://reach.tech/router
// https://reach.tech/router/example/multiple-routers
// https://material-ui.com/components/drawers/

import React from 'react';
import './App.css';
import Layout from './components/layouts/Layout'
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory()


const App: React.FC = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
