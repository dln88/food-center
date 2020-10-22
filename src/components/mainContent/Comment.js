import React, { Component } from 'react';

class Comment extends Component {
    constructor(props) {
        super(props);
        this.currentUser=JSON.parse(localStorage.getItem('account'));
    }
    displayAvar() {
        if(this.currentUser.img){
            
            return this.currentUser.img; 
        }else
        return 'http://ssl.gstatic.com/accounts/ui/avatar_2x.png';
    }
    renderAction(){
        if(localStorage.account){
            if(this.currentUser.role==='admin')
            return <i className="fas fa-ban d-block my-lg-2 " style={{color: '#dc3545'}} onClick={()=>this.props.getCmtId(this.props.id)}></i>
            else {
                if(this.currentUser.id===this.props.userId){
                    return <div>
                        <i className="fas fa-pencil-alt my-2 d-block" style={{color: '#007bff'}} />
                        {/* <i style={{color: '#dc3545'}} className="far fa-trash-alt my-2 d-block" /> */}
                        <i style={{color: '#dc3545'}} className="fas fa-times my-2 d-block" onClick={()=>this.props.getCmtId(this.props.id)}></i>
                    </div>
                }
            }
            
        }
    }
    render() {

        return (
            <div className="row form-group">
                <div className="col-lg-1 pr-lg-0">
                    <img style={{ width: 50, height: 50 }} className="rounded ml-0" src='http://ssl.gstatic.com/accounts/ui/avatar_2x.png' alt="ava cmt" />
                </div>
                <div className="col-lg-10 pr-0">
                    <p className="text-left comment p-lg-3 my-lg-0 "><span className="mr-lg-1 cmt-user-name">{this.props.userFullName}</span> {this.props.content}</p>
                </div>
                <div className="col-lg-1 pl-0">
                    {this.renderAction()}
                </div>
            </div>
            // <div class="row form-group">
            //     <div class="col-lg-1 ">
            //         <img class="rounded ml-0" src="https://marketplace.canva.com/MAA_Ae2e8_I/1/0/thumbnail_large/canva-handmade-logo-profile-picture-MAA_Ae2e8_I.jpg" alt="ava cmt" style="width: 50px; height: 50px;">
            //     </div>
            //     <div class="col-lg-10 pl-lg-4 pr-lg-0">
            //         <p class="text-left comment p-lg-3 my-lg-0 "><span class="mr-lg-1 cmt-user-name">fullName 3</span> </p>
            //     </div>
            //     <div class="col-lg-1 p-lg-0">
            //         <i class="far fa-edit"></i>
            //     </div>
            // </div>
        );
    }
}

export default Comment;