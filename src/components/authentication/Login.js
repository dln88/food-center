import React, { Component } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import firebaseConnect from './../Order/firebaseConnect'
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// const config = {
//     apiKey: "AIzaSyAM9TRvgWw-bR6f14K5I8B4tuuW1lHjtdQ",
//     authDomain: "testlogin-6a9c7.firebaseapp.com",
//     databaseURL: "https://testlogin-6a9c7.firebaseio.com",
//     projectId: "testlogin-6a9c7",
//     storageBucket: "testlogin-6a9c7.appspot.com",
//     messagingSenderId: "296894479323"
// };
// firebase.initializeApp(config);
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    readUsers() {
        axios.get('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/users')
            .then(response => {
                let data = response.data;
                this.setState({ users: data });
                // data.forEach(e => {
                //     console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
                // });
            })
            .catch(error => {
                console.log(error);
            });
    }
    checkUser() {
        // e.preventDefault();
        let isRight = 0;
        this.state.users.map((value) => {
            if (this.userVal.value === value.user & this.passVal.value === value.pass) {
                // let acc = {user:value.user, pass:value.pass};
                let acc = value;
                localStorage.setItem("account", JSON.stringify(acc));
                // console.log(localStorage.getItem("account"));
                alert('Đăng nhập thành công');
                window.location.assign('http://localhost:3000/home');
                isRight++;
            }
        });
        if (isRight === 0) {
            alert('Sai user hoặc mật khẩu');
        }
    }
    pressEnter(e) {
        if (e.keyCode === 13)
            this.checkUser();
    }

    //login gg
    // The component's Local state.
    state = { isSignedIn: false };// Local signed-in state.
    // Configure FirebaseUI.
    uiConfig = {
        // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        // We will display Google and Facebook as auth providers.
        signInSuccessUrl: '/signedIn',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            // Avoid redirects after sign-in.
            signInSuccessWithAuthResult: () => false
        }
    };
    // Listen to the Firebase Auth state and set the local state.
    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({ isSignedIn: !!user })
        );
        this.readUsers();
    }
    // Make sure we un-register Firebase observers when the component unmounts.
    componentWillUnmount() {
        this.unregisterAuthObserver();
    }
    sync(){
        let match = 0;
        let userSync = {};
        this.state.users.map((value,key)=>{
            if(value.loginWith==='gg'){
                if(value.email===firebase.auth().currentUser.email){
                    match++;
                    userSync=value;
                }
            }
        })
        if(match!==0){
            localStorage.setItem('account',JSON.stringify(userSync));
            window.location.assign('/home');
        }
            
        else {
            axios.post('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/users',{
                img:firebase.auth().currentUser.photoURL,
                fullName:firebase.auth().currentUser.displayName,
                user:firebase.auth().currentUser.uid,
                pass:'',
                phone:firebase.auth().currentUser.phoneNumber,
                email:firebase.auth().currentUser.email,
                role:'user',
                loginWith:'gg'
            })
            .then(res => {
                localStorage.setItem('account',JSON.stringify(res.data));
                window.location.assign('/home');
            })
            .catch(error => console.log(error))
        }    
    }
    loginWithOther() {
        if (this.state.isSignedIn) {
            // console.log(firebase.auth().currentUser.providerData);
            // if(firebase.auth().currentUser.providerData[0].uid==="100612224760723872681")
            this.sync();
            // window.location.assign('http://localhost:3000/home');
            return (
                <span>
                    {/* <button onClick={() => {firebase.auth().signOut(); localStorage.removeItem('account')}}>Sign out!</button> */}
                </span>
            )

        } else {
            return <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
        }
        // this.state.isSignedIn ? (
        //     <span>
        //         <div>Sign In!</div>
        //         <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
        //         <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
        //         <h2>Your email: {firebase.auth().currentUser.email}</h2>
        //         <img alt="profile" src={firebase.auth().currentUser.photoURL} />
        //     </span>
        // ) : (
        //         <StyledFirebaseAuth
        //             uiConfig={this.uiConfig}
        //             firebaseAuth={firebase.auth()} />
        //     )
    }
    // End login w gg
    render() {
        // console.log(localStorage.getItem('account'));
        if (localStorage.account) {
            window.location.assign('/home');
            // alert("signed in");
        }
        return (
            <div id="authentication" className="">
                <div className="d-flex justify-content-center background-aut">
                    <div className="card rounded">
                        <div className="card-header">
                            <h3 className="text-left">Sign In</h3>
                            <div id="top-icon" className="d-flex justify-content-end social_icon">
                                {/* <span><i className="fab fa-facebook-square" /></span>
                                <span><i className="fab fa-google-plus-square" /></span>
                                <span><i className="fab fa-twitter-square" /></span> */}
                                <span style={{fontFamily: '"Bungee Inline", cursive', fontSize: 34}}>WHOLE FOOD</span>

                            </div>
                        </div>
                        <div id="login-body" className="card-body mx-lg-4 pb-lg-0">
                            <form>
                                {/* username */}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user" /></span>
                                    </div>
                                    <input ref={(val) => { this.userVal = val }} type="text" className="form-control" placeholder="username" required />
                                </div>
                                {/* password */}
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-key" /></span>
                                    </div>
                                    <input ref={(val) => { this.passVal = val }} type="password" className="form-control" placeholder="password" required onKeyDown={(e) => this.pressEnter(e)} />
                                </div>
                                <div className="row align-items-center remember"><input type="checkbox" />Remember Me</div>
                                <div className="row p-lg-3">
                                    {/* <input type="submit" defaultValue="Login" className="btn float-right login_btn" /> */}
                                    <div style={{ backgroundColor: '#88e552' }} className="btn btn-block" onClick={() => this.checkUser()}>Log in</div>
                                </div>
                            </form>
                            <hr style={{ backgroundColor: 'rgb(136, 229, 82)' }} className="my-0 mx-2" />

                        </div>
                        <div className="card-footer pt-lg-0">
                            {
                                this.loginWithOther()
                                        /* {this.state.isSignedIn ? (
                                        <span>
                                            <div>Sign In!</div>
                                            <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
                                            <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
                                            <h2>Your email: {firebase.auth().currentUser.email}</h2>
                                            <img alt="profile" src={firebase.auth().currentUser.photoURL} />
                                        </span>
                                    ) : (
                                            <StyledFirebaseAuth
                                                uiConfig={this.uiConfig}
                                                firebaseAuth={firebase.auth()} />
                                        )} */}
                            <div id="sign-up" className="d-flex justify-content-center links">
                                Don't have an account?<Link to="/signup">Sign Up</Link>
                            </div>
                            <div className="d-flex justify-content-center">
                                <a href="#">Forgot your password?</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;