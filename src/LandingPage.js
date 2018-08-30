import React, { Component } from 'react';
import NavBar1 from './NavBar1';
import Result from './Result';
import Search from './Search';

export default class LandingPage extends Component{

render(){
return(
<div>
	<NavBar1/>
	<Search/>
	<Result/>
</div>

);
}
}
