import React, { Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import NavBar1 from './NavBar1';
import Search from './Search';
import CommonFooter from './CommonFooter';
import DisplayRestaurant from './DisplayRestaurant';

export default class RestaurantPage extends Component{

render(){
return(
<div>
	<NavBar1/>
	<Search/>
	<DisplayRestaurant/>

<CommonFooter/>
</div>

);
}
}
