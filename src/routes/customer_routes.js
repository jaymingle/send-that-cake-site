import React from 'react'
import AdminDashboard from '../screens/Dashboard/AdminDashboard';
import About from '../screens/about/About';
import ProductPage from '../screens/productPage/ProductPage';
import VendorProducts from '../screens/vendorProducts/VendorProducts';


const Landing = React.lazy(() => import('../screens/landing/Landing'));
const AuthPage = React.lazy(()=> import('../screens/authPage/AuthPage'))




const routes = [
    { path: '/dashboard', name: 'VDashboard', component: AdminDashboard},
    { path: '/auth', name: 'Dashboard'},
    { path: '/', exact: true, name: 'Home', component: Landing },
    { path: '/ven', name: 'VProducts', component: VendorProducts },
    // { path: 'about-us', name: 'About', component: About },
    

   

]
export default routes;