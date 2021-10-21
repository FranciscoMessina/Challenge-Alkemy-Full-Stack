import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

axios.defaults.withCredentials = true;

function App() {
  const [operations, setOperations] = useState([]);
  const [auth, setAuth] = useState();

  const getOperations = async () => {
    const response = await axios.get('http://localhost:3000/api/operations');

    setOperations(response.data);
  };

  const checkAuth = async () => {
    const response = await axios.get('http://localhost:3000/api/login');

    setAuth(response.data.user);

    if (response.data.logged) {
      getOperations();
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (!auth) {
    return (
      <BrowserRouter>
        <div className="pt-20">
          <Navbar auth={auth} setAuth={setAuth} updateOperations={getOperations} />

          <Switch>
            <Route path="/" exact>
              <Login setAuth={setAuth} />
            </Route>
            <Route path="/login">
              <Login setAuth={setAuth} />
            </Route>
            <Route path="/register" exact>
              <Register setAuth={setAuth} />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="pt-20">
        <Navbar auth={auth} setAuth={setAuth} updateOperations={getOperations} />

        <Switch>
          <Route path="/" exact>
            <Home
              operations={operations.data}
              balance={operations.balance}
              auth={auth}
              updateOperations={getOperations}
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
