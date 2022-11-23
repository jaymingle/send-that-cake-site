import React, { Component } from 'react';
import InputField from '../../components/inputField/InputField';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAsync } from "../../actions/loginActions";

class Login extends Component {
    render() {
        return (

            <div className="panel-group" id="login-accordion" role="tablist" aria-multiselectable="true">
                <div className="panel top-panel panel-default">
                    <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                            <a role="button" data-toggle="collapse" data-parent="#login-accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne" className="">
                                Login to your account
        </a>
                        </h4>
                    </div>
                    <div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne" aria-expanded="true">
                        <div className="panel-body">

                            <div className="form-login">
                                <form action="post">

                                    <div className="form-group">
                                        <InputField
                                            type={'email'}
                                            placeholder={'Email'}
                                            name={'username'}
                                            onChange={this.onChange}
                                        />
                                        <label htmlFor="username-login-1">Username</label>
                                    </div>

                                    <div className="form-group">
                                        <InputField
                                            type={'password'}
                                            placeholder={'Password'}
                                            name={'password'}
                                            onChange={this.onChange}
                                        />
                                        <label htmlFor="pass-login-1">Password</label>
                                        <span className="pull-right"><a href="#" className="forget-pass-link">Forget password?</a></span>
                                    </div>

                                    <a onClick={this.login} className="btn btn-lg btn-gradient-01 text-white">
                                        Sign In
                                    </a>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )

    }
    login = (e) => {
        e.preventDefault();
        //     if(!this.handleValidation()){
        //       return 
        //    }
        console.log("Details", this.state.username, this.state.password);
        this.props.login(this.state.username, this.state.password);
    }


    onChange = (e) => {
        console.log("event", e.target)
        this.setState({ [e.target.name]: e.target.value })
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => dispatch(loginAsync(username, password)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);





