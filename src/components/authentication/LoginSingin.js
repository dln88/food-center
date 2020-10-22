import React, { Component } from 'react';
import './login.css';
class LoginSingin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClickSignUp:0
        }
    }
    
    render() {
        return (
            <div id="authentication" className="">
                <div className="d-flex justify-content-center background-aut">
                    <div  className="card">
                        <div className="card-header">
                            <h3 className="text-left">Sign In</h3>
                            <div id="top-icon" className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square" /></span>
                                <span><i className="fab fa-google-plus-square" /></span>
                                <span><i className="fab fa-twitter-square" /></span>
                            </div>
                        </div>
                        <div id="login-body" className="card-body">
                            <form>
                                {/* username */}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="username" />
                                </div>
                                {/* password */}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="password" />
                                </div>
                                {/* confirm password */}
                                <div id="confirm-password" className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input type="password" className="form-control" placeholder="confirm password" />
                                </div>
                                {/* gmail */}
                                <div id="gmail" className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-envelope" /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="email" />
                                </div>
                                {/* phone number */}
                                <div id="phone-number" className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-phone" /></span>
                                    </div>
                                    <input type="text" className="form-control" placeholder="phone number" />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me</div>
                                <div className="form-group">
                                    <input type="submit" defaultValue="Login" className="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div id="sign-up" className="d-flex justify-content-center links">
                                Don't have an account?<a href=""  onClick={(e)=> this.clickSignUp(e)}>Sign Up</a>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
    clickSignUp(e){
        e.preventDefault();
        if(this.state.isClickSignUp===0)
            
        alert('click Sign in');
    }
}

export default LoginSingin;