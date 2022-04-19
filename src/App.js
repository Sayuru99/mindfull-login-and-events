import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Events from './components/Events/Events';
import Login from './components/Login/Login';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/Events">
            <Events />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;