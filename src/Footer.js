import React, { Component } from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import footerLogo from './footerLogo.png';
import FontAwesome from 'react-fontawesome';
export default class Footer extends Component{
render(){
return(
<div className="footer py-5 px-5">
  <footer className="container-fluid">
    <div className="row">
      <div className="col-md-3 footerLink">
        <h5>Company</h5>
        <p><a href="#">About us</a></p>
        <p><a href="#">Team</a></p>
        <p><a href="#">Careers</a></p>
        <p><a href="#">Swiggy Blog</a></p>
      </div>
      <div className="col-md-3 footerLink">
        <h5>Contact</h5>
        <p><a href="#">Help & Support</a></p>
        <p><a href="#">Partner with us</a></p>
        {/*
        <SocialIcon url="http://twitter.com/" className="mr-3"/>
        <SocialIcon url="http://facebook.com/" className="mr-3"/>
        <SocialIcon url="http://instagram.com/" className="mr-3"/>
        */}
      </div>
      <div className="col-md-3 footerLink">
        <h5>Legal</h5>
        <p><a href="#">Terms & conditions</a></p>
        <p><a href="#">Refund & Cancellation</a></p>
        <p><a href="#">Privacy Policy</a></p>
        <p><a href="#">Offer Terms</a></p>
      </div>
      <div className="col-md-3 footerLink">
        <h5>Signup for special offers & coupons</h5>
        <form className="form-inline">
          <FormControl
            autoFocus
            type="email"
            placeholder="Enter Your Email Address"
            className="w-75 py-4 my-3 footPlaceholder"
            />
          <Button
            bsSize="large"
            bsStyle="success"
            type="submit"
            className="px-5 mb-4 w-75"
            >
          SEND ME TREATS !
          </Button>
        </form>
<div>
 
</div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src={footerLogo} alt="footerlogo"/>
      </div>
      <div className="col-md-6">
        <p className="float-right mt-5 text-white">&copy; 2018 Everibite</p>
      </div>
    </div>
  </footer>
</div>
);
}
}


