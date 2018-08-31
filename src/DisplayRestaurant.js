import React, { Component } from 'react';
import { Media } from 'react-bootstrap';
import Icon from 'react-icons-kit';
import {outlined} from 'react-icons-kit/entypo/outlined';
import {ic_grade} from 'react-icons-kit/md/ic_grade';
import paradise from './paradise.png';
import para from './para.png';
import biriyani from './biriyani.png';

export default class DisplayRestaurant extends Component{

render(){
return(
<div className="container">
	<div className="item shadow bg-white p-3 mb-3 rounded">
		<Media>
    <Media.Left>
      <img width={250} height={200} src={biriyani} alt="thumbnail" />
    </Media.Left>
    <Media.Body>
      <Media.Heading>
		<h2 className="d-inline-block">Hyderabadi Chicken Biriyani With Raita</h2><span className="float-right"><Icon icon={outlined} size={18} className="float-left mr-1"/><span>Add To Fav</span></span>
<h4>South Indian,Biriyani</h4>
	</Media.Heading>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
	<span className="p-2 bg-success text-white font-weight-bold float-left rounded mb-2"><Icon icon={ic_grade} className="float-left mr-1"/><span style={{fontSize:'1.2em'}}>5.0</span></span>
<div style={{clear:'both'}}><div className="border border-danger p-1 d-inline-block"><div className="bg-danger" style={{width:'7px',height:'7px',borderRadius:'50%'}}></div></div></div>
    </Media.Body>
  </Media>
	</div>
	<div className="hotel shadow bg-white p-3 mb-3 rounded"></div>
</div>

);
}
}
