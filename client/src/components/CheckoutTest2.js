import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {CardElement, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';

import axios from "axios";





class CheckoutPage2 extends Component {

	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}


	async submit(e) {
		//DOCS FOR STRIPE
		//https://stripe.com/docs/recipes/elements-react

		//Get Token
		let {token} = await this.props.stripe.createToken({name: "Name"});



		if(token){

			let API = 'https://fast1099.com:10443/charge'
	      	let headers = {
	            'Content-Type': 'application/json'
	        }
	        let data = {
	        	id:token.id,
	        	name:'fred'
	        }

	        let response_status
	        let charge_id
			await axios.post(API, data, headers)
				.then(function (response) {
					//handle success
					console.log(response.status);
					if (response.status === 200) {
						response_status = response.status;
						charge_id = response.data.response.id;
						console.log(response);
					}
				})	
				.catch(function (response) {
					//handle error
					console.log(response);
				});


			// //LOG RESPONSE
			// if (response_status === 200) {
			// 	this.setState({charge_id: charge_id});
			// 	console.log("success");
			// }

		}
	}


	render(){

		
		return (
	      <div>
	        
	        <div className='row'>
	        	<div className='col-12'>
	        		<CardNumberElement className='form-control' />
	        	</div>
	        	<div className='col-6'>
	        		<CardExpiryElement className='form-control'/>
	        	</div>
	        	<div className='col-6'>
	        		<CardCVCElement className='form-control'/>
	        	</div>
	        </div>

	        <button className='btn btn-primary' onClick={this.submit}>Send</button>
	      </div>
		)


	}

}







export default injectStripe(CheckoutPage2);
