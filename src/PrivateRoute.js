import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)

  return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoute
