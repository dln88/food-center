import React, { Component } from 'react';

class DishCard extends Component {
    render() {
        return (
            <div id="dish-card" style={{ backgroundColor: 'ghostwhite' }} className="row border border-success rounded py-lg-2 mb-lg-3">
                <div className="col-lg-3">
                    <a><img style={{ width: '100%', height: 100 }} className="rounded-circle" src={this.props.img} alt="dish" /></a>
                    {/* "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRnZKqceG_00kxzD6iLWBGTfv1xx_rQgmo-ZfUQw4ubfgKbodB" */}
                </div>
                <div className="col-lg-6">
                    <p className="my-lg-2 dish-name">{this.props.name}</p>
                    <small className="bg-warning p-2 dish-state">Còn hàng</small>
                </div>
                <div className="col-lg-3 ">
                    <button className="btn btn-success btn-block my-3" onClick={() =>this.props.getDish(this.props.id)}><i style={{ color: 'white' }} className="fas fa-plus-circle" /> Thêm</button>
                    <span className="my-3">{this.props.price} <span>đ</span></span>
                </div>
            </div>
        );
    }
}

export default DishCard;