import React, { Component } from 'react';
import NavBar from './NavBar';
import './NavBar.css';
import img1 from './confirm.png';
import img2 from './registration.png';
import img3 from './mail.png';

const RegistrationProcess = () => (
<div>
<NavBar/>
<div className="container">
	<div className="text-center">
		<img src={img1} alt="confirmImg"/>
		<h1>Hi Username, we appreciate your cherishing</h1>
		<h3 className="text-success">You have successfully register with us!</h3>
		<h4>Verification email has been send your email ID by clicking the link mentioned in the email</h4>
	</div>

	<div className="text-center">
		<img src={img3} alt="Mail"/>
		<h2>Hi Username, Your email verificationis successful</h2>
		<h3>We have sent an OTP to your Mobile number. Please submit the OTP.</h3>
		<p><input type="text"/><a href="#" className="text-success">Resend OTP</a></p>
		<button className="text-white btn btn-success">VERIFY</button>
	</div>

	<div className="text-center shadow p-3 mb-5 bg-white rounded w-50 mx-auto mt-5">
		<img src={img2} alt="registrationImg"/>
		<h1>Hi Username, your verification is</h1>
		<h1 className="text-success">Successful</h1>
		<h4>Login and start ordering your favourite food and Enjoy your food abd provide yoyr valuable feedback to better to know your taste!...</h4>
		<button className="text-white btn btn-success">LOGIN NOW</button>
	</div>
</div>
</div>

);
export default RegistrationProcess;
