import React,{ Component } from 'react';
import {Media,Button} from 'react-bootstrap';
import Dollar from'./images/imagel.png';
import {Link} from 'react-router-dom';
export default class OrderHeader extends Component
{



	render()

		{

			return(

					<div>
					<div className="float-right mt-3">
						<h5>Your Order number #</h5>
						<h3>408973455</h3>
						<h5>{Date()}</h5>
						<Link to="/OrdersCopy"><Button bsStyle="success">TRACK ORDER</Button></Link>

					</div>
					<div>

					 <Media>
					    <Media.Left>
					     <img width={200} height={200} src={Dollar} alt="thumbnail" />
					    </Media.Left>
					    <Media.Body>
					     <Media.Heading className="text-success mt-4"><h2>ThankYou!!..</h2></Media.Heading>
					     <p>
						<h4>Your order is Confirmed</h4>
						
					      </p>
					    </Media.Body>
					  </Media>

					</div>
					
					<hr/>
				
					</div>

				);

		}






}
