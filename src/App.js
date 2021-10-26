import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import './App.css';
import Invoices from './pages/invoices/invoices.component';

import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Navbar from './components/nav/navbar-vertical-main/navbarVerticalMain.component';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Invoices />
          </Route>
        </Switch>
      </BrowserRouter>
      
    </ThemeProvider>
    
  );
}

export default App;
