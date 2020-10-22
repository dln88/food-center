import React, { Component } from 'react';
import BrandCard from './BrandCard';
// import brand from './../data/brand.json';
import axios from 'axios';
class Food extends Component {
    constructor(props){
        super(props);
        this.state = {
            brands:[],
            limitSeen:4
        }
        this.typeOfBrandDefault='Food'
    }
    renderBtnAdd() {
        if (this.props.currentUser != null) {
            if (this.props.currentUser.role === 'admin')
                return (
                    <div className="col-lg-4 d-flex flex-column-reverse">
                        <div className="">
                            <div type="button" id="dropdownAddButton" data-toggle="dropdown"><i id="btn-add" className="fas fa-plus-circle rounded-circle" title="Thêm thương hiệu"></i></div>
                            <ul id="drd-add" className="dropdown-menu dropdown-menu-right dropdown-add-cus">
                                <li className="px-3 py-2 ">
                                    <form className="form">
                                        <div className="form-group">
                                            <input ref={(val)=>this.brandNameVal=val} id="" placeholder="Tên thương hiệu" className="form-control form-control " type="text" required />
                                        </div>
                                        <div className="form-group">
                                            <input ref={(val)=>this.linkAvtVal=val} id="" placeholder="Link ảnh đại diện" className="form-control form-control " type="text" required />
                                        </div>
                                        <div className="row">
                                            <div className="col-6 pr-1"><div className="btn btn-primary btn-block" onClick={()=>this.createNewBrand()}>Save</div></div>
                                            <div className="col-6 pl-1"><button type="submit" className="btn btn-danger btn-block">Cancel</button></div>
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
        }
    }
    createNewBrand(){
        let name = this.brandNameVal.value;
        let type = this.typeOfBrandDefault;
        let img = 'https://www.rikon.ie/wp-content/uploads/2017/10/brand-7592.jpg';
        if(this.linkAvtVal.value!=='')
            img = this.linkAvtVal.value;
        axios.post('http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/brands', {
            name: name,
            type: type,
            img: img

        })
        .then(response => {
            this.props.brands.push(response.data);
            this.setState({brands:this.props.brands});    
        })

        .catch(error => {
            console.log(error);
        });
    }
    getBrandIdToDel(id){
        // alert('deleted');
        // console.log(id);
        let index;
        this.props.brands.map((value, key)=>{
            if(value.id===id)
            index=key;
        })
        this.props.brands.splice(index,1);
        this.setState({brands: this.props.brands});
        // delete DB on server
        axios.delete(`http://5c09f56dea3172001389ce49.mockapi.io/my-location-API/brands/${id}`)
            .then(response => {

            })
    
            .catch(error => {
                console.log(error);
            }); 

        alert('Xóa thành công');
    }
    render() {
        let limit = 0;
        return (
            <div className="jumbotron pb-lg-4">
                <div className="row px-lg-2">
                    <div className="col-lg-8">
                        <h4 className="display-4 text-left"><i className="fas fa-utensils" /> Món ăn</h4>
                        <p className="lead text-left mb-0">Come and enjoy !</p>
                    </div>
                    {/* <div className="col-lg-4 d-flex flex-row-reverse"><div className="d-flex flex-column-reverse"><i id="btn-add" className="fas fa-plus-circle"></i></div></div> */}
                    {this.renderBtnAdd()}
                </div>                
                <hr className="my-3" />
                <div className="row">
                    {   
                        this.props.brands.map((value, key) => {
                            if (value.type === "Food"){
                                limit++;
                                if(limit<=this.state.limitSeen)
                                    return <BrandCard currentUser={this.props.currentUser} getBrandId={(id)=>this.getBrandIdToDel(id)} key={key} id={value.id} img={value.img} name={value.name} type={value.type} ></BrandCard>
                            }
                            return [];    
                        })
                    }
                </div>
                <hr className="my-3" />
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-offset-lg-3 px-lg-1"><button className="btn btn-sm btn-block btn-info" onClick={()=>this.setState({limitSeen:this.state.limitSeen+4})}>Xem thêm</button></div>
                    <div className="col-lg-3 px-lg-1"><button className="btn btn-sm btn-block btn-outline-info" onClick={()=>this.setState({limitSeen:4})}>Thu gọn</button></div>
                </div>
            </div>

        );
    }
}

export default Food;