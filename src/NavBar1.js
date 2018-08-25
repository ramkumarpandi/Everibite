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
      <NavItem eventKey={1} componentClass={Link} href="/" to="/">
        HomePage
      </NavItem>
      <NavItem eventKey={2} componentClass={Link} href="/MyAccount" to="/MyAccount">
        MyAccountPage
      </NavItem>
	<NavItem eventKey={3} componentClass={Link} href="/OrdersCopy" to="/OrdersCopy">
        OrdersCopy
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>
);
}
}


