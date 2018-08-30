import React, { Component } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import biriyani from './biriyani.png';
import "./LandingPage.css";

export default class Result extends Component{

state={
imgs:[
{id:1,title:"food", desc:"biriyani", src1:"https://lonelyplanetimages.imgix.net/copilot/images/interest/food-and-drink.jpg?auto=compress&h=800"},
{id:2,title:"food", desc:"biriyani", src1:"https://networkposting.com/wp-content/uploads/2018/02/maxresdefault-137.jpg"},
{id:3,title:"food", desc:"biriyani", src1:"http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg"},
{id:4,title:"food", desc:"biriyani", src1:"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/03/08174730/Swiggy.jpg"},
{id:5,title:"food", desc:"biriyani", src1:"https://www.franchiseindia.com/uploads/content/ri/art/south-indian-foods-never-die-sag-3b403e3c52.jpg"},
{id:6,title:"food", desc:"biriyani", src1:"https://6d1bdf0e0edb084eae10-5bfabe5484726969ac662c6d377e2f3c.ssl.cf2.rackcdn.com/themes/img/southindian-recipe3.jpg"},
{id:7,title:"food", desc:"biriyani", src1:"http://www.gourmetstravelguide.com/wp-content/uploads/2016/03/004-3-800x548.jpg"},
{id:8,title:"food", desc:"biriyani", src1:"https://i.ytimg.com/vi/we9eJkd7pao/maxresdefault.jpg"},
{id:9,title:"food", desc:"biriyani", src1:"http://img.tasteofcity.com/tasteimages/201605/image_original/A165B3AD9494B6A3_Vada-pav-2.jpg"},
]};

	render(){

var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };
		return(
			<div className="container"> 
				<Slider {...settings} className="mb-3">
        <div className="thumbnail w-100 h-50">
          <img src={biriyani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biriyani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biriyani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biriyani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
          <img src={biriyani} alt="carousel"/>
        </div>
        <div className="thumbnail w-100 h-50">
         <img src={biriyani} alt="carousel"/>
        </div>
      </Slider>
				<div className="row">
					{this.state.imgs.map(imgs=>(
						<div className="col-md-4 px-2" key={imgs.id}>
							<div className="card p-3 mb-5" style={{width:'370px'}}>
							<img src={imgs.src1} alt={imgs.title} width={350} height={150} className="card-img-top"/>
							<div className="card-body">
							<h5 className="card-title">{imgs.desc}</h5></div></div>
						</div>))}
					
				</div>
		        </div>
		);
	}
}
