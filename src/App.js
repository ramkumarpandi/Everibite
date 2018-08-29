import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import logo from './everibiteLogo.png';
import { BrowserRouter as Router,Route }from 'react-router-dom';
import Main from './Main';
import MyAccount from './MyAccount';
import RegistrationProcess from './RegistrationProcess';
import OrdersCopy from './OrdersCopy';
import UserFeedback from './UserFeedback';
import OrderCopy from './OrderCopy';
import ProfilePopup from './ProfilePopup';
import Checkout from './Checkout';
import Vieworder from './Vieworder';

class App extends Component {
  render() {
    return (
<Router>
      <div className="App">
	<Route path="/" exact component={Main}/>
	<Route path="/MyAccount" component={MyAccount}/>
	<Route path="/RegistrationProcess" component={RegistrationProcess}/>
	<Route path="/OrdersCopy" component={OrdersCopy}/>
	<Route path="/UserFeedback" component={UserFeedback}/>
	<Route path="/OrderCopy" component={OrderCopy}/>
	<Route path="/ProfilePopup" component={ProfilePopup}/>
	<Route path="/Checkout" component={Checkout}/>
	<Route path="/Vieworder" component={Vieworder}/>
      </div>
</Router>
    );
  }
}

export default App;
