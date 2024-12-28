import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AUTHENTICATED_ENTRY } from 'configs/AppConfig';

const PublicRoute = () => {
  return <Outlet />;
};

export default PublicRoute;
