import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Start from './start/Start';
import Home from './home/Home';
import Login from './authentication/Login';
import Signup from './authentication/Signup';
class DirectURL extends Component {
    render() {
        return (
            <div className="">
                <Route exact path="/" component={Start} />
                <Route exact path="/start" component={Start} /> 
                <Route exact path="/authentication" component={Login} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="/home" component={Home} />
                {/* <Route exact path="/login" component={Home} /> */}
                {/* <Route exact path="/brand/detail/:slug.:id.html" component={Detail} /> */}
                
            </div>
        );
    }
}

export default DirectURL;