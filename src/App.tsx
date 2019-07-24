// https://reach.tech/router
// https://reach.tech/router/example/multiple-routers
// https://material-ui.com/components/drawers/

import React from 'react';
import './App.css';
import Layout from './components/layouts/Layout'

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout />
      {/* <Sidebar>
        <Router primary={false}>
          <HomeNav path="/" />
          <DashboardNav path="dashboard" />
        </Router>
      </Sidebar>

      <MainScreen>
        <Router>
          <Home path="/">
            <About path="about" />
            <Support path="support" />
          </Home>
          <Dash path="dashboard">
            <Invoices path="invoices" />
            <Team path="team" />
          </Dash>
        </Router>
      </MainScreen> */}
    </div>
  );
}

export default App;
