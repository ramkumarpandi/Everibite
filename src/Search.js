import React, { Component } from 'react';
import {Form, FormGroup,FormControl,Button } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import {iosLocationOutline} from 'react-icons-kit/ionicons/iosLocationOutline';

const Search = () => 
(

<div>

	<section className="container"><form className="px-5 m-5">
	<FormGroup controlId="formControlsSelect" bsSize="large" className="w-25 d-inline-block mr-5">     
      <FormControl componentClass="select" placeholder="select" className="rounded-0 border border-success">
        <option value="select">select</option>
        <option value="other">...</option>
      </FormControl>
    </FormGroup>
        <FormGroup controlId="formBasicText" bsSize="large" className="w-50 d-inline-block">          
          <FormControl
            type="search"
            value=""
            placeholder="Search for Recipes, Cusines, Restaurants .."
		className="rounded-0 border border-success"/>
        </FormGroup>
	<Button className="btn-success p-4 ml-4" bsSize="large">FIND BITES</Button>
      </form></section>

</div>

);

export default Search;
