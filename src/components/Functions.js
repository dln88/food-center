import React, { Component } from 'react';
import axios from 'axios'; 

export function apiLink(link) {
    if (link === 'mockapi')
        return 'http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/';
    else if (link === 'github')
        return 'https://my-json-server.typicode.com/hoangduyartist/my-location-API/';
    return 'http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/';
}
export function read(link,src) {
    link = apiLink(link);
    
    axios.get(`${link}${src}/`)
        .then(response => {
            // let data = response.data;
            // if(src==='brands')
            // class.Functions.setState({ brands: data });
            // data.forEach(e => {
            //     console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
            // });
        })
        .catch(error => {
            console.log(error);
        });
}


export function convertURL(str) {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
    // xóa phần dư - ở đầu
    str = str.replace(/^-+/g, '');
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
    // return
    return str;
}

class Functions extends Component {

    constructor(props) {
        super(props);
        this.state={
            brands:[]
        }
    }
    componentDidMount() {
      read('mockapi','brands');   
    }
    render() {
        console.log(this.state.brands);
        return (
            <div>

            </div>
        );
    }
}

export default Functions;
//main.js
    // let brandList = [] ;
    // let test = "Test";
    // brandList=this.getSrc().then(function(response) {
    //   return response.data; data is accessable from here.
    // }).catch(function(response) {
    //   console.log(response);
    // });
    // console.log(brandList);
    // for(let i=0; i<this.state.brands; i++){
    //   brandList.push(this.state.brands[i]);
    // }
    // console.log(this.state.brands);
    // brandList = this.retrieveBrand();
    // console.log(brandList);

    // let brandList = this.state.brands;
    // // brandList = Promise.resolve(brandList).then(value =>{ console.log('Brand var: ' + value); });
    // var promise1 = new Promise(function(resolve, reject) {
    //   resolve(brandList);
    // });

    // promise1.then(function(value) {
    //   console.log('brandList 1: '+value);
    //   // expected output: "Success!"
    // });