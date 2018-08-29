import React,{ Component } from 'react';
import {Row,Col,Tab,Nav,NavItem,Tabs,Grid} from 'react-bootstrap';
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
import Current from './Current';
import Past from './Past';
//import './ViewTab.css';
export default class viewTab extends Component
{


	render()


		{
				

			let now = new Date();


		
			return(
				<div className="Viewtab">
					<Tabs defaultActiveKey={1} id="uncontrolled-tab-example"> 
					<Tab eventKey={1} title="Current Orders">
					<Current/>
					</Tab> 
					<Tab eventKey={2} title="Past Orders">

					<Past/>

					</Tab>
					</Tabs>

				</div>

				);
	

		}


}
