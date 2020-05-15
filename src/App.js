import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import {
  ThemeProvider as MuiThemeProvider
} from '@material-ui/core/styles';
import theme from './Theming/Theme';
import {
  CssBaseline
} from '@material-ui/core';

import Frontend from './components/frontend/Frontend';

import Login from './components/loggers/login/Login';
import Signup from './components/loggers/signup/Signup';

import Backend from './components/backend/Backend';



function App() {
  return (
    <MuiThemeProvider theme={theme()}>
      <CssBaseline />
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={Frontend} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/backend" component={Backend} />
          </Switch>
        </Router>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
