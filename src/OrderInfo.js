import React,{ Component } from 'react';
export default class OrderInfo extends Component
{



	render()

		{

			return(

				<div>
			<h3 className="text-success font-weight-bold">Order Information</h3>
			<div>
					
			<h4>Hydrebadi Chicken Biryani With Raita <span className="float-right text-success">&#8377;200</span></h4>
			<h5>South Indian,Biryani<span className="float-right text-danger font-weight-bold">&#8865;</span></h5>
			<h6>Biryani Paradise,Wilson Garden</h6>

			<hr/>
			</div>

			<div>
			<h4>Hydrebadi Chicken Biryani With Raita <span className="float-right text-success">&#8377;200</span></h4>
			<h5>South Indian,Biryani<span className="float-right text-danger font-weight-bold">&#8865;</span></h5>
			<h6>Biryani Paradise,Wilson Garden</h6>

			<hr/></div>
			<div>
			<h5 className="text-muted">Item Total<span className="text-muted float-right">&#8377;440.00</span></h5>
			<h5 className="text-muted">Item Total<span className="text-muted float-right">&#8377;7.80</span></h5>
			<h5 className="text-muted">GST<span className="text-muted float-right">&#8377;20.93</span></h5>
			<h5 className="text-muted">Delivery Charges<span className="text-muted float-right">&#8377;40.00</span></h5>
			<hr style={{borderTop:'2px solid green'}}/>


			</div>
			<div>
			<h5 className="text-success font-weight-bold text-uppercase">Amount Paid<span className="text-success float-right font-weight-bold">&#8377;580.00</span></h5>

			
			</div>
										
					
				
			</div>

				);

		}






}

