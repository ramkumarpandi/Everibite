import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import './NavBar.css';
import './EveribiteStyle.css';
import OTP from './OTP';
import img1 from './images/confirm.png';
import img3 from './images/mail.png';

export default class RegistrationProcess extends Component{
state={
	showRes:'false'
};
verify(){
	this.setState({showRes:'true'})
}
render(){
return(
<div>
<NavBar/>
<div className="container Registration">
	<div className="text-center watermark">
		<img src={img1} alt="confirmImg"/>
		<h1>Hi Username, we appreciate your cherishing</h1>
		<h3 className="text-success">You have successfully register with us!</h3>
		<h4>Verification email has been send your email ID by clicking the link mentioned in the email</h4>
	</div>

	<div className="text-center watermark">
		<img src={img3} alt="Mail"/>
		<h2>Hi Username, Your email verificationis successful</h2>
		<h3>We have sent an OTP to your Mobile number. Please submit the OTP.</h3>
		<p><input type="text"/><Link to="" className="text-success">Resend OTP</Link></p>
		<button className="text-white btn btn-success" onClick={this.verify.bind(this)}>VERIFY</button>
	</div>
{this.state.showRes === 'false' ? null : <OTP/> }	
	
</div>
</div>

);
}
}
