import React, { Component } from 'react';
import Drink from './Drink';
import Food from './Food';
import axios from 'axios';

class Main extends Component {

  constructor(props) {
    super(props);
    this.currentUser = JSON.parse(localStorage.getItem('account'));
    this.state = {
      brands: [],
      loadingBrands: 1,
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

  getSrc() {
    return axios.get('http://localhost:3000/brand');
  }

  componentDidMount() {
    this.readBrands();
  }

  render() {

    return (

      <div id="main-content" className="container">
        <div style={{ backgroundColor: '#222', padding: 20 }} className="container">
          <div id="carouselId" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carouselId" data-slide-to={0} className="active" />
              <li data-target="#carouselId" data-slide-to={1} />
              <li data-target="#carouselId" data-slide-to={2} />
              <li data-target="#carouselId" data-slide-to={3} />
              <li data-target="#carouselId" data-slide-to={4} />
            </ol>
            <div className="carousel-inner" role="listbox">
              <div className="carousel-item active">
                <img src="https://www.amthucxeo.com/upload/hinhanh/31961569_1250602895074171_5146427270893666304_n-1683.png" alt="First slide" />
                <div className="carousel-caption">
                  <h3>Dish One</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://bit.ly/2NR14Do" alt="Second slide" />
                <div className="carousel-caption">
                  <h3>Dish Two</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://bit.ly/2QoDRh3" alt="Third slide" />
                <div className="carousel-caption">
                  <h3>Dish Two</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Fourth slide" />
                <div className="carousel-caption">
                  <h3>Dish three</h3>
                  <p>We had such a great time in LA!</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Fifth slide" />
                <div className="carousel-caption">
                  <h3>Dish four</h3>
                  <p>We had such a great time in LA!</p>
                </div>              
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselId" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>

        <Drink currentUser={this.currentUser} brands={this.state.brands}></Drink>

        <Food currentUser={this.currentUser} brands={this.state.brands}></Food>

      </div>

    );
  }
}

export default Main;