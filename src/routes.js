import React from 'react'

const Home = React.lazy(() => import('./views/home/Home'))
const User = React.lazy(() => import('./views/user/User'))
const Site = React.lazy(() => import('./views/site/Site'))
const Record = React.lazy(() => import('./views/record/Record'))
const Contact = React.lazy(() => import('./views/contact/Contact'))

const routes = [
  { path: '/', exact: true, name: 'Home', element: Home },
  { path: '/user', name: 'User', element: User },
  { path: '/site', name: 'Site', element: Site },
  { path: '/record', name: 'Record', element: Record },
  { path: '/contact', name: 'Contact', element: Contact },
]

export default routes
