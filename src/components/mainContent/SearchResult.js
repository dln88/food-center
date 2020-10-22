import React, { Component } from 'react';
import axios from 'axios';
import StoreCard from './StoreCard';
class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: []
        }
        this.currentUser = JSON.parse(localStorage.getItem('account'));
        this.searchText = localStorage.getItem('searchText');
    }

    readStores() {
        axios.get('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/stores')
            .then(response => {
                this.setState({ stores: response.data });
            })
            .catch(error => {
                console.log(error);
            });
    }
    componentDidMount() {
        this.readStores();
    }

    render() {
        // console.log(this.state.stores);
        return (
            <div className="container">
            <div className="jumbotron pb-lg-4">

                <div className="row px-lg-2">
                    <div className="col-lg-8">
                        <h4 className="display-4 text-left"><i className="fab fa-searchengin"></i> Result for: <span>"{this.searchText}"</span></h4>
                        <p className="lead text-left mb-0">Come and enjoy !</p>
                    </div>
                </div>
                <hr className="my-3" />
                <div className="row">
                    {
                        
                        this.state.stores.map((value, key) => {

                            if (value.name.match(this.searchText)) {
                            //     // this.typeOfBrandDefault=value.type;
                            //     limit++;
                            //     if (limit <= this.state.limitSeen) {
                                    // return <StoreCard currentUser={this.props.currentUser} getBrandId={(id) => this.getBrandIdToDel(id)} key={key} brands={this.props.brands} id={value.id} img={value.img} name={value.name} type={value.type} ></StoreCard>
                            //     }
                                // console.log(value);
                                return <StoreCard key={key} id={value.id} img={value.img} name={value.name} address={value.address}></StoreCard>
                            }
                            return [];
                        })
                    } 
                </div>
                <hr className="my-3" />

            </div>
            </div>
        );
    }
}

export default SearchResult;