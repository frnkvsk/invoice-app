import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@mui/material';

import { theme } from './theme';
import Navbar from './components/nav/navbar-vertical-main/navbarVerticalMain.component';
import InvoiceList from './pages/invoices/invoice-list.component';
import Invoice from './pages/invoices/invoice.component';
import { LightingContext } from './context/lighting.context';

function App() {
  const lightingContext = useContext(LightingContext);
  const [lightingState, setLightingState] = useState({});

  useEffect(() => {
    setLightingState(lightingContext.lightingState);
    // setLightingState(lightingContext.lightingState.bg_lighting === 'light' ? theme.palette.common.light_bg : theme.palette.common.dark_1);
 }, [lightingContext.lightingState]);

  return (
  
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Container maxWidth='false'
            style={{
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: lightingState,
              // border: '1px solid red'
            }}>
            <Route exact path='/'>
              <InvoiceList />
            </Route>
            <Route exact path='/invoice/:id'>
              <Invoice />
            </Route>
          </Container>          
        </Switch>
      </BrowserRouter>        
    </ThemeProvider>      
  );
}

export default App;
