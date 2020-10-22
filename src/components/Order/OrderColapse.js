import React, { Component } from 'react';
import EachOrdered from './EachOrdered';
import EachOrderReceived from './EachOrderReceived';

class OrderColapse extends Component {
    render() {
        return (
            <div className="mb-lg-2">

                <p className="text-left">
                    {/* <a className="btn btn-primary" data-toggle="collapse" href={`#${this.props.key}`} role="button" aria-expanded="false" aria-controls={`${this.props.key}`} >Link with href</a> */}
                    <button className="btn btn-outline-success dropdown-toggle" data-toggle="collapse" data-target={`#${this.props.ctrl}`} aria-expanded="false" aria-controls={`${this.props.ctrl}`}>Thông tin đơn hàng</button>
                    <span className="ml-lg-4 text-muted">{this.props.date}</span>
                </p>
                <div className="collapse" id={`${this.props.ctrl}`}>
                    <div className="card card-body">
                        <div className="row">
                            <div className=" col-lg-5 pl-lg-0">
                                <dl className="card card-body">
                                    <dt>Tên khách hàng</dt>
                                    <dd>{this.props.customer.fullName}</dd>
                                    <dt>Số điện thoại</dt>
                                    <dd>{this.props.customer.phone}</dd>
                                    <dt>Địa chỉ</dt>
                                    <dd>{this.props.customer.location}</dd>
                                </dl>
                            </div>
                            <div className="card card-body col-lg-7 px-lg-2">
                            <table className="table border boder-success ">
                                <thead className="table-success table-bordered">
                                    <tr>
                                        <th>Stt</th>
                                        <th>Tên</th>
                                        <th>Số lượng</th>
                                        <th>Thành tiền</th>
                                    </tr>

                                </thead>
                                <tbody className="table-bordered">
                                    {
                                        this.props.listDish.map((val, key) => {
                                            return <EachOrderReceived key={key} ord={key} id={val.id} name={val.tenMon} soLuong={val.soLuong} thanhTien={val.thanhTien}></EachOrderReceived>
                                        })
                                        
                                    }

                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan="3">Tổng</th>
                                        <th className="table-bordered text-right" >{this.props.total}<span className="ml-1">đ</span></th>
                                    </tr>
                                </tfoot>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <p>
                        
                        <button className="btn btn-primary" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button with data-target</button>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body row">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div> */}


            </div>
        );
    }
}

export default OrderColapse;