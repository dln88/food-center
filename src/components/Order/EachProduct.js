import React, { Component } from 'react';

class EachProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tenMon: this.props.tenmon,
            donGia: this.props.dongia,
            soLuong: 1
        }
    }

    render() {

        return (
            <div className="border-bottom border-success" style={{ width: '350px', height: '90px' }}>
                <div className="row-inline mt-2">
                    <div className="float-left">
                        <img src="http://placehold.it/75x75" alt="" />
                    </div>
                    <div className="float-left ml-2 mt-2">
                        <h5 className="text-success">{this.props.tenmon}</h5>
                    </div>
                </div>
                <div className="row float-right">
                    <div className="row-inline card-body align-center">
                        <span className="mr-2"><strong>{this.props.dongia}<span className="ml-1">đ</span></strong></span>
                        <button type="submit" className="btn btn-success"
                            onClick={(tenMon, donGia, soLuong) => {
                                this.props.add(this.state.tenMon, this.state.donGia, this.state.soLuong);
                            }}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EachProduct;