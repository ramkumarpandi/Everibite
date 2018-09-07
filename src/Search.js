import React, { Component } from 'react';
import {Form, FormGroup,FormControl,Button,ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import {iosLocationOutline} from 'react-icons-kit/ionicons/iosLocationOutline';

const Search = () => 
(

<div>

	<section className="container formBorder">
	<form className="px-5 m-5 row">
	<FormGroup controlId="formControlsSelect" bsSize="large" className="col-md-4 mb-0">     
      <FormControl componentClass="select" placeholder="select" className="border-0 h-100">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>

        <div className="bg-white rounded col-md-8"><FormGroup controlId="formBasicText" bsSize="large" className="w-75 d-inline-block mb-0 mt-2 pt-1">          
          <FormControl
            type="search"
            value=""
            placeholder="Search for Recipes, Cusines, Restaurants .."
		className="border-0"/>
</FormGroup><Button className="btn-success p-3 float-right my-3" bsSize="large">FIND BITES</Button></div>
      </form></section>

</div>

);

export default Search;
