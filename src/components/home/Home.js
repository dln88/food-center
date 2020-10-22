import React, { Component } from 'react';
import TopMenu from './../topMenu/TopMenu';
import Footer from './../footer/Footer';
import DirectURL2 from './../DirectURL2';

let cuser = 'cuser';
class Home extends Component {
    constructor(props) {
        super(props);
        this.currentUser={} ;
        
    }
    
    componentDidMount() {
        
    }
    
    render() {
        this.currentUser=JSON.parse(localStorage.getItem('account'))
        // console.log(this.currentUser);
        return (
            <div>
                <TopMenu currentUser={this.currentUser}></TopMenu>
                <DirectURL2></DirectURL2>
                <Footer></Footer>                
            </div>
        );
    }
}

export default Home;