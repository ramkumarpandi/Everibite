import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from './everibiteLogo.png';
import './NavBar.css';
export default class NavBar1 extends Component
{
render()
{
return(
<Navbar default collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to={"/"}>
      <img src={logo} alt="LogoImg"/></Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav pullRight>
      <NavItem eventKey={1}><Link to="/">
        HomePage</Link>
      </NavItem>
      <NavItem eventKey={2}><Link to="/MyAccount">
        MyAccountPage</Link>
      </NavItem>
	<NavItem eventKey={3}><Link to="/OrdersCopy">
        OrdersCopy</Link>
      </NavItem>
<NavItem eventKey={4}><Link to="/UserFeedback">
        UserFeedback</Link>
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
}


