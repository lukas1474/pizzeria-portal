import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router';

import MainLayout from './components/layout/MainLayout/MainLayout';

//views
import Homepage from '../src/components/views/Homepage/Homepage';
import Login from '../src/components/views/Login/Login';
import Tables from '../src/components/views/Tables/Table';
import Waiter from '../src/components/views/Waiter/Waiter';
import WaiterOrder from '../src/components/views/WaiterOrder/WaiterOrder';
import WaiterOrderNew from '../src/components/views//WaiterOrderNew/WaiterOrderNew';
import Kitchen from '../src/components/views/Kitchen/Kitchen';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter basename={'/panel'}>
          <MainLayout>
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              > Pizzeria Imprimatur</a>
            </header>
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
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
