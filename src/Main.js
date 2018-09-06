import React, { Component } from 'react';
import pic1 from './findfood.png';
import pic2 from './diamond.png';
import pic3 from './better.png';
import pic4 from './offers.png';
import locateme from './locateme.png';
import './Main.css';
import './Footer.css';
import './NavBar.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { Carousel,Media,Button } from 'react-bootstrap';
export default class Main extends Component{
render(){
return(
<div>
  <NavBar/>
<div style={{fontFamily:"'Viga',sans-serif"}}>
  <div className="mainBg p-5">
    <div className="row">
      <div className="bg-white text-left col-md-6 shadow mb-5 bg-white rounded mt-4 ml-5" style={{padding:'4rem'}}>
        <h1 style={{color:'#333'}}>A Better Way To Get Your Food</h1>
        <h3 style={{fontFamily:"'Roboto',sans-serif",color:'#666666',fontWeight:'300'}}>Order Your Favourite Food From Restaurants Near You</h3>
<div className="formBorder my-2">        
<form className="form-inline border border-success rounded p-1">
	<span className="glyphicon glyphicon-map-marker mr-2" style={{fontSize:'1.5em'}}></span>
	<input type="search" className="form-control form-control-lg p-2 text-success w-75 my-1 border-0" id="search" placeholder="Enter Your Location" style={{backgroundColor:'transparent'}}/>
	<button type="submit" className="btn btn-lg ml-3 text-white" style={{background:'#2a830c'}}>Find Your Bite</button>	         
        </form>
</div>
<h4><img src={locateme} alt="locateMe"/><a href="#" className="ml-1" style={{color:'#333'}}>Locate Me</a></h4>
          <p style={{fontFamily:"'Roboto',sans-serif",fontWeight:'400',color:'#666666'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  <div className="bg-white">
    <Carousel>
      <Carousel.Item>
        <div className="bg-white">
          <div className="d-inline-block col-md-4 ml-5 item1">
            <h1>How Everibite works for you !!</h1>
            <h1>Ordering your favourite food</h1>
            <h1>is even easier than eating.</h1>
          </div>
          <div className="d-inline-block col-md-3 mt-5 item2">
            <h2 className="text-success">Find Your Food</h2>
            <h4>Search your favourite food or local</h4>
            <h4>restarunts, Receipes, Cusines and read</h4>
            <h4>the review and check rating of the food.</h4>
          </div>
          <div className="d-inline-block col-md-3 item3 float-right"><img src={pic1} alt="findfoodImg"/></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white">
          <div className="d-inline-block col-md-4 ml-5 item1">
            <h1>How Everibite works for you !!</h1>
            <h1>Ordering your favourite food</h1>
            <h1>is even easier than eating.</h1>
          </div>
          <div className="d-inline-block col-md-3 mt-5 item2">
            <h2 className="text-success">Find Your Food</h2>
            <h4>Search your favourite food or local</h4>
            <h4>restarunts, Receipes, Cusines and read</h4>
            <h4>the review and check rating of the food.</h4>
          </div>
          <div className="d-inline-block col-md-3 item3 float-right"><img src={pic1} alt="findfoodImg"/></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="bg-white">
          <div className="d-inline-block col-md-4 ml-5 item1">
            <h1>How Everibite works for you !!</h1>
            <h1>Ordering your favourite food</h1>
            <h1>is even easier than eating.</h1>
          </div>
          <div className="d-inline-block col-md-3 mt-5 item2">
            <h2 className="text-success">Find Your Food</h2>
            <h4>Search your favourite food or local</h4>
            <h4>restarunts, Receipes, Cusines and read</h4>
            <h4>the review and check rating of the food.</h4>
          </div>
          <div className="d-inline-block col-md-3 item3 float-right"><img src={pic1} alt="findfoodImg"/></div>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  <div className="container mt-5">
    <h1 className="text-success">Why Order With Everibite?</h1>
    <div className="row">
      <div className="col-md-4">
        <Media>
          <Media.Left>
            <img width={100} height={100} src={pic2} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <h1>Discover</h1>
            </Media.Heading>
            <p>
              We'll help you find hidden modules gems in your neighborhood and taste of you like to bite off.
            </p>
          </Media.Body>
        </Media>
      </div>
      <div className="col-md-4">
        <Media>
          <Media.Left>
            <img width={100} height={100} src={pic3} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <h1>Better</h1>
            </Media.Heading>
            <p>
              The more you use Everibite and review your order better we are at making recommendations just for you.
            </p>
          </Media.Body>
        </Media>
      </div>
      <div className="col-md-4">
        <Media>
          <Media.Left>
            <img width={100} height={100} src={pic4} alt="thumbnail" />
          </Media.Left>
          <Media.Body>
            <Media.Heading>
              <h1>Offers</h1>
            </Media.Heading>
            <p>
              Enjoy each bite and support local business by reviews and feedback and get offers and get coupon codes.
            </p>
          </Media.Body>
        </Media>
      </div>
    </div>
    <h1 className="text-center text-success mt-5 pt-5">Register Your Restaurant With Us</h1>
    <h2 className="text-center mt-3"><p>The better way to find the customer who loves your food</p><p>and taste to increase regular customers.</p></h2>
<center><Button className="everibite-btn-style font-weight-bold mb-4" style={{color:'#3a8d1e'}}>Get In Touch With Us Now</Button></center>
  </div>
</div>
  <Footer/>
</div>
);
}
}


