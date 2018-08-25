import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import './UserFeedback.css';
import CommonFooter from './CommonFooter';
import NavBar1 from './NavBar1';
import './NavBar.css';
import './Footer.css';
import biriyani from './biriyani.png';
export default class UserFeedback extends Component{
render(){
return(
<div>
  <NavBar1/>
  <div className="container">
    <Media>
    <Media.Left>
      <img width={100} height={100} src={biriyani} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading><span className="float-right everibite-vegIcon text-danger">&#8865;</span><h4>Hyderabad Chiken Biriyani With Raita</h4><h5>South Indian Biriyani</h5></Media.Heading>
      <p>
       
      </p>
    </Media.Body>
  </Media>
<div className="bg-white">
<Media>
    <Media.Left>
      <img width={100} height={100} src={biriyani} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading><span className="float-right everibite-vegIcon text-danger">&#8865;</span><h4>Hyderabad Chiken Biriyani With Raita</h4><h5>South Indian Biriyani</h5></Media.Heading>
      <p>
       
      </p>
    </Media.Body>
  </Media>
</div>
  <CommonFooter/>
</div>
</div>
);
}
}


