import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";

import Navbar from './Navbar';
import Footer from './Footer';
import Preview1099 from './Preview1099/Preview1099';


class Preview extends Component {

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
	        <div style={{backgroundColor:'rgb(225,230,235)', minHeight:'100vh'}}>
	        	<div style={{backgroundColor:'white'}}>
	        		<Navbar/>
	        	</div>

		        <div style={{backgroundColor:'rgb(250,250,250)'}}>
		        <div className='container' style={{paddingTop:'14px', paddingBottom:'14px'}}>
            	<div className='row'>
            	<div className='col-sm-10 offset-sm-1'>
					<Steps direction={'horizontal'} current={1}>
						<Steps.Step title="Fill Out" />
						<Steps.Step title="Preview" />
						<Steps.Step title="Checkout" />
						<Steps.Step title="Download" />
					</Steps>
				</div>
				</div>
		        </div>
		        </div>

	        	<br/>
	        	<br/>

	        	<div className='container' style={{textAlign:'center'}}>
	        	<div className='row'>
	        	<div className='col-sm-10 offset-sm-1'>
		        	<div style={{backgroundColor:'white', borderRadius:'40px'}}>
		        		<br/>
		        		<br/>
		        		<h4>Review Your Completed 1099</h4>
		        		<br/>
		        		<br/>
		        		<Preview1099/>
		         		<br/>
		         		<br/>
	

		                <Link to='/checkout'>
		                    <a class="btn btn-primary btn-lg" href="#" role="button">
		                    	<strong>Checkout</strong>
		                    	<i style={{marginLeft:'2px', fontSize:'18px'}} class="fas fa-angle-double-right"></i>
		                    </a>
		                </Link>
		                <br/>
		                <br/>
		                <br/>
		         	</div>
	         	</div>
	         	</div>
	         	</div>

	         	<br/>
	         	<br/>
	         	
	         	<Footer/>
	        </div>
	    );
  	}
}

export default Preview;




