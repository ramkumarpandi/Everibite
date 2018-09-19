import React, { Component } from "react";
import {ButtonToolbar,DropdownButton,MenuItem,Modal,Button,Form,FormControl,FormGroup,Col,ControlLabel} from 'react-bootstrap';
import './EveribiteStyle.css';
export default class NewAddress extends Component {
saveChanges(e) { 
    e.preventDefault();
}
render() {
return (
<div className="newaddress">
  <Modal.Dialog style={{background:'#000'}}>
    <Modal.Header>
      <Modal.Title>Add New Address</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
          Place </Col>
          <Col sm={10}>
          <ButtonToolbar>
            <DropdownButton
              bsStyle="default"
              title="-- Select Place --"
              noCaret
              id="dropdown-no-caret"
              >
              <MenuItem eventKey="1">Home</MenuItem>
              <MenuItem eventKey="2">work</MenuItem>
              <MenuItem eventKey="3">Others</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
          House/Flat No. </Col>
          <Col sm={10}>
          <FormControl type="text" placeholder="House/Flat No." />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
          Address1 </Col>
          <Col sm={10}>
          <FormControl type="text" placeholder="Address1" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
          Address2 </Col>
          <Col sm={10}>
          <FormControl type="text" placeholder="Address2" />
          </Col>
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
          Landmark </Col> 
          <Col sm={10}>
          <FormControl type="text" placeholder="Landmark" />
          </Col> 
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
          City </Col> 
          <Col sm={10}>
          <FormControl type="text" placeholder="City" />
          </Col> 
        </FormGroup>
        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
          ZipCode </Col> 
          <Col sm={10}>
          <FormControl type="text" placeholder="Zipcode" />
          </Col> 
        </FormGroup>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
          State </Col>
          <Col sm={10}>
          <ButtonToolbar>
            <DropdownButton
              bsStyle="default"
              title="-- Select State --"
              noCaret
              id="dropdown-no-caret"
              >
              <MenuItem eventKey="1">AndhraPradesh</MenuItem>
              <MenuItem eventKey="2">Karnataka</MenuItem>
              <MenuItem eventKey="3">Kerala</MenuItem>
              <MenuItem eventKey="4">Tamilnadu</MenuItem>
            </DropdownButton>
          </ButtonToolbar>
          </Col>
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