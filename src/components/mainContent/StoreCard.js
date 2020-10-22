import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {convertURL} from '../Functions';
class StoreCard extends Component {
    render() {
        return (
            <div id="store-card" className="card col-4 my-lg-1">
                <a href={"/home/store/"+convertURL(this.props.name)+"."+this.props.id+".html"}><img className="card-img-top" src={this.props.img} alt="Store-img" /></a>
                <div className="card-body">
                    <Link to={"/home/store/"+convertURL(this.props.name)+"."+this.props.id+".html"}>
                        <h4 className="card-title">{this.props.name}</h4>
                    </Link>
                    <p className="card-text">{this.props.address}</p>
                </div>
            </div>

        );
    }
}

export default StoreCard;