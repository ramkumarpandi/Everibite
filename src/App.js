import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import logo from './everibiteLogo.png';
import { BrowserRouter as Router,Route }from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'; 
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'; 
import Main from './Main';
import MyAccount from './MyAccount';
import RegistrationProcess from './RegistrationProcess';
import OrdersCopy from './OrdersCopy';
import UserFeedback from './UserFeedback';
library.add(faShoppingBag);
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
      </div>
</Router>
    );
  }
}

export default App;
