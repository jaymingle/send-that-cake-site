import React from 'react'
import AdminDashboard from '../screens/Dashboard/AdminDashboard';
import About from '../screens/about/About';


const Landing = React.lazy(() => import('../screens/landing/Landing'));
const AuthPage = React.lazy(()=> import('../screens/authPage/AuthPage'))




const routes = [
    { path: '/', exact: true, name: 'Home', component: Landing },
    { path: '/dashboard', name: 'Dashboard', component: AdminDashboard},
    { path: '/auth', name: 'Dashboard'},
    // { path: 'about-us', name: 'About', component: About },

]
export default routes;