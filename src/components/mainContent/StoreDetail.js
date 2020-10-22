import React, { Component } from 'react';
import DishCard from './DishCard';
import axios from 'axios'
import Comment from './Comment';
import ImgModal from './modals/ImgModal';
import firebaseConnect from './../Order/firebaseConnect'
import firebase from 'firebase'
import EachOrdered from '../Order/EachOrdered';

// const 

class StoreDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
            comments: [],
            users: [],
            showListProduct: [],
            listOrdered: []
        }
        this.cmts = [];
        this.isReverseCmts = 0;
        this.list = [];
        this.total = 0;
    }
    readDishes = () => {
        let storeId = this.props.match.params.id;
        // console.log(typeof storeId);
        const ListProductData = firebase.database().ref(`/shop${storeId}/dishes`);
        ListProductData.on('value', (item) => {
            let arrayData = [];
            item.forEach(element => {
                const key = element.key;
                const tenMon = element.val().tenMon;
                const donGia = element.val().donGia;
                const hinhAnh = element.val().hinhAnh;
                arrayData.push({
                    key: key,
                    hinhAnh: hinhAnh,
                    tenMon: tenMon,
                    donGia: donGia
                })
            });
            this.setState({
                showListProduct: arrayData
            });
        });
    }
    getDish(id) {

        this.state.showListProduct.map((val) => {
            if (val.key === id) {
                let dish = {};
                dish.id = id;
                dish.tenMon = val.tenMon;
                dish.donGia = val.donGia;
                dish.soLuong = 1;
                dish.thanhTien = val.donGia;
                // dish=Object.assign({},val);
                this.total = this.total + val.donGia;
                this.list.push(dish);

            }
        })

        this.setState({ listOrdered: this.list });

    }
    updatePrice(id, num) {
        // console.log(id);
        this.list.forEach(val => {
            if (val.id === id) {
                val.soLuong = num;
                val.thanhTien = num * val.donGia;
            }
        });
        let temp = 0;
        this.list.map(val => { temp += val.thanhTien })
        // console.log(temp);
        this.setState({ listOrdered: this.list });
        this.total = temp;
    }
    readStores() {
        axios.get('http://5c09f56dea317200138F9ce49.mockapi.io/my-location-API/stores')
            .then(response => {
                this.setState({ stores: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    readComments() {
        axios.get('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/comments')
            .then(response => {
                this.cmts = response.data;
                this.setState({ comments: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    readUsers() {
        axios.get('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/users')
            .then(response => {
                this.setState({ users: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    getUserFullName(id) {
        let fullName = 'full name';
        this.state.users.map((user) => {
            if (user.id === id)
                fullName = user.fullName;
        })
        return fullName;
    }
    postCmt(e) {
        e.preventDefault();
        if (localStorage.account) {
            let currentUser = JSON.parse(localStorage.getItem('account'));

            let userId = currentUser.id;
            let content = this.cmtVal.value;
            let storeId = this.props.match.params.id;

            axios.post('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/comments', {
                userId: userId,
                content: content,
                storeId: storeId

            })
                .then(response => {
                    let data = response.data;
                    this.cmts.push(data);
                    this.setState({ comments: this.cmts });
                    console.log(response.data);
                    // this.cmts.reverse();

                })
                .catch(error => {
                    console.log(error);
                });

        } else {
            alert('Vui lòng đăng nhập');
        }
    }
    reverseCmt() {
        // if(this.isReverseCmts===0){
        //     this.cmts.reverse();
        //     this.isReverseCmts=1;
        // }   
        this.cmts.reverse();
    }
    delCmt(id) {
        console.log(id);
        let index;
        this.cmts.map((value, key) => {
            if (value.id === id)
                index = key;
        })
        this.cmts.splice(index, 1);

        // delete DB on server
        axios.delete(`http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/comments/${id}`)
            .then(response => {
                // alert('Xóa thành công');
            })

            .catch(error => {
                console.log(error);
            });
        this.setState({ stores: this.cmts });

    }

    postOrder(){

        if(localStorage.account){
            if(this.list.length>0){
                let storeId = this.props.match.params.id;
                let user = JSON.parse(localStorage.getItem('account')) ;
                let customer = {
                    fullName: user.fullName,
                    phone:user.phone,
                    location:''
                }
                let date = new Date();
                firebase.database().ref(`/shop${storeId}/orders`).push({
                    customer:customer,
                    listDish:this.list,
                    total:this.total,
                    date: date.toDateString()
                });
                alert('Đặt hàng thành công');
                // console.log(new Date());
            }else alert('Hãy chọn món')

        }else alert('Vui lòng đăng nhập để thực hiện chức năng');

    }
    resetListOrder(){
        
    }
    renderOptions() {
        let currentUser = JSON.parse(localStorage.getItem('account'));
        if (localStorage.account)
            if (currentUser.role === 'user' | currentUser.role === 'admin' | currentUser.role === 'owner')
                return (
                    <ul id="store-options" className="list-group mt-lg-4 shadow border border-success rounded">
                        <li className="list-group-item text-muted bg-light">Options</li>
                        <li className="list-group-item text-left list-group-item-action" data-toggle="modal" data-target="#myModal"><span className="pull-left"><strong>Images</strong></span></li>
                        <li className="list-group-item text-left list-group-item-action"><span className="pull-left"><strong>Videos</strong></span></li>
                        <li className="list-group-item text-left list-group-item-action"><span className="pull-left"><strong>Reviews</strong></span></li>
                        <li className="list-group-item text-left list-group-item-action"><span className="pull-left"><strong>Others</strong></span></li>
                        <ImgModal></ImgModal>
                    </ul>
                )
    }

    componentDidMount() {
        this.readStores();
        this.readComments();
        this.readUsers();
        this.readDishes();
    }

    render() {
        // console.log(this.state.showListProduct);
        return (
            <div className="container">
                <div style={{ backgroundColor: '#333', padding: '12px 20px' }} className="container">
                    {/* fetch store-info */}
                    {
                        this.state.stores.map((value) => {
                            if (value.id === this.props.match.params.id) {
                                return (
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <img style={{ width: '100%', height: 260 }} src={value.img} alt="Store img" />
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="card bg-light">
                                                <div className="card-header">
                                                    <h4>{value.name}</h4>
                                                </div>
                                                <div className="card-body px-3 text-left">
                                                    <p className="card-text"><i style={{ color: '#0ead2c' }} className="far fa-compass" /> {value.address}</p>
                                                    <p className="card-text">State</p>
                                                    <p className="card-text"><i style={{ color: '#0ead2c' }} className="far fa-clock" /> Working-time</p>
                                                </div>
                                                <div className="card-footer text-muted">Footer</div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-0">
                            <div className="jumbotron pb-lg-4">
                                <h1 className="display-4 text-left"><i className="far fa-list-alt" /> MENU</h1>
                                <p className="lead text-left">Choosing now!</p>
                                <hr className="my-3" />
                                {
                                    this.state.showListProduct.map((val, key) => {
                                        
                                        return <DishCard key={key} id={val.key} img={val.hinhAnh} name={val.tenMon} price={val.donGia} getDish={(key) => this.getDish(key)}></DishCard>
                                    })
                                }
                                <hr className="my-3" />
                                <div className="row justify-content-center">
                                    <div className="col-lg-3 col-offset-lg-3 px-lg-1"><button className="btn btn-sm btn-block btn-info ">Xem thêm</button></div>
                                    <div className="col-lg-3 px-lg-1"><button className="btn btn-sm btn-block btn-outline-info ">Thu gọn</button>
                                    </div>
                                </div>
                            </div>

                            <div className="jumbotron mt-0 py-lg-4">
                            <div className="form-group">
                                {/* <label className="d-block text-left justify-content-center">Your comments</label> */}
                                <textarea className="form-control" defaultValue={""} ref={(val) => this.cmtVal = val} placeholder="Share your feeling" />
                                <button className="btn btn-info my-3 " onClick={(e) => this.postCmt(e)}>Send comment</button>
                            </div>
                            {/* comment */}
                            {
                                this.cmts.reverse().map((value, key) => {
                                    if (value.storeId === this.props.match.params.id) {
                                        let userFullName = this.getUserFullName(value.userId);
                                        // this.state.users.map((user) => {
                                        //     if (user.id === value.userId)
                                        //         userFullName=user.fullName;
                                        // })
                                        return (
                                            <Comment key={key} id={value.id} userId={value.userId} userFullName={userFullName} content={value.content} storeId={value.storeId} getCmtId={(id) => this.delCmt(id)}></Comment>
                                        )
                                    }
                                })
                            }
                            {this.reverseCmt()}
                            {/* comments custom */}
                            {/* <div className="row ">
                                
                                <div className="col-lg-2"><img style={{width: 50, height: 50}} className="rounded mr-lg-3" src="https://marketplace.canva.com/MAA_Ae2e8_I/1/0/thumbnail_large/canva-handmade-logo-profile-picture-MAA_Ae2e8_I.jpg" alt="ava cmt" /></div>
                                <div className="col-lg-10">
                                   
                                    <div className="comment-content ml-lg-0 mt-lg-0" >
                                        <div className="comment-arrow"></div>
                                        <div className="comment-text">Hello !!!! holeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee this is a long comment Hello !!!! holeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee this is a long comment</div>
                                    </div> 
                                </div>
                            </div>    */}
                        </div>
                        </div>

                        <div style={{ margin: '20px 0', paddingRight: 0 }} className="col-lg-4">
                            <div className="shadow bg-light p-lg-3 border border-success rounded">
                                <p style={{ fontSize: 40, color: '#28a745', textShadow: '2px 2px 5px #0fe20c' }} className="text-center display-4">Basket</p>
                                {/* table */}
                                <table className="table border boder-success">
                                    <thead className="table-success table-bordered">
                                        <tr>
                                            <th>Stt</th>
                                            <th>Tên</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                        </tr>

                                    </thead>
                                    <tbody className="table-bordered">
                                        {
                                            this.state.listOrdered.map((val, key) => {
                                                return <EachOrdered key={key} ord={key} id={val.id} name={val.tenMon} price={val.donGia} updatePrice={(id, num) => this.updatePrice(id, num)}></EachOrdered>
                                            })
                                        }

                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th colSpan="3">Tổng</th>
                                            <th className="table-bordered text-right" >{this.total}<span className="ml-1">đ</span></th>
                                        </tr>
                                    </tfoot>
                                </table>
                                {/* table */}
                                {/* <p ><span className="title float-left">Tổng: </span><span className="float-right">0đ</span></p> */}

                                <button className="btn btn-success btn-block" onClick={()=>this.postOrder()}>Đặt món</button>
                                <button className="btn btn-outline-warning btn-block" onClick={() => { this.setState({ listOrdered: [] }); this.total = 0; this.list = [] }}>Reset</button>
                            </div>

                            {this.renderOptions()}

                        </div>
                    </div>

                    <div className="row">

                    </div>
                </div>
            </div>

        );
    }
}

export default StoreDetail;