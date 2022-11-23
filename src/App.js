import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AuthPage from "./screens/authPage/AuthPage";
import Landing from "./screens/landing/Landing";
import ProductCard from "./components/product_card/ProductCard";
// import AdminDashboard from './screens/Dashboard/AdminDashboard';
import DefaultLayout from "./containers/DefaultLayout/DefaultLayout";
import About from "./screens/about/About";
import VendorPage from "./screens/vendors/VendorPage";
import Checkout from "./screens/checkout/Checkout";
import Blog from "./screens/blog/Blog";
import CakeStore from "./screens/cakeStore/CakeStore";
import Contact from "./screens/contact/Contact";
import ProductPage from "./screens/productPage/ProductPage";
import VendorProducts from "./screens/vendorProducts/VendorProducts";
import CheckoutSuccess from "./screens/checkout/CheckoutSuccess";
import CheckoutFail from "./screens/checkout/CheckoutFail";
import Privacy from "./screens/privacyPolicy/Privacy";
import Terms from "./screens/termsConditions/Terms";
import FAQ from "./screens/faqs/FAQ";
import { Offline, Online } from "react-detect-offline";
import { jwtValidator, logout } from "./actions/loginActions";


function App() {
    const token = useSelector(store => store.login?.user?.token)
    const dispatch = useDispatch()
    let timer;

    useEffect(()=>{
        timer = setInterval(()=>{
            if(token){
              const valid = jwtValidator(token)
              console.log("TokenValid", valid)
                if(!valid){
                    // sweet alert to show logout message
                    dispatch(logout())
                }
            }
        },1000*60)



        return ()=>{clearInterval(timer)}
    })
    return (
        <Router>
            <div>
            <div className="btn-danger text-center"><Offline>Seems you're offline! Some features might not be availabe to you. Please connect to a stronger internet access and reload the page</Offline></div>
            {/* <div className="btn-success"><Online>Your're online</Online></div> */}
                <Switch>
                    {/* <Route path='*' component={Landing} />   */}
                    <Route exact path="/" component={Landing} />
                    {/* <Route path="/auth" component={AuthPage} /> */}
                    {/* <Route path="/auth" render={() => (window.location = "http://sendthatcake.test/dashboard/auth")} /> */}
                    <Route path="/dashboard" component={DefaultLayout} />
                    {/* that shd probably be DefaultLayoutt.. */}
                    {/* <Route path="/product" component={ProductCard} /> */}
                    <Route path="/about-us" component={About} />
                    <Route path="/vendors" component={VendorPage} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/cake-store" component={CakeStore} />
                    <Route path="/checkout" component={Checkout} />
                    <Route path="/product/:id" component={ProductPage} />
                    <Route path="/products/:id" component={ProductPage} />
                    <Route path="/productcard1" component={ProductCard} />
                    {/* <Route path="/products/:id" component={VendorProducts} /> */}
                    <Route path="/vendor/:id" component={VendorProducts} />
                    
                    <Route path="/pay-success" component={CheckoutSuccess} />
                    <Route path="/pay-failed" component={CheckoutFail} />
                    <Route path="/privacy-policy" component={Privacy} />
                    <Route path="/terms" component={Terms} />
                    <Route path="/faqs" component={FAQ} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
