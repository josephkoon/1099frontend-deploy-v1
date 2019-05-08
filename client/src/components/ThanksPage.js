import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import thanks from '../images/thanks.jpg'; // local 1099

import Navbar from './Navbar';
import Download1099 from './Download1099/Download1099'


class Thanks extends Component {

	//Block Browser Back
    componentDidMount() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });

       	window.scrollTo(0, 0)
    }
	
	render() {
	    return (
	        <div style={{textAlign:'center', backgroundColor:'rgb(225,230,235)', minHeight:'100vh'}}>
	        	<Navbar/>
	        	<br/>
	        	<br/>

	        	<div className='container'>
	        	<div className='row'>
	        	<div className='col-sm-10 offset-sm-1'>
		        	<div style={{backgroundColor:'white', borderRadius:'40px'}}>
		        		<br/>
		        		<img src={thanks} style={{width:'35%'}} alt="..." />
			         	<br/>
			         	<Download1099/>
			         	<br/>
			         	<p>
			         		<strong>Order Number is : 193839834834</strong>
			         		<br/>
			         		You will recieve an email confirmation shortly
			         	</p>
			         	<p>
			         		<strong>Need Help?</strong>
			         		<br/>
			         		Call 999-999-9999 or Email...
			         	</p>
			         	<br/>
			         	<Link to='/'>Return to Homepage</Link>
			         	<br/>
			         	<br/>
		         	</div>
	         	</div>
	         	</div>
	         	</div>

	         	<br/>
	         	<br/>
	        </div>
		);
	}
}

export default Thanks;




