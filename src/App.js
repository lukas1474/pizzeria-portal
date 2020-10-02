import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import MainLayout from './components/layout/MainLayout/MainLayout';

//views
import Homepage from '../src/components/views/Homepage/Homepage';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Table';
import Waiter from '../src/components/views/Waiter/Waiter';
import WaiterOrder from '../src/components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from '../src/components/views//WaiterOrderNew/WaiterOrderNew';
import Kitchen from '../src/components/views/Kitchen/Kitchen';


const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    // secondary: {main: '#11cb5f'},
  },
});



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={'/panel'}>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <MainLayout>
                <Switch>
                  <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
                  <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                  <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={WaiterOrderNew} />
                  <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={WaiterOrder} />
                  <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
                </Switch>
              </MainLayout>
            </ThemeProvider>
          </StylesProvider>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
