import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {convertURL} from '../Functions';
class BrandCard extends Component {
    renderBtnEditDel(){
        if(this.props.currentUser!=null)
            if(this.props.currentUser.role==='admin')
                return (
                    <div className="row mx-0">
                        <div className="col-6 pr-1"><div className="btn btn-block btn-sm btn-outline-primary"><i className="far fa-edit" style={{color: '#007bff'}} /> Edit</div></div>
                        <div className="col-6 pl-1"><button className="btn btn-block btn-sm btn-outline-danger" onClick={()=>this.props.getBrandId(this.props.id)}><i style={{color: '#dc3545'}} className="far fa-trash-alt" /> Delete</button></div>
                    </div>
                )
    }
    render() {
        return (
            // <div style={{padding: '0 2px'}} classname="col-lg-3 ">
            <div className="col-lg-3 px-lg-1 mb-lg-1">
            <div id="brand-card" className="card card-home px-lg-1 mb-lg-1">
                <a href={"/home/brand/"+ convertURL(this.props.name)+"."+this.props.id+".html"} target="blank"><img className="card-img-top" src={this.props.img} alt="" /></a>
                <div className="card-body">
                    <Link to={"/home/brand/"+ convertURL(this.props.name)+"."+this.props.id+".html"}>
                        <h4 className="card-title">{this.props.name}</h4>
                    </Link>
                    <p className="card-text">{this.props.type}</p>
                    {this.renderBtnEditDel()}
               </div>
            </div>
            </div>
        );
    }
}

export default BrandCard;