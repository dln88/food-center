import React, { Component } from 'react';
// import brand from './../data/brand.json';
// import store from './../data/store.json';
import StoreCard from './StoreCard';
import axios from 'axios';
class BrandDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brands:[],
            stores:[]
        }
    }
    
    readBrands() {
        axios.get('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/brands')
          .then(response => {
            this.setState({ brands: response.data });
            // data.forEach(e => {
            //     console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
            // });
          })
          .catch(error => {
            console.log(error);
          });
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
        this.readBrands();
        this.readStores();
    }
    
    render() {
        return (
            <div className="container">

                <div style={{ backgroundColor: '#333', padding: '12px 20px' }} className="container">
                    {/* <div className="row"> */}

                    {
                        this.state.brands.map((value,key) => {
                            if (value.id === this.props.match.params.id) {

                                return (
                                   
                                    <div className="row pr-lg-2">
                                    
                                        <div className="col-lg-6">
                                            <img style={{ width: '100%', height: 260 }} src={value.img} alt="brand img" />
                                        </div>
                                        <div id="brand-detail-info" className="col-lg-6 border-style py-lg-2">
                                            {/* <h3 style={{ color: 'white', textShadow: '2px 2px 5px #0fe20c' }} className="display-4 text-center">{value.name}</h3> */}
                                            <h3 className="display-4 text-center">{value.name}</h3>
                                            <p style={{ color: 'white' }} className="text text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
                                        </div>
                                    </div>
                                )
                            }
                            return []
                        })
                    }

                    {/* </div> */}
                </div>
                <div className="jumbotron">
                    <h4 className="display-4 text-left"><i className="far fa-building" /> Chi nhánh </h4>
                    <select style={{ width: '30%' }} className="custom-select mt-2 mb-2 d-block">
                        <option defaultValue>Đà Nẵng</option>
                        <option value="https://getbootstrap.com">Huế</option>
                        <option value={2}>Hà Nội</option>
                        <option value={3}>TP HCM</option>
                    </select>
                    <hr className="my-2" />
                    <div className="row">
                    {   
                        this.state.stores.map((value, key) => {
                            // console.log('brandID: '+value.brand+"  brand current: "+this.props.match.params.id);
                            if (value.brandId === this.props.match.params.id)
                                return (
                                    
                                    <StoreCard key={key} id={value.id} img={value.img} name={value.name} address={value.address}></StoreCard>                                    
                                )
                            return [] ;        
                        })
                        
                    }
                    </div>
                </div>
                
                {/* <div id="googleMap" style={{width: '100%', height: 500}}>Google Map</div> */}
                <div className="mb-3">
				{/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15336.24663986998!2d108.1587864!3d16.0622898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa691cb5163d76dae!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1544368524146" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
				<iframe title="gg map" style={{width: '100%', height: 500}} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15336.24663986998!2d108.1587864!3d16.0622898!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa691cb5163d76dae!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBTxrAgUGjhuqFtIC0gxJDhuqFpIGjhu41jIMSQw6AgTuG6tW5n!5e0!3m2!1svi!2s!4v1544368524146"  frameBorder="0" allowFullScreen></iframe>

			    </div>

            </div>

        );
    }
}

export default BrandDetail;