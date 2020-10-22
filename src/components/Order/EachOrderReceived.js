import React, { Component } from 'react';

class EachOrderReceived extends Component {
    render() {
        return (
            <tr>
            <td>{this.props.ord+1}</td>
            <td className="text-left">{this.props.name}</td>
            <td className="text-center">{this.props.soLuong}</td>
            <td className="text-right">{this.props.thanhTien}</td>
        </tr>
        );
    }
}

export default EachOrderReceived;