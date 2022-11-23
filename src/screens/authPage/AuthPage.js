import React, { Component } from 'react';
import Login from '../login/Login';
import Register from '../register/Register';
import FrontNav from '../../containers/DefaultLayout/FrontNav';
// import LoginSide from '../../components/Login_Side/LoginSide';


class AuthPage extends Component {
    render() {
        return (
            <div>
            <FrontNav/>
            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <Login/>
                    <Register/>
                </div>
              </div>
              </div>
        )
    }
}

export default AuthPage;