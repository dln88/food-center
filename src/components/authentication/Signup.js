import React, { Component } from 'react';
import './login.css';
import {Link} from 'react-router-dom'
import axios from 'axios'
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state={
            users:[]
        }
    }
    
    checkSignUp(){
        // this.state.users.map(val =>{
        //     // if(val.user===this.userNameVal.value | val.email===this.emailVal.value | this.passVal.value!==this.passCfVal.value)
        //     if(val.user===this.userNameVal.value)
        //     return false;

        // })
        // return true
        for(let i=0; i<this.state.users.length; i++){
            // if(this.state.users[i].user===this.userNameVal.value || this.state.users[i].email===this.emailVal.value || this.passVal!==this.passCfVal)
            if(this.state.users[i].user===this.userNameVal.value || this.state.users[i].email===this.emailVal.value || this.passVal.value!==this.passCfVal.value)    
            return false
        }
        return true
    }
    signUp(e){
        e.preventDefault();
        if(this.checkSignUp()===true){
            alert('valid');
            let user= this.userNameVal.value;
            let pass = this.passVal.value ;
            let email = this.emailVal.value;
            let phone = this.phoneVal.value;
        
            axios.post('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/users', {
                user: user,
                pass: pass,
                email: email,
                phone: phone,
                role:'user' 
            })
            .then(response => {
                window.location.assign('/login');
            })
            .catch(error => {
                console.log(error);
            });
        }else {
            alert('Unvalid');
        }

    }
    readUsers(){
        axios.get('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/users')
        .then(res=> {
            this.setState({users:res.data});
        })
        .catch(error => {
            console.log(error);
        });
    }
    componentDidMount() {
        this.readUsers();
    }
    userExist(user){
        this.state.users.map((val)=>{
            if(val.user===user) 
                return true
        })
        return false;
        // console.log(user);
    }
    render() {
        return (
            <div id="authentication" className="">
                <div className="d-flex justify-content-center background-aut">
                    <div className="card rounded">
                        <div className="card-header">
                            <h3 >Sign Up</h3>
                            {/* <div id="top-icon" className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square" /></span>
                                <span><i className="fab fa-google-plus-square" /></span>
                                <span><i className="fab fa-twitter-square" /></span>
                            </div> */}
                        </div>
                        <div id="login-body" className="card-body">
                            <form>
                                {/* username */}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                    </div>
                                    <input ref={(val)=>this.userNameVal=val} type="text" className="form-control" placeholder="username" required/>
                                    {/* <p>{()=>{if(this.userExist(this.userNameVal.value)) console.log('wrong')} }</p> */}
                                </div>
                                {/* password */}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input ref={(val)=>this.passVal=val} type="password" className="form-control" placeholder="password" required/>
                                </div>
                                {/* confirm password */}
                                <div id="confirm-password" className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input ref={(val)=>this.passCfVal=val} type="password" className="form-control" placeholder="confirm password" required/>
                                </div>
                                {/* gmail */}
                                <div id="gmail" className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-envelope" /></span>
                                    </div>
                                    <input ref={(val)=>this.emailVal=val} type="email" className="form-control" placeholder="email" required/>
                                </div>
                                {/* phone number */}
                                <div id="phone-number" className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-phone" /></span>
                                    </div>
                                    <input ref={(val)=>this.phoneVal=val} type="text" className="form-control" placeholder="phone number" />
                                </div>
                                {/* <div className="row align-items-center remember"><input type="checkbox" />Remember Me</div> */}
                                    
                                <div className="form-group">
                                    {/* <input type="submit" defaultValue="Sign in" className="btn float-right login_btn" /> */}
                                    <div id="sign-up" className="d-flex justify-content-center links">Have an account already? <Link to="/login">Login</Link></div>
                                    <button  className="btn float-right login_btn mt-lg-3" onClick={(e)=>this.signUp(e)}>Sign Up</button>
                                </div>
                            </form>
                        </div>
                        {/* <div className="card-footer">
                            <div id="sign-up" className="d-flex justify-content-center links">
                                Have an account already? <a href="/login">Login</a>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default Signup;