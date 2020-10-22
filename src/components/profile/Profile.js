import React, { Component } from 'react';
import axios from 'axios'
import firebase from 'firebase'
import OrderColapse from '../Order/OrderColapse';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOrders: []
        }
        this.currentUser = JSON.parse(localStorage.getItem('account'));
        this.avar = ''
    }

    displayAvar() {
        if (this.currentUser.img) {
            return this.currentUser.img;
        }
        return 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
    }

    updateInf(e, id) {
        e.preventDefault();
        axios.put(`https://5c09f56dea3172001389ce49.mockapi.io/my-location-API/users/${id}`, {
            fullName: this.fullNameVal.value,
            phone: this.phoneVal.value,
            birth: this.birthVal.value
        })
            .then(response => {
                this.currentUser.fullName = this.fullNameVal.value;
                this.currentUser.phone = this.phoneVal.value;
                this.currentUser.birth = this.birthVal.value;
                localStorage.setItem('account', JSON.stringify(this.currentUser));
                window.location.assign('/home/user/profile');
                alert('Updated');
                // console.log(this.fullNameVal.value);
                // console.log(this.phoneVal.value);
            })

            .catch(error => {
                console.log(error);
            });
    }

    readListOrders = () => {
        let user = JSON.parse(localStorage.getItem('account'));
        const listOrder = firebase.database().ref(`/shop${user.storeId}/orders`);
        listOrder.once('value', (item) => {
            let arrayData = [];

            item.forEach(element => {
                arrayData.push({
                    // key:element.val().getkey(),
                    customer: element.val().customer,
                    listDish: element.val().listDish,
                    date: element.val().date,
                    total: element.val().total
                });
            })
            this.setState({
                listOrders: arrayData
            });
            console.log(this.state.listOrders);
        });
    }
    renderListOrders = () => {
        if (localStorage.account) {
            let user = JSON.parse(localStorage.getItem('account'));
            if (user.hasOwnProperty('storeId')) {

                return (
                    <div id="notify" role="tabpanel" className="tab-pane fade">
                        {
                            this.state.listOrders.map((val,key) => {
                                console.log(val.listDish)
                                return <OrderColapse key={key} ctrl={`ctrl${key}`} customer={val.customer} listDish={val.listDish} total={val.total} date={val.date} ></OrderColapse>
                            })
                            
                        }
                        {/* <OrderColapse ></OrderColapse> */}
                    </div>
                )

            }
        }
    }
    componentDidMount() {
        this.readListOrders();
    }

    render() {

        // console.log(this.state.listOrders);
        if (!localStorage.account)
            window.location.assign('/home');
        if (this.currentUser.img === '')
            this.ava = 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png'
        return (
            <div>
                <div className="container my-lg-4">
                    <div className="row">
                        {/* left-col */}
                        <div className="col-lg-3 offset-lg-1">
                            <div className="text-center">
                                <img id="avatar" src={this.displayAvar()} className="avatar img-circle img-thumbnail rounded-circle" alt="avatar" />
                                <p style={{ fontSize: 'xx-large' }} className="display-4">{this.currentUser.fullName}</p>
                                <h6>Upload a different photo...</h6>
                                <input id="file-upload" type="file" className="text-center center-block file-upload" />
                            </div><br />

                            <ul className="list-group">
                                <li className="list-group-item text-muted bg-light">Profile</li>
                                <li className="list-group-item text-left"><span className="pull-left"><strong>Basic-info</strong></span></li>
                                <li className="list-group-item text-left"><span className="pull-left"><strong>Change password</strong></span></li>
                                <li className="list-group-item text-left"><span className="pull-left"><strong>Posts</strong></span></li>
                                <li className="list-group-item text-left"><span className="pull-left"><strong>Followers</strong></span></li>
                            </ul>


                        </div>
                        {/* right-col */}
                        <div className="col-lg-6 offset-lg-1" >
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#profile-form" role="tab" data-toggle="tab">profile</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#notify" role="tab" data-toggle="tab">notify</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#references" role="tab" data-toggle="tab">references</a>
                                </li>
                            </ul>


                            <div className="tab-content">
                                <hr></hr>
                                <div id="profile-form" role="tabpanel" className="tab-pane active">
                                    <form className=" form mt-lg-4">
                                        <div className="form-group">
                                            <label htmlFor="fullname" className="d-block text-left">Full Name</label>
                                            <input ref={val => this.fullNameVal = val} defaultValue={this.currentUser.fullName} type="text" className="form-control" name="fullname" />
                                        </div>
                                        <div className="form-group" >
                                            <label className="d-block text-left">User</label>
                                            <input defaultValue={this.currentUser.user} className="form-control" name="user" disabled />
                                        </div>
                                        <div className="form-group" >
                                            <label className="d-block text-left">Email</label>
                                            <input defaultValue={this.currentUser.email} type="email" className="form-control" name="email" disabled />
                                        </div>
                                        <div className="form-group" >
                                            <label className="d-block text-left">Phone</label>
                                            <input ref={val => this.phoneVal = val} defaultValue={this.currentUser.phone} type="number" className="form-control" name="phone" />
                                        </div>
                                        <div className="form-group" >
                                            <label className="d-block text-left">Birth Day</label>
                                            <input ref={val => this.birthVal = val} defaultValue={this.currentUser.birth} type="date" className="form-control" name="dob" />
                                        </div>
                                        <div className="form-group d-flex flex-row" >
                                            <button className="btn btn-success mr-2" onClick={(e) => this.updateInf(e, this.currentUser.id)}><i style={{ color: 'white' }} className="far fa-save" /> Save</button>
                                            <button className="btn btn-light"><i className="fas fa-sync-alt"></i> Reset</button>
                                        </div>
                                    </form>
                                </div>

                                {this.renderListOrders()}


                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Profile;