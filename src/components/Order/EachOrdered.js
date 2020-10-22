import React, { Component } from 'react';

class EachOrdered extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceSum: this.props.price
        }
    }

    sum = () => {
        let temp = this.props.price * parseInt(this.num.value);
        this.props.updatePrice(this.props.id,this.num.value);
        this.setState({
            priceSum: temp
        });
    }

    delItem = (idItem) => {
        this.props.deleteButton(idItem);
    }

    render() {
        // console.log(this.props.ord);
        return (
            <tr>
                <td>{this.props.ord+1}</td>
                <td className="text-left">{this.props.name}</td>
                <td className="text-left"><input ref={(val) => this.num = val}
                    onChange={() => this.sum()}
                    style={{ width: '100%' }} type="number" defaultValue={1} className="form-control text-center bg-light" /></td>
                <td className="text-right">{this.state.priceSum}</td>
                {/* <td className="text-right">{this.tongTien()}<span className="ml-1">đ</span></td> */}
                {/* <td>
                    <button
                        type="submit" className="btn btn-outline-danger btn-block"
                        onClick={(idItem) => this.delItem(this.props.stt)}>Xóa</button>
                </td> */}
            </tr>
        );
    }
}

export default EachOrdered;