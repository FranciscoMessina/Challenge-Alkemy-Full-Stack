import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/auth', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((user) => setAuth(user.user));
  });

  if (!auth) {
    return (
      <BrowserRouter>
        <div className="pt-20">
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Login setAuth={setAuth} />;
            </Route>
            <Route path="/login" exact>
              <Login setAuth={setAuth} />;
            </Route>
            <Route path="/register" exact>
              <Register setAuth={setAuth} />;
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <div className="pt-20">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
