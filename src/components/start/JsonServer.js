import React, { Component } from 'react';
import axios from 'axios';
import Child from './Child';


class JsonServer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: ['init']
        }
    }

    read() {
        // axios.get('http://localhost:3000/brand')
        //     .then(response => {
        //         let data = response.data;
        //         this.setState({ brand: data });
        //         // data.forEach(e => {
        //         //     console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
        //         // });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     });
        
        var that=this;
        var promise = new Promise(function(resolve, reject) {
            var request = new XMLHttpRequest();
        
            // request.open('GET', 'http://localhost:3000/brand');
            request.open('GET', 'https://5c09f56dea3172001389ce49.mockapi.io/my-location-API/stores/2');
            request.onload = function() {
              if (request.status == 200) {
                // setTimeout(() => resolve("done!"), 5000);

                resolve(request.response); // we got data here, so resolve the Promise
                
              } else {
                reject(Error(request.statusText)); // status is not 200 OK, so reject
              }
            };
        
            request.onerror = function() {
              reject(Error('Error fetching data.')); // error occurred, reject the  Promise
            };
        
            request.send(); //send the request
        });
          console.log('Asynchronous request made.');
        
          promise.then(function(data) {
            
            console.log('Got data! Promise fulfilled.');
            // document.getElementsByTagName('body')[0].textContent = JSON.parse(data).value;
            that.setState({brand: JSON.parse(data)});
            // console.log(JSON.parse(data).value);
          }, function(error) {
            console.log('Promise rejected.');
            console.log(error.message);
          });    
    }
    add() {
        axios.post('http://localhost:3000/brand', {
            id: 9,
            first_name: 'Fred',
            last_name: 'Blair',
            email: 'freddyb34@gmail.com'
        })
            .then(response => {
                this.read();
            })

            .catch(error => {
                console.log(error);
            });

    }
    update(id) {
        axios.put(`http://localhost:3000/brand/${id}`, {
            first_name: 'Fred updated',
            last_name: 'Blair',
            email: 'freddyb34@gmail.com'
        })
            .then(response => {
                this.read();
            })

            .catch(error => {
                console.log(error);
            }); 
    }
    delete(id) {
        axios.delete(`http://localhost:3000/brand/${id}`)
            .then(response => {
                this.read();
            })

            .catch(error => {
                console.log(error);
            }); 
    }
    componentDidMount(){
        this.read();
    }
    render() {
        let arr = [
            {"id": 1},
            {"name": "AAA"}
        ]
        arr = Object.values(arr);
        console.log(this.state.brand);
        let brands =[]; brands = Object.values(this.state.brand);
        return (
            <div>
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        {/* <button type="button" className="col-lg-3 btn btn-success btn-lg mr-lg-3" onClick={()=>this.props.renderHome()}>Get started</button> */}
                        <button type="button" className="col-lg-3 btn btn-outline-success btn-lg mr-lg-2 " onClick={() => this.read()}>read</button>
                        <button type="button" className="col-lg-3 btn btn-outline-success btn-lg mr-lg-2 " onClick={() => this.add()}>add</button>
                        <button type="button" className="col-lg-3 btn btn-outline-success btn-lg mr-lg-2" onClick={() => this.update(9)}>update</button>
                        <button type="button" className="col-lg-3 btn btn-outline-success btn-lg " onClick={() => this.delete(9)}>delete</button>
                    </div>
                </div>
                <Child brands={brands}></Child>
            </div>
        );
    }
}

export default JsonServer;