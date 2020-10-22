import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import store from './../data/store.json';


class Start extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUser: ['init'],
            ktStt: "init ktStt"
        }
    }
    // renderFirst = ()=> {

    // }
    renderLoginBtn() {
        if (localStorage.account)
            return
        else return (
            <Link to="/authentication" className="col-lg-3 btn btn-outline-success btn-lg " >Log in</Link>
        )

    }

    //login fb gg    

    // test(){
    //     let arr1 = [{id:1, name:'a'},{id:2, name:'b'}];
    //     let arr2 = [];
    //     arr1.map(val => {
    //         arr2.push(Object.assign({},val));
    //     })
    //     // for (let i in arr1){
    //     //     // let temp=Object.assign({},arr1[i]);
    //     // }
    //     arr2[0].id='12345';
    //     console.log(arr1);
    //     console.log(arr2);
    // }
    render() {
        // console.log(this.state.arrUser+" type: "+typeof(this.state.arrUser));
        // console.log(this.state.arrUser[0].id+" type: "+typeof(this.state.arrUser[0].id));
        return (
            <div style={{ margin: 0 }} className="jumbotron background col-lg-12">
                <div className="container p-lg-1">
                    <div className="row ">
                        <div className="col-5 mx-auto order-md-2 <!-- pt-5 -->">
                            <img className="img-fluid pb-3 mb-md-0" src="img/logo1.png" alt="" style={{ width: '100%', height: '100%' }} />
                        </div>
                        <div className="col-md-7 order-md-1 text-center text-md-left pr-md-5">
                            <h3 id="welcome">Welcome to</h3>
                            <h1 id="brand-name" className="mb-4 text-success">WHOLE FOODS MARKET!</h1>
                            <div className="wrap-p p-2">
                                <p id="about-started">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate in cumque atque repellat illo laudantium vel nostrum perspiciatis itaque voluptates, accusantium tempora ipsa, debitis praesentium! Excepturi consequatur officia tempora nemo! Excepturi consequatur officia tempora nemo!</p>
                            </div>
                            {/* <div className="container mt-4"> */}
                            <div className="row justify-content-center mt-lg-4">
                                {/* <button type="button" className="col-lg-3 btn btn-success btn-lg mr-lg-3" onClick={()=>this.props.renderHome()}>Get started</button> */}
                                <Link to="/home" className="col-lg-3 btn btn-success btn-lg mx-lg-3">Get started</Link>
                                {this.renderLoginBtn()}
                            </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Start;