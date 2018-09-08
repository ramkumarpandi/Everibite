import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './MyAccount.css';
import './Footer.css';
import './NavBar.css';
import avatar from './avatar.jpeg';
import CommonFooter from './CommonFooter';
import NavBar1 from './NavBar1';
import Icon from 'react-icons-kit';
import {home} from 'react-icons-kit/icomoon/home';
import {office} from 'react-icons-kit/icomoon/office';
export default class MyAccount extends Component{
state={address:[{id:1,logo:'glyphicon glyphicon-ok-circle',place:'Home',addr:'45A,EastStreet',city:'Ramanathapuram'},
{id:2,logo:'glyphicon glyphicon-ok-circle',place:'Work',addr:'25A,West Street',city:'Sungam'},
{id:3,logo:'glyphicon glyphicon-ok-circle',place:'Others',addr:'5A,North Street',city:'Singanallur'},
{id:4,logo:'glyphicon glyphicon-ok-circle',place:'Others',addr:'55A,South Street',city:'Race Course'}]};
render(){
return(
<div>
  <NavBar1/>
  <div className="container">
    <p className="mt-3">Home/Coimbatore/Checkout</p>
    <div className="row mt-5">
      <div className="col-md-9 shadow p-3 mb-5 bg-white rounded">
        <div className="accountInfo p-4">
          <h4 style={{fontFamily:"'Viga',sans-serif",color:'#666'}}>My Account</h4>
          <div className="media">
            <img className="mr-3 rounded-circle accountLogo" src={avatar} alt="Generic placeholder image"/>
            <div className="media-body">
              <h5 className="mt-3" style={{fontFamily:"'Roboto',sans-serif",fontWeight:'400',color:'#666'}}>Marry John</h5>
              <a href="#" style={{fontFamily:"'Roboto',sans-serif",fontWeight:'500',color:'#008700',textTransform:'uppercase'}}>Edit Profile</a>
            </div>
          </div>
          <div>
            <Button className="btn px-4 py-2 mr-3 float-right" style={{fontFamily:"'Viga',sans-serif",color:'#3d9020',borderColor:'#008700',background:'#fff'}}>
            Change Password
            </Button>
            <p className="mt-4" style={{fontFamily:"'Robot',sans-serif",fontWeight:'400',color:'#666'}}>Email ID <span className="ml-5 pl-5" style={{fontWeight:'500'}}>abc@abc.com</span></p>
            <p style={{fontFamily:"'Robot',sans-serif",fontWeight:'400',color:'#666'}}>Mobile Number <span className="ml-5" style={{fontWeight:'500'}}>+91-9234567800</span></p>
          </div>
        </div>
        <hr className="shadow bg-white"/>
        <div className="addr p-4">
          <h4 style={{fontFamily:"'Viga',sans-serif",color:'#666'}}>Your Locations</h4>
          <div className="row">
            {this.state.address.map(addLoc => (
            <div className="col-md-4 m-3 border" style={{borderColor:'#cdcccd'}} key={addLoc.id}>
              <p className="float-right mt-2" ><span className={addLoc.logo}></span></p>
              <p style={{fontFamily:"'Roboto',sans-serif",fontWeight:'500',color:'#666'}}>{addLoc.place}</p>
              <p className="ml-3" style={{fontFamily:"'Roboto',sans-serif",fontWeight:'400',color:'#666'}}>{addLoc.addr}</p>
              <p className="ml-3" style={{fontFamily:"'Roboto',sans-serif",fontWeight:'400',color:'#666'}}>{addLoc.city}</p>
            </div>
            ))}
          </div>
          <Button className="btn btn-success px-4 py-2 mr-3 text-white float-right">
          Add New
          </Button>
        </div>
      </div>
    </div>
  </div>
  <CommonFooter/>
</div>
);
}
}


