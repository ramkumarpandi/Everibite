import React, { Component } from 'react';
import "./LandingPage.css";
import biryani from './biriyani.png';
import {Link} from 'react-router-dom';

export default class Result extends Component{

state={
imgs:[
{id:1,title:"food", desc:"biriyani", src1:biryani},
{id:2,title:"food", desc:"biriyani", src1:biryani},
{id:3,title:"food", desc:"biriyani", src1:biryani},
{id:4,title:"food", desc:"biriyani", src1:biryani},
{id:5,title:"food", desc:"biriyani", src1:biryani},
{id:6,title:"food", desc:"biriyani", src1:biryani},
{id:7,title:"food", desc:"biriyani", src1:biryani},
{id:8,title:"food", desc:"biriyani", src1:biryani},
{id:9,title:"food", desc:"biriyani", src1:biryani},
]};

	render(){

		return(
			<div> 

					{this.state.imgs.map(imgs=>(
						<div className="col-md-4" key={imgs.id}>
							<div className="card p-2 mb-4" style={{width:'280px'}}>
							<Link to="/RestaurantPage"><img src={imgs.src1} alt={imgs.title} width={150} height={150} className="card-img-top"/></Link>
							<div className="card-body">
							<p className="clearfix mb-0">
								<span className="card-title float-left">{imgs.desc}</span>
								<span className="float-right">ITS</span>
							</p>
							{/*<p className="clearfix mb-1">
								<span className="float-left">Saranya</span>
								<span className="float-right">Raji</span>
							</p>
							<p className="clearfix mb-1">
								<span className="float-left">Saranya1</span>
								<span className="float-right">Raji1</span>
							</p>
							<p className="clearfix mb-1">
								<span className="float-left">Saranya2</span>
								<span className="float-right">Raji2</span>
					</p>*/}
							</div>
							</div>
						</div>))}
					
		        </div>
		);
	}
}
