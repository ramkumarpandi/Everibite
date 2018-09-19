import React, { Component } from "react";
import {Modal,Button,Form,FormControl,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import './EveribiteStyle.css';


export default class ForgotPassword extends Component {
    saveChanges() { 
    alert("Password Reset link has been sent to your given mailID !!");
    }
  render() {
    return (
        <div className="static-modal"> 
        <Modal.Dialog style={{background:'#000'}}> 
            <Modal.Header> 
                <Modal.Title>Forgot Password</Modal.Title> 
                </Modal.Header> 
                <Modal.Body>
                <Form horizontal>
                 <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}> Email </Col>
                   <Col sm={10}>
                    <FormControl type="email" placeholder="Email" /> </Col>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}> Mobile </Col>
                   <Col sm={10}>
                    <FormControl type="tel" placeholder="Mobile Number" /> </Col>
                </FormGroup>
                        </Form>
                </Modal.Body> 
                <Modal.Footer> 
                    <Button bsStyle="success" onClick={this.saveChanges.bind(this)}>Save Password</Button> 
                </Modal.Footer> 
                </Modal.Dialog> 
                </div>
    );
  }
}
