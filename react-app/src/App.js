import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginPage/LoginForm';
import SignUpForm from './components/auth/SignupPage/SignUpForm';
import HomePage from './components/auth//HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import HostForm from './components/Pages/Host/Host';
import TicketPage from './components/Pages/tickets/ticket';
import User from './components/User';
import { authenticate } from './store/session';
import FourOhFour from './components/auth/404/404';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        {/* <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute> */}
        <ProtectedRoute path='/host' exact={true} >
          <HostForm />
        </ProtectedRoute>
        <Route path='/' exact={true} >
        <ProtectedRoute path='/tickets' exact={true} >
          <TicketPage />
        </ProtectedRoute>
        <NavBar />
        <HomePage />
        </Route>
        <FourOhFour/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
