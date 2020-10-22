import React, { Component } from 'react';
import Child from './Child';
import axios from 'axios';
import toancuc from './../../App'
class Father extends Component {
    constructor(props) {
        super(props);
        // this.read=this.read.bind(this);
        // this.load = this.load.bind(this);
        this.state = {
            brands: ["init"],
            stores:[],
            isLoad: false
        };
        
    }
    load() {
        this.setState({isLoad:true});
    }
    read() {
        axios.get('https://my-json-server.typicode.com/hoangduyartist/my-location-API/stores/')
            .then(response => {
                let data = response.data;
                this.setState({ stores: data, brands:data });
                // data.forEach(e => {
                //     console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
                // });
            })
            .catch(error => {
                console.log(error);
            });
        // this.setState({isLoad: true});
        // var that=this;
        // var promise = new Promise(function(resolve, reject) {
        //     var request = new XMLHttpRequest();
        
        //     request.open('GET', 'http://localhost:3000/brand');
        //     request.onload = function() {
        //       if (request.status == 200) {
        //         // setTimeout(() => resolve("done!"), 5000);

        //         resolve(request.response); // we got data here, so resolve the Promise
                
        //       } else {
        //         reject(Error(request.statusText)); // status is not 200 OK, so reject
        //       }
        //     };
        
        //     request.onerror = function() {
        //       reject(Error('Error fetching data.')); // error occurred, reject the  Promise
        //     };
        
        //     request.send(); //send the request
        // });
        //   console.log('Asynchronous request made.');
        
        //   promise.then(function(data) {
            
        //     // console.log('Got data! Promise fulfilled.'+data);
        //     // document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value;
        //     that.setState({brands: data});
        //     // console.log(JSON.parse(data).value);
        //   }, function(error) {
        //     console.log('Promise rejected.');
        //     console.log(error.message);
        //   });
                  
    }

    componentDidMount() {
        // this.read();
    }
    
    render() {
        // console.log(this.state.stores);
        // let brandR = this.state.brands;
        console.log(toancuc);
        return (
            <div className="container bg-light">
                <div className="row py-lg-3">
                    <button type="button" className="btn btn-info mx-lg-2">read</button>
                    <button type="button" className="btn btn-success mx-lg-2">add</button>
                    <button type="button" className="btn btn-primary mx-lg-2">update</button>
                    <button type="button" className="btn btn-danger mx-lg-2">delete</button>
                </div>
                <Child brands={this.state.brands} stores={this.state.stores}></Child>
                {/* <Child brands={JSON.stringify(this.state.brands)}></Child> */}
            </div>
        );
    }

    // show(arr) {
    //     let result  = null;
    //     if(arr.length > 0){
    //         // result = arr.map((value)=>{return value});
    //         // result = arr.map((value)=>{return (<div>{value.name}</div>)})
    //     }
    //     return result;
    // }
}

export default Father;