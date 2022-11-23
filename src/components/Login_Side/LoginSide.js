import React, { Component } from 'react'
import './loginside.css';

class LoginSide extends Component {
    render() {
        return (
            
                        <div className="col-xl-8 col-lg-6 col-md-5 no-padding">
                            <div className="elisyam-bg background-03">
                                <div className="elisyam-overlay overlay-08"></div>
                                <div className="authentication-col-content-2 mx-auto text-center">
                                    <div className="logo-centered">
                                        <a href="db-default.html">
                                            <img src="http://localhost:3000/assets/images/stc2.png" alt="logo" />
                                        </a>
                                    </div>
                                    <h1 className="h2">SendthatCake </h1>
                                    <span className="description">
                                        Etiam consequat urna at magna bibendum, in tempor arcu fermentum vitae mi massa egestas.
                            </span>
                                    <ul className="login-nav nav nav-tabs mt-5 justify-content-center" role="tablist" id="animate-tab">
                                        <li><a className="active" data-toggle="tab" href="#singin" role="tab" id="singin-tab" data-easein="zoomInUp">Sign In</a></li>
                                        <li><a data-toggle="tab" href="#signup" role="tab" id="signup-tab" data-easein="zoomInRight">Create Account</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                  
            
        )
    }
}

export default LoginSide;


