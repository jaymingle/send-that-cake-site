import React from 'react'


const Landing = React.lazy(() => import('../screens/landing/Landing'));
const AuthPage = React.lazy(()=> import('../screens/authPage/AuthPage'))




const routes = [
    { path: '/', exact: true, name: 'Home', component: Landing },
    // { path: '/dashboard', name: 'VDashboard', component: VDashboard},
    { path: '/auth', name: 'Dashboard', component: AuthPage },
]
export default routes;