import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const ProtectedRoute = props => {
  const user = useSelector(state => state.session.user)
  return (
    <Route {...props}>
      <NavBar/>
      {(user)? props.children  : <Redirect to='/login' />}
    </Route>
  )
};


export default ProtectedRoute;
