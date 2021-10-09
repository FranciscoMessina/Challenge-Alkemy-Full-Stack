import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { CircularProgress } from '@mui/material';

function App() {
  const [operations, setOperations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getOperations = async () => {
      const response = await fetch('http://localhost:3000/api/operations', {
        method: 'GET',
      }).then((res) => res.json());

      setOperations(response);
      setLoading(false);
    };

    getOperations();
  }, []);

  if (loading) {
    return (
      <div className="flex h-screen w-full justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="pt-20">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home operations={operations.data} balance={operations.balance} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
