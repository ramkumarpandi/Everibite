import React,{ Component } from 'react';
import NavBar1 from './NavBar1';
import MyAccount from './MyAccount';
import { Button,Tab,Tabs } from 'react-bootstrap';
import './MyAccount.css';
import './Footer.css';
import './NavBar.css';
import './Checkout.css';
import avatar from './avatar.jpeg';
import visa from './visa.png';
import CommonFooter from './CommonFooter';
import cards from './visa.png';
import secure from './secure.png';

export default class Checkout extends Component
{
state={address:[{id:1,logo:'1',place:'Home',addr:'45A,EastStreet',city:'Ramanathapuram',time:40},
{id:2,logo:'2',place:'Work',addr:'25A,West Street',city:'Sungam',time:50},
{id:3,logo:'3',place:'Others',addr:'5A,North Street',city:'Singanallur',time:30},
{id:4,logo:'4',place:'Others',addr:'55A,South Street',city:'Race Course',time:20}]};
render()
{
return(

<div className="checkout">
  <NavBar1/>
  <div className="container">
    <p className="mt-3">Home/Coimbatore/Checkout</p>
    <div className="row mt-5">
      <div className="col-md-8 shadow p-3 mb-5 bg-white rounded">
        <div className="accountInfo p-4">
<Button className="btn btn-outline-success px-4 py-2 mr-3 text-success float-right">
            Continue Reading
            </Button>
          <h4>Account Information</h4>
          <div className="media">
            <img className="mr-3 rounded-circle accountLogo" src={avatar} alt="Generic placeholder image"/>
            <div className="media-body">
              <h5 className="mt-3">Marry John</h5>
              <a href="#" className="text-success">Edit Profile</a>
            </div>
          </div>
          <div>
            
            <p className="mt-4">Email ID <span className="ml-5 pl-5">abc@abc.com</span></p>
            <p>Mobile Number <span className="ml-5">+91-9234567800</span></p>
          </div>
        </div>
        <hr className="shadow bg-white"/>
        <div className="addr p-4">
          <h4>Delivery Information</h4>
          <div className="row">
            {this.state.address.map(addLoc => (
            <div className="col-md-4 border border-success m-3" key={addLoc.id}>
              <p className="float-right">{addLoc.logo}</p>
              <p className="font-weight-bold">{addLoc.place}</p>
              <p className="ml-3">{addLoc.addr}</p>
              <p className="ml-3">{addLoc.city}</p>
	<p><span className="glyphicon glyphicon-time text-success float-right d-block pb-4 everibite-time-font-size">{addLoc.time}mins</span></p>
            </div>
            ))}
          </div>
          <Button className=" btn btn-success px-4 py-2 mr-3 text-white float-right">
          Add New
          </Button>

        </div>
<hr className="shadow bg-white mt-5"/>
<div className="clearfix"><img src={secure} alt="secureImg" className="float-right"/></div>
<h4>Payment Options</h4>
<Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
  <Tab eventKey={1} title="Debit & Credit Cards">
    <div className="clearfix">
	<img src={visa} alt="cardsImg" className="float-right"/>
    </div>
<form className="container">
    <div className="form-row">
<div className="form-group col-md-5">
      <label htmlFor="company">Card Number</label>
      <input type="text" className="form-control" id="cardnum"/>
    </div>
</div>
<div className="form-row">
      <div className="form-group col-md-2 pr-0">
        <label htmlFor="name" className="d-block">Valid thru</label>
        <input type="text" className="form-control d-inline-block" id="name" placeholder="MM" style={{width:'42px'}}/>
<input type="text" className="form-control d-inline-block" id="profession" placeholder="YY" style={{width:'42px'}}/>
      </div>
	 <div className="form-group col-md-2">
        <label htmlFor="profession">CVV</label>
        <input type="text" className="form-control" id="profession" style={{width:'50px'}}/>
      </div>
      </div>
    <div className="form-row">
      <div className="form-group col-md-5">
      <label htmlFor="company">Name on the card</label>
      <input type="text" className="form-control" id="company"/>
    </div>
    </div>
  </form>
  </Tab>
  <Tab eventKey={2} title="Net Banking">
    Tab 2 content
  </Tab>
  <Tab eventKey={3} title="Wallets">
    Tab 3 content
  </Tab>
<Tab eventKey={4} title="UPI">
    Tab 4 content
  </Tab>
<Tab eventKey={5} title="Cash On Delivery">
    Tab 5 content
  </Tab>
<Tab eventKey={6} title="Pay Later">
    Tab 6 content
  </Tab>
</Tabs>
<Button className=" btn btn-success px-4 py-2 mr-3 text-white float-right mt-3">
         PROCEED TO PAY
          </Button>

      </div>
 <div className="col-md-4">
        <div className="shadow mb-5 bg-white rounded">
          <div className="bg-success p-2">
            <h3 className="text-white ml-2">Order Information</h3>
          </div>
          <div className="mt-4 d-inline-block ml-3">
            <h4>Hyderabadi Chicken Biriyani With Raita</h4>
            <h5>South Indian, Biriyani</h5>
            <h6>Biriyani Paradise, Wilson Garden</h6>

          </div>
          <div className="float-right mt-4">
            <p className="everibite-price-font text-success mb-0 mr-3">&#x20B9; 220</p>
            <p className="text-danger everibite-vegIcon mb-0">&#8865;</p>
          </div>
<div className="px-3"><input type="text" className="form-control mb-0" placeholder="Any special instructions? write us here to know"/></div>
          <hr className="shadow bg-white mx-3"/>
	 <div className="mt-4 d-inline-block ml-3">
            <h4>Hyderabadi Chicken Biriyani With Raita</h4>
            <h5>South Indian, Biriyani</h5>
            <h6>Biriyani Paradise, Wilson Garden</h6>
          </div>
          <div className="float-right mt-4">
            <p className="everibite-price-font text-success mb-0 mr-3">&#x20B9; 220</p>
            <p className="text-danger everibite-vegIcon mb-0">&#8865;</p>
          </div>
<div className="px-3"><input type="text" className="form-control mb-0" placeholder="Any special instructions? write us here to know"/></div>
          <hr className="shadow bg-white mx-3"/>
 <p className="ml-3 text-muted">
<span>Item Total</span>
<span className="float-right mr-3">&#x20B9; 440</span>
</p>
<p className="ml-3 text-muted">
<span>Restaurant Packing Charges</span>
<span className="float-right mr-3">&#x20B9; 7.50</span>
</p>
<p className="ml-3 text-muted">
<span>GST</span>
<span className="float-right mr-3">&#x20B9; 20.93</span>
</p>
<p className="ml-3 text-muted">
<span>Delivery Charges</span>
<span className="float-right mr-3">&#x20B9; 40</span>
</p>
        <hr className="bg-success everibite-hr"/> 
<div className="p-3">
<h4 className="d-inline-block text-success">AMOUNT PAID</h4>
<h4 className="float-right mr-3 text-success">&#x20B9; 508.83</h4>
</div> 
	<div className="clearfix px-3">
		<form>
			<label>Do ypu have any coupon codes?</label>
			<input type="text" className="form-control w-75 float-left"/>
			<Button className="btn btn-outline-success px-4 py-2 text-success float-right">
            Apply
            </Button>
		</form>	
	</div>
        </div>

      </div>

    </div>
  </div>
  <CommonFooter/>
</div>

);
}
}


