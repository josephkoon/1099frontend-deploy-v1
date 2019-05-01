import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";

import blank1099 from '../images/blank1099.png'; // local 1099

import Navbar from './Navbar';
import Footer from './Footer';
import Form1099 from './Form1099/Form1099';


class Form extends Component {

    //Block Browser Back
    componentDidMount() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
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
    				<Steps direction={'horizontal'} current={0}>
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
            	<div className='col-sm-5 offset-sm-3'>
                    <Form1099/>
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

export default Form;


