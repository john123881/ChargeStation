import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
{
  /* <Navigate to="/login" /> */
}
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? children : children
}

export default PrivateRoute
