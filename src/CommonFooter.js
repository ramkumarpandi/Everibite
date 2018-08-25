import React, { Component } from 'react';
import './Footer.css';
import { SocialIcon } from 'react-social-icons';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import footerLogo from './logo-footer.png';
export default class CommonFooter extends Component{
render(){
return(
<div className="container-fluid">
  <div className="row">
    <div className="col-md-6">
      <img src={footerLogo} alt="footerlogo"/>
    </div>
    <div className="col-md-6">
      <p className="float-right mt-5 footopacity">&copy; 2018 Everibite</p>
    </div>
  </div>
</div>
);
}
}

