import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as eventActions from './store/event'
import LoginForm from './components/auth/LoginPage/LoginForm';
import SignUpForm from './components/auth/SignupPage/SignUpForm';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import HostForm from './components/Pages/Host/Host';
import TicketPage from './components/Pages/tickets/ticket';
import EachEvent from './components/Pages/event/Event';
import { authenticate } from './store/session';
import FourOhFour from './components/auth/404/404';
import FooterBar from './components/NavBar/Footer/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  const sessionUser = useSelector(state => state.session.user)
  const events = useSelector(state => state.events_reducer?.events)
  const listed = useSelector(state => state.events_reducer?.listed)

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);

    })();
  }, []);
  
  
//   async function getContent() 
// }

useEffect( async() =>  {
  if (sessionUser) {
    await dispatch(eventActions.all_events())
  } else {
    await dispatch(eventActions.unregistered_events)
  }
//   getContent()
//   // dispatch(all_categories())
//   // dispatch(all_venues())
//   // dispatch(authenticate())
}, [sessionUser])

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
        <ProtectedRoute path='/host' exact={true} >
          <HostForm />
        </ProtectedRoute>
        <ProtectedRoute path='/tickets' exact={true} >
          <TicketPage />
        </ProtectedRoute>
        <ProtectedRoute path='/event/:eventId' exact={true} >
          <EachEvent listed={listed} />
        </ProtectedRoute>
        <Route path='/' exact={true} >
        <NavBar />
        <HomePage events={events}/>
        <FooterBar/>
        </Route>
        <FourOhFour/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
