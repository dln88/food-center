import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Main from './../components/mainContent/Main'
import BrandDetail from './../components/mainContent/BrandDetail';
import StoreDetail from './../components/mainContent/StoreDetail';
import Start from './start/Start';
import Profile from './profile/Profile';
import SearchResult from './mainContent/SearchResult';
class DirectURL2 extends Component {
    render() {
        return (
            <div>
                {/* nếu 2 path trùng nhau thì phải bỏ exact URL cha  */}
                <Route exact path="/home" component={Main} />
                <Route exact path="/home/brand/:slug.:id.html" component={BrandDetail} /> 
                <Route exact path="/home/store/:slug.:id.html" component={StoreDetail} />
                <Route exact path="/home/user/profile" component={Profile} />
                <Route exact path="/home/search" component={SearchResult}/>
            </div>
        );
    }
}

export default DirectURL2;