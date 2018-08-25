import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './MyAccount.css';
import './Footer.css';
import './NavBar.css';
import avatar from './avatar.jpeg';
import CommonFooter from './CommonFooter';
import NavBar1 from './NavBar1';
export default class MyAccount extends Component{
state={address:[{id:1,logo:'1',place:'Home',addr:'45A,EastStreet',city:'Ramanathapuram'},
{id:2,logo:'2',place:'Work',addr:'25A,West Street',city:'Sungam'},
{id:3,logo:'3',place:'Others',addr:'5A,North Street',city:'Singanallur'},
{id:4,logo:'4',place:'Others',addr:'55A,South Street',city:'Race Course'}]};
render(){
return(
<div>
  <NavBar1/>
  <div className="container">
    <p className="mt-3">Home/Coimbatore/Checkout</p>
    <div className="row mt-5">
      <div className="col-md-9 shadow p-3 mb-5 bg-white rounded">
        <div className="accountInfo p-4">
          <h4>My Account</h4>
          <div className="media">
            <img className="mr-3 rounded-circle accountLogo" src={avatar} alt="Generic placeholder image"/>
            <div className="media-body">
              <h5 className="mt-3">Marry John</h5>
              <a href="#" className="text-success">Edit Profile</a>
            </div>
          </div>
          <div>
            <Button className="btn btn-outline-success px-4 py-2 mr-3 text-success float-right">
            Change Password
            </Button>
            <p className="mt-4">Email ID <span className="ml-5 pl-5">abc@abc.com</span></p>
            <p>Mobile Number <span className="ml-5">+91-9234567800</span></p>
          </div>
        </div>
        <hr className="shadow bg-white"/>
        <div className="addr p-4">
          <h4>Your Locations</h4>
          <div className="row">
            {this.state.address.map(addLoc => (
            <div className="col-md-4 border border-success m-3" key={addLoc.id}>
              <p className="float-right">{addLoc.logo}</p>
              <p className="font-weight-bold">{addLoc.place}</p>
              <p className="ml-3">{addLoc.addr}</p>
              <p className="ml-3">{addLoc.city}</p>
            </div>
            ))}
          </div>
          <Button className=" btn btn-success px-4 py-2 mr-3 text-white float-right">
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


