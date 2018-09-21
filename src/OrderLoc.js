import React,{ Component } from 'react';
import Map from'./images/map.png';
import {Media} from 'react-bootstrap';
export default class OrderLoc extends Component
{



	render()

		{

			return(

					<div className="watermark">

			
					<h4 className="text-success font-weight-bold">Delivery Location</h4>

					
					<img src={Map} width={300} height={180} className="mt-3"/>
					<div className="text-muted mt-3">
					<h6>Indtechsoft, kvb atm</h6>
					<h6>trichy road, nadar colony</h6>
					<h6>highways colony, gopalapuram,</h6>
					<h6>Coimbatore-641018, TN</h6>
					</div>
					<div>
					<h5 className="text-success font-weight-bold mt-5">Payment Information</h5>
					<h6 className="text-muted">Payment Method:Credit Card/Debit Card</h6>
					<Media>
					    <Media.Left>
					     <span className="glyphicon glyphicon-credit-card text-muted" style={{fontSize:'1.5em'}}></span>
					    </Media.Left>
					    <Media.Body>
					     <Media.Heading className="text-muted"><h5>5648 xxxx xxxx 5003</h5></Media.Heading>
					     <h5 className="text-muted">Visa</h5>
						
					      
					    </Media.Body>
					  </Media>
					</div>
					</div>

				);

		}
}
