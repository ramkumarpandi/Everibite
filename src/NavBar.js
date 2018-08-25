import React, { Component } from 'react';
import './NavBar.css';
import logo from './everibiteLogo.png';
import { Button, FormGroup, FormControl, ControlLabel, Modal} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./LoginForm.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class NavBar extends Component{
constructor(props, context) {
super(props, context);
this.handleShow = this.handleShow.bind(this);
this.handleClose = this.handleClose.bind(this);
this.handleShow1 = this.handleShow1.bind(this);
this.state = {
show: false,
show1:false,
show2:false,
email: "",
password: ""
};
}
handleClose() {
this.setState({ show: false , show1: false});
}
handleClose1() {
this.setState({ show2: false });
}
handleShow() {
this.setState({ show: true });
}
handleShow1() {
this.setState({ show1: true });
}
validateForm() {
return this.state.email.length > 0 && this.state.password.length > 0;
}
handleChange = event => {
this.setState({
[event.target.id]: event.target.value
});
}
handleSubmit = event => {
event.preventDefault();
}
render(){
return(

<div>
  <div>
    <div className="everibite-bar everibite-white everibite-card" id="myNavbar">
    <Link to="/"><span><img src={logo} className="" alt="logo" /></span></Link>
    <div className="everibite-right everibite-hide-small">
            <Link to="/MyAccount" className="everibite-bar-item everibite-button">MyAccountPage</Link>
	<Link to="/RegistrationProcess" className="everibite-bar-item everibite-button">RegistrationProcess</Link>
<Link to="/OrdersCopy" className="everibite-bar-item everibite-button">OrdersCopy</Link>
<Link to="/UserFeedback" className="everibite-bar-item everibite-button">UserFeedback</Link>
            <Button className="everibite-bar-item everibite-button "  onClick={this.handleShow}>
                  LOGIN
            </Button>
            <div className="everibite-right everibite-hide-small">
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>            
            </Modal.Header>
            <Modal.Body>
            <div className="everibite-top">
            <form onSubmit={this.handleSubmit}>
            <Modal.Title className="mb-5">
            <h2 className="text-success">Login</h2>
            <h4>Existing User Login With Your Account</h4>
            </Modal.Title>
            <FormGroup controlId="email" bsSize="large">
            <FormControl
            autoFocus
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Phone Number/ Email ID"
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            />
            </FormGroup>
<a href="#" className="float-right mb-4 text-success" onClick={this.handleShow1}>New User? ClickHere</a>
            <a href="#" className="float-right mb-4 text-success mr-5">Forgot Password ?</a>
		
            <Button
            bsSize="large"
            bsStyle="success"
            disabled={!this.validateForm()}
            type="submit"
            className="px-5 mb-4"
            >
            Login
            </Button>
            <Button
            block   bsSize="large"
            bsStyle="primary" className="my-3">
            SIGNIN WITH FACEBOOK</Button>
            <Button
            block   bsSize="large"
            bsStyle="default">
            SIGNIN WITH GOOGLE</Button>
            </form>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose} >Close</Button>
            </Modal.Footer>
            </Modal>
            <Button className="everibite-bar-item everibite-button" onClick={this.handleShow1}>
            REGISTER
            </Button>
            <Modal show={this.state.show1} onHide={this.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
            </Modal.Header>
              
            <Modal.Body>
            <div className="Login">
            <form onSubmit={this.handleSubmit}>
            <Modal.Title className="mb-5">
            <h2 className="text-success">New User</h2>
            <h4>Register Now ! and Create an Account</h4>
            </Modal.Title>
            <FormGroup controlId="usename" bsSize="large">

            <FormControl
            autoFocus
            type="text"
            placeholder="Name"
            value={this.state.username}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="phonenumber" bsSize="large">

            <FormControl

            type="tel"
            placeholder="Phone Number"
            value={this.state.phonenumber}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="email" bsSize="large">

            <FormControl

            type="email"
            placeholder="Email ID"
            value={this.state.email}
            onChange={this.handleChange}
            />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">

            <FormControl
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            placeholder="Password"
            />

		 <FormControl
            value={this.state.confirmpassword}
            onChange={this.confirmhandleChange}
            type="password"
            placeholder="ConfirmPassword"
            />
            </FormGroup>

            <Button
            bsStyle="success"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            className="px-5 mb-4"
            >
            Register
            </Button>
            </form>
            <h5 className="text-center mt-3">By Creating an account, <a href="#" className="text-success">I accept the Terms & Conditions</a></h5>
            </div>
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
            </Modal>
            <div className="everibite-bar-item everibite-button">
            <FontAwesomeIcon icon="shopping-bag" size="large" color="green"/>    
            </div>
      </div>
          

      </div>
    </div>
   </div> 

</div>
);
}
}
