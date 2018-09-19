import React, { Component } from "react";
import {Modal,Button,Form,FormControl,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import './EveribiteStyle.css';


export default class ProfileUpdate extends Component {
    saveChanges() { 
    alert("Your changes has been updated !!");
    }
  render() {
    return (
        <div className="static-modal"> 
        <Modal.Dialog style={{background:'#000'}}> 
            <Modal.Header> 
                <Modal.Title>ProfileUpdate</Modal.Title> 
                </Modal.Header> 
                <Modal.Body>
                <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2} className="pt-0"> Username </Col>
                   <Col sm={10}><p>Marry John</p></Col>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}> Profile Picture </Col>
                   <Col sm={10}>
                    <FormControl type="file" accept="image/png, image/jpeg"/> </Col>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2} className="pt-0"> Mobile Number</Col>
                   <Col sm={10}>  <p>+91 9493959698</p> </Col>
                </FormGroup> 
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Alternate Mobile </Col>
                   <Col sm={10}>
                    <FormControl type="tel" placeholder="Alternate Mobile Number" /> </Col>
                </FormGroup> 
                 <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2} className="pt-0"> Email </Col>
                   <Col sm={10}><p>abc@example.com</p></Col>
                </FormGroup>  
                <FormGroup controlId="formHorizontalEmail">
                  <Col componentClass={ControlLabel} sm={2}>Landline Number </Col>
                   <Col sm={10}>
                    <FormControl type="tel" placeholder="Landline Number" /> </Col>
                </FormGroup> 
                        </Form>

                </Modal.Body> 
                <Modal.Footer> 
                    <Button bsStyle="success" onClick={this.saveChanges.bind(this)}>Save changes</Button> 
                </Modal.Footer> 
                </Modal.Dialog> 
                </div>
    );
  }
}
