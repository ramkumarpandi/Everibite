import React,{ Component } from 'react';
import {Grid,Row,Col} from 'react-bootstrap';
//import './Current.css';
import Icon from 'react-icons-kit';
import {longLeft} from 'react-icons-kit/entypo/longLeft';
import {ic_store} from 'react-icons-kit/md/ic_store';
import {longArrowRight} from 'react-icons-kit/fa/longArrowRight'
import {location} from 'react-icons-kit/icomoon/location';
import {card} from 'react-icons-kit/ionicons/card';
import {iosArrowThinRight} from 'react-icons-kit/ionicons/iosArrowThinRight';
import {iosLocationOutline} from 'react-icons-kit/ionicons/iosLocationOutline';
import {iosStopwatchOutline} from 'react-icons-kit/ionicons/iosStopwatchOutline';
import {iosHomeOutline} from 'react-icons-kit/ionicons/iosHomeOutline';
import {iosStopwatch} from 'react-icons-kit/ionicons/iosStopwatch';
import dateFormat from 'dateformat';
import {Button} from 'react-bootstrap';
export default class Past extends Component
{

render()
	{
		let now = new Date();	

	return(

		<div>
		
		<Grid className="mt-5">
   <Row className="show-grid border border-success  rounded mb-5">
      <Col  md={8}>
      <div className="mt-3">
         <p>Order No #
         <h4 className="d-inline-block ml-1">408973455</h4>
         </p>
         <p>Hydrebadi Chicken Briyani with Raita x1 | Hydrebadi Mutton Briyani with Raita x1</p>
         <p className="d-inline-block">
            <Icon icon={iosHomeOutline}  className="text-success"/>
            Briyani Paradise,Wilson Garden
            <Icon icon={iosArrowThinRight} className="text-success"/>
            <Icon icon={iosLocationOutline}/>
            12/3 Krishna Enclave,Gopalapuram,#rd Street,
         </p>
         <div className="progressBarModal">
            <div className="progress">
               <div className="progress-bar-success progress-bar-striped active massive-font" role="progressbar" aria-valuenow="10" aria-valuemin="20" aria-valuemax="100" style={{width:'20%'}}>
               </div>
            </div>
         </div>
         <h6 className="text-success font-weight-bold">Restaurant is preparing your food</h6>
      </div>
      </Col>
      <Col  md={4} className="p-3" >
      <div className="float-right text-right p-3">
         <p>{dateFormat(now)}</p>
         <h5 className="text-success font-weight-bold">Price: &#8377;509</h5>
         <h6>Payment Bank Card-Sucessful</h6>
         <p className="text-success font-weight-bold" style={{fontSize:'1.5em'}}>
            <span className="icon text-success">
               <Icon icon={iosStopwatch} size={25}/>
            </span>
            51 mins <Button bsStyle="success">TRACK ORDER</Button>
         </p>
      </div>
      </Col>
   </Row>
   <Row className="show-grid border border-success  rounded mb-5">
      <Col  md={8}>
      <div className="mt-3">
         <p>Order No #
         <h4 className="d-inline-block ml-1">408973455</h4>
         </p>
         <p>Hydrebadi Chicken Briyani with Raita x1 | Hydrebadi Mutton Briyani with Raita x1</p>
         <p className="d-inline-block">
            <Icon icon={iosHomeOutline}  className="text-success"/>
            Briyani Paradise,Wilson Garden
            <Icon icon={iosArrowThinRight} className="text-success"/>
            <Icon icon={iosLocationOutline}/>
            12/3 Krishna Enclave,Gopalapuram,#rd Street,
         </p>
         <div className="progressBarModal">
            <div className="progress">
               <div className="progress-bar-success progress-bar-striped active massive-font" role="progressbar" aria-valuenow="10" aria-valuemin="20" aria-valuemax="100" style={{width:'20%'}}>
               </div>
            </div>
         </div>
         <h6 className="text-success font-weight-bold">Restaurant is preparing your food</h6>
      </div>
      </Col>
      <Col  md={4} className="p-3" >
      <div className="float-right text-right p-3">
         <p>{dateFormat(now)}</p>
         <h5 className="text-success font-weight-bold">Price: &#8377;509</h5>
         <h6>Payment Bank Card-Sucessful</h6>
         <p className="text-success font-weight-bold" style={{fontSize:'1.5em'}}>
            <span className="icon text-success">
               <Icon icon={iosStopwatch} size={25}/>
            </span>
            51 mins <Button bsStyle="success">TRACK ORDER</Button>
         </p>
      </div>
      </Col>
   </Row>
</Grid>

		
		
		</div>



		);


	}





}

