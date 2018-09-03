import React,{ Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
import NavBar1 from './NavBar1';
import CommonFooter from './CommonFooter';
import ViewTab from './ViewTab';
import Current from './Current';
import Past from './Past';
import {Tabs,Tab} from 'react-bootstrap';
import {Route,Switch,Link}from 'react-router-dom';
const ViewOrder = ({match}) =>
(


	
				
				<div>

					
					<NavBar1/>
					<Grid className="mt-5 container mb-5">							
					<Col md={9} className="bg-white">
							<ViewTab/>
							</Col>

					</Grid>
				<CommonFooter/>

				</div>
				
				

				);
	

export default ViewOrder;

