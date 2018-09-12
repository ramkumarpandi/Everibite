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
	<div className="form-group-lg col-md-3 mr-5 px-0 selectBox">
      <img src={loc} alt="locIcon" className="pb-2"/>
  <select className="form-control border-0 d-inline-block p-0" id="sel1" style={{width:'225px'}}>
    <option><span className="capital">Bengaluru, </span>
    <span className="state">Karnataka</span>
    </option>
    <option><span className="capital">Chennai, </span>
    <span className="state">TamilNadu</span>
    </option>
    <option><span className="capital">Thiruvanthapuram, </span>
    <span className="state">Kerala</span>
    </option>
    <option><span className="capital">Hyderabad, </span>
    <span className="state">AndhraPradesh</span>
    </option>
  </select>
</div>

        <div className="bg-white rounded col-md-8 border border-success"><FormGroup controlId="formBasicText" bsSize="large" className="w-75 d-inline-block mb-0 mt-2 pt-1">          
          <FormControl
            type="search"
            value=""
            placeholder="Search for Recipes, Cusines, Restaurants .."
		className="border-0"/>
</FormGroup><Button className="btn-success p-3 float-right my-3" bsSize="large">FIND BITES</Button></div>
      </form>
      </section>

</div>

);

export default Search;
