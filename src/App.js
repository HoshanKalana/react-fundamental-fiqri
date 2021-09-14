import React from 'react';
import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import NameList from './components/Pages/NameList/NameList';
import Home from './components/Pages/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Switch>
        <Route path="/namelist">
            <NameList/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
