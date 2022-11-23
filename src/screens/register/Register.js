import React, { Component } from 'react';
import InputField from '../../components/inputField/InputField';
import { connect } from 'react-redux';


class Register extends Component {
    render() {
        return (

            <div className="panel bottom-panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                    <h4 className="panel-title">
                        <a className="collapsed" role="button" data-toggle="collapse" data-parent="#login-accordion" href="#register-login-page-2" aria-expanded="false" aria-controls="register-login-page-2">
                            Register account
                </a>
                    </h4>
                </div>
                <div id="register-login-page-2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                    <div className="panel-body">

                        <div className="form-register">
                            <form action="post">

                                <div className="form-group col-md-6 no-gap-left">
                                    <InputField
                                        type={'text'}
                                        placeholder={'Email'}
                                        name={'Name'}
                                        onChange={() => this.onChange()}
                                    />
                                    <label htmlFor="name-login-1">Full Name</label>
                                </div>

                                <div className="form-group col-md-6 no-gap-right">
                                    <InputField
                                        type={'phone'}
                                        placeholder={'Phone Number'}
                                        name={'phone'}
                                        onChange={() => this.onChange()}
                                    />
                                    <label htmlFor="last-name-signup-1">Phone</label>
                                </div>

                                <div className="form-group">
                                    <InputField
                                        type={'email'}
                                        placeholder={'Email'}
                                        name={'email'}
                                        onChange={() => this.onChange()}
                                    />
                                    <label htmlFor="email-signup-1">Email</label>
                                </div>

                                <div className="form-group">
                                    <InputField
                                        type={'password'}
                                        placeholder={'Password'}
                                        name={'password'}
                                        onChange={() => this.onChange()}
                                    />
                                    <label htmlFor="pass-signup-1">Password</label>
                                </div>

                                <div className="form-group">
                                    <InputField
                                        type={'password'}
                                        placeholder={'Confirm Password'}
                                        name={'cpassword'}
                                    // onChange={() => this.onChange()}
                                    />
                                    <label htmlFor="re-pass-signup-1">Re-enter password</label>
                                </div>

                                <div className="form-group">
                                    <label className="checkbox-inline">
                                        <input type="checkbox" id="newsletter-check" value="option1" checked /> I am a Vendor
                      </label>
                                </div>

                                <input type="submit" value="Register" className="btn" />
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        )
    }
    login = (e) => {
        e.preventDefault();
        //     if(!this.ha..lolndleValidation()){
        //       return 
        //    }
        console.log("Details", this.state.email, this.state.phone);
        this.props.Register(this.state.email, this.state.phone);
    }


    onChange = (e) => {
        console.log("event", e.target)
        this.setState({ [e.target.name]: e.target.value })
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);