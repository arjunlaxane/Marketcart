import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ ...props }) => {
  const { Component, isAdmin } = props;

  const { loading, isAuthenticated, user } = useSelector(state => state.user);

  if (loading === false && isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  if (loading === false && isAdmin === true && user.role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return (
    <Fragment>
      <Component />
    </Fragment>
  );
};

export default ProtectedRoute;
