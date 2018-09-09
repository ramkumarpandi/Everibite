import React, { Component } from 'react';
import {Form, FormGroup,FormControl,Button,ButtonToolbar,DropdownButton,MenuItem} from 'react-bootstrap';
import Icon from 'react-icons-kit';
import {iosLocationOutline} from 'react-icons-kit/ionicons/iosLocationOutline';
import loc from './loc.png';
import './Search.css';

const Search = () => 
(

<div className="searchBox">

	<section className="container formBorder">
	<form className="px-5 m-5 row">
	<div className="form-group-lg col-md-3 mr-5 pr-0 bg-white border border-success" style={{borderRadius:'3px'}}>
      <img src={loc} alt="locIcon"/>
  <select className="form-control border-0 d-inline-block" id="sel1" style={{width:'90%'}}>
    <option>--Select Area--</option>
    <option>Area1</option>
    <option>Area2</option>
    <option>Area3</option>
  </select>
</div>

        <div className="bg-white rounded col-md-8 border border-success"><FormGroup controlId="formBasicText" bsSize="large" className="w-75 d-inline-block mb-0 mt-2 pt-1">          
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
