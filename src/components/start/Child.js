import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state={
            brandList:[]
        }
    }
    // cpndidmount xong moi nhan props
    componentDidMount() {
        this.setState({brandList:this.props.brands});
        console.log(this.props.brands);
    }
    
    render() {
        // let data = JSON.parse(this.props.brands);
        console.log('child.js - data: ');
        console.log(this.props.stores);
        return (
            <div>
                {/* {()=>this.props.brands()} */}
            </div>
        );
    }
}

export default Child;