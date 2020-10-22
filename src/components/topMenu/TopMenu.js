import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from 'firebase';
class TopMenu extends Component {

    logOut(e) {
        e.preventDefault();
        localStorage.removeItem('account');
        firebase.auth().signOut();
        window.location.assign('/home');
    }
    renderUser() {
        if (localStorage.account)
            return (
                <span id="menutop-welcome" className="mr-lg-0">
                    <i className="fas fa-language user-ico mx-1" title="language"></i>
                    Welcome <span id="user-fullname" className="mx-lg-2">{this.props.currentUser.fullName}</span>
                    <span className="dropdown">
                    <i id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="far fa-user user-ico" />
                    <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
                    {/* dropdown-menu-right */}
                        <a className="dropdown-item" href="/home/user/profile"><i className="fas fa-user-circle mr-1"></i> {this.props.currentUser.fullName}</a>
                        <a className="dropdown-item" href="/home/user/setting"><i className="fas fa-cogs mr-1"></i> Setting</a>
                        <a className="dropdown-item" href="" id="login" onClick={(e) => this.logOut(e)}><i className="fas fa-sign-out-alt mr-1"></i> Log out</a>
                    </div>
                    </span>

                    <i className="far fa-bell user-ico mx-1"></i>
                    <i className="fas fa-plus user-ico"></i>
                </span>
            )
        return (
            <span id="menutop-welcome" className="mr-lg-0">
                <i className="fas fa-language user-ico mx-1" title="language" />
                Welcome <span id="user-fullname" className="mx-lg-2">Guest !</span>
                
                <span className="dropdown">
                <i id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="far fa-user user-ico" />
                    <div className="dropdown-menu mt-2" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="/authentication" id="login"><i className="fas fa-sign-in-alt"></i> Log in</a>
                    </div>
                </span>    
                <i className="far fa-bell user-ico mx-1" />
                <i className="fas fa-plus user-ico" />
                {/* <button onClick={() => firebase.auth().signOut()}>log out gg</button> */}
            </span>
        )
    }
    search(e){
        e.preventDefault();
        localStorage.setItem('searchText',this.searchText.value);
        window.location.assign('/home/search');
    }
    render() {

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
                <div className="container">
                    <Link to="/home" className="navbar-brand" ><img style={{ height: 50, width: 55 }} src="https://bit.ly/2E2gXGo" alt="brand logo" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        </ul>

                            {/* <option value="https://getbootstrap.com">Huế</option> */}

                        <select style={{ width: '20%' }} className="custom-select">
                            <option defaultValue>Ẩm thực</option>
                            <option value={1}>Du lịch</option>
                            <option value={2}>Hotel/Home stay</option>
                            <option value={3}>Khác</option>
                        </select>
                        <form style={{ width: '30%' }} className="row form my-lg-2 mx-auto">
                            <div className="col-12 btn-group">
                            <input ref={(val) =>this.searchText=val} id="search" className="form-control rounded-2 mr-2" type="search" placeholder="Search..." aria-label="Search" />
                            <button  className="btn btn-outline my-2 my-sm-0" type="submit" onClick={(e)=>this.search(e)}><i className="fas fa-search" /></button>
                            </div>
                        </form>
                        {/* <span className="mr-lg-0"><i className="far fa-user" /> Welcome Guest! <a href="/authentication" id="login" role="button" data-toggle="modal" data-target="#modal-login">Log in</a></span> */}
                        {this.renderUser()}
                    </div>
                </div>
            </nav>


        );
    }
}

export default TopMenu;