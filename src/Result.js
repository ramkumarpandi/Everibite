import React, { Component } from 'react';
import "./LandingPage.css";
import biryani from './biriyani.png';
import {Link} from 'react-router-dom';

export default class Result extends Component{

state={
imgs:[
{id:1,title:"food", desc:"biriyani", src1:"https://i.ytimg.com/vi/DK2Io4iTuMQ/maxresdefault.jpg"},
{id:2,title:"food", desc:"biriyani", src1:"https://networkposting.com/wp-content/uploads/2018/02/maxresdefault-137.jpg"},
{id:3,title:"food", desc:"biriyani", src1:"http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg"},
{id:4,title:"food", desc:"biriyani", src1:"https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/03/08174730/Swiggy.jpg"},
{id:5,title:"food", desc:"biriyani", src1:"https://www.franchiseindia.com/uploads/content/ri/art/south-indian-foods-never-die-sag-3b403e3c52.jpg"},
{id:6,title:"food", desc:"biriyani", src1:"https://6d1bdf0e0edb084eae10-5bfabe5484726969ac662c6d377e2f3c.ssl.cf2.rackcdn.com/themes/img/southindian-recipe3.jpg"},
{id:7,title:"food", desc:"biriyani", src1:"http://www.gourmetstravelguide.com/wp-content/uploads/2016/03/004-3-800x548.jpg"},
{id:8,title:"food", desc:"biriyani", src1:"https://i.ytimg.com/vi/we9eJkd7pao/maxresdefault.jpg"},
{id:9,title:"food", desc:"biriyani", src1:"https://www.dfordelhi.in/wp-content/uploads/2016/05/vada-pav-5.jpg"},
]};

	render(){

		return(
			<div> 

					{this.state.imgs.map(imgs=>(
						<div className="col-md-4" key={imgs.id}>
							<div className="card p-2 mb-4" style={{width:'280px'}}>
							<Link to="/RestaurantPage"><img src={imgs.src1} alt={imgs.title} width={150} height={150} className="card-img-top"/></Link>
							<div className="card-body">
							<h5 className="card-title">{imgs.desc}</h5></div></div>
						</div>))}
					
		        </div>
		);
	}
}
