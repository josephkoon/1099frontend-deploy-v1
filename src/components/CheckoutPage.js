import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";


import credit from '../images/credit.png'; // local 1099
import blank1099 from '../images/blank1099.png'; // local 1099

import Navbar from './Navbar';
import Footer from './Footer';

import axios from "axios";

import {CardElement, injectStripe} from 'react-stripe-elements';


class Checkout extends Component {


	constructor(props) {
		super(props);
		this.state = {

		};

		this.submitCharge = this.submitCharge.bind(this);
	}


	//Block Browser Back
    componentDidMount() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });
    }



    async test(){

		let API = 'https://fast1099.com:10443/key'

		await axios.get(API)
			.then(function (response) {
				//handle success
				console.log(response);
			})	
			.catch(function (response) {
				//handle error
				// display error in UI
				console.log(response.error);
			});

    }





	async submitCharge(ev) {
		let bodyFormData = new FormData();
		let charge_id = '';
		let response_status = '';


		//CREATES TOKEN
		let {token} = await this.props.stripe.createToken({
			name: "Fred Weasley", 
			address_line1: "123 Main", 
			address_city: "San Francisco",
			address_zip: "94111",
			address_state: "CA",
			address_country: "USA",
			// phone: "9495551212"			-- this doesn't go to stripe
		});

		if(!token){
			return "no token";
		}


		//Form Data
		const tax_year = '2009'
		const payer = 'Joe Test'
		const recipient = 'Joel Test'
		const income = '239023'
		const email = 'test email@gmail.com'


		const amount = 5.95 * 100
		bodyFormData.append('id', token.id );
		this.setState({tokenId:token.id});


		//DATA FROM PROPS
		// const tax_year = JSON.stringify(store.getState().taxYear);
		// const payer = JSON.stringify(store.getState().payer);
		// const recipient = JSON.stringify(store.getState().recipient);
		// const income = JSON.stringify(store.getState().income);
		// const email = JSON.stringify(store.getState().email);

		//BILLING INFO
		// billing_info: {
		// 	complete: false,
		// 	purchase_amt: 5.95,
		// 	//statement_descriptor: '1099s R Us, Inc',
		// 	description: 'Online 1099 form',  
		// 	name: 'Tom Customer',
		// 	email: 'joel.the.keeper@gmail.com',
		// 	phone: ''
		// }

		//ADD FORM DATA
		// bodyFormData.append('amount', amount );
		// bodyFormData.append('description', this.state.billing_info.description );
		// bodyFormData.append('phone', store.getState().payer.phone );
		// bodyFormData.append('tax_year', tax_year );
		// bodyFormData.append('payer', payer );
		// bodyFormData.append('recipient', recipient );
		// bodyFormData.append('income', income );
		// bodyFormData.append('email', email );



		let API = 'https://fast1099.com:9000/charge'
        var headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            "Access-Control-Allow-Origin": "*" 
        }

		await axios.post(API, bodyFormData, headers)
			.then(function (response) {
				//handle success
				console.log(response.status);
				if (response.status === 200) {
					response_status = response.status;
					charge_id = response.data.response.id;
				}
				console.log(response);
			})	
			.catch(function (response) {
				//handle error
				// display error in UI
				console.log(response);
			});


		//LOG RESPONSE
		if (response_status === 200) {
			this.setState({charge_id: charge_id});
			console.log("success");
		}


	};




	render() {

		let customForm = (
			<div>
			<div class="form-group">
				<label>Email address</label>
				<input class="form-control" placeholder="name@example.com" />
			</div>

			<div class="form-group">
				<label>Card Number</label>
				<input class="form-control" placeholder="9999-9999-9999-9999" />
			</div>

			<div class="form-row">
				<div class="col">
					<label>MM / YY</label>
					<input type="text" class="form-control" placeholder="First name" />
				</div>
				<div class="col">
					<label>CVC</label>
					<input type="text" class="form-control" placeholder="Last name" />
				</div>
			</div>
			</div>
		);


	    return (
	    	<div style={{minHeight:'100vh', height:'100vh'}}>
	    		<div style={{backgroundColor:'white'}}>
		        	<Navbar/>
		        </div>


		        <div style={{backgroundColor:'rgb(250,250,250)'}}>
		        <div className='container' style={{paddingTop:'14px', paddingBottom:'14px'}}>
	            	<div className='row'>
	            	<div className='col-sm-10 offset-sm-1'>
					<Steps direction={'horizontal'} current={2}>
						<Steps.Step title="Fill Out" />
						<Steps.Step title="Preview" />
						<Steps.Step title="Checkout" />
						<Steps.Step title="Download" />
					</Steps>
					</div>
					</div>
		        </div>
		        </div>


		        <div style={{backgroundColor:'rgb(225,230,235)', minHeight:'100%'}}>
		        	<br/>
		        	<br/>

		        	<div className='container'>
		        	<div className='row'>

		       
			        	<div className='col-sm-5 offset-sm-1'>
			        		<h5><strong>Payment Details</strong></h5>
			        		<br/>

			        		
			        		<hr/>
			        		<h6 style={{display:'inline-block', width:'60%'}}>Secure Card Payment</h6>
			        		<img src={credit} style={{width:'40%'}} alt="..." />
			        		<hr/>
			        		<br/>

			        		{customForm}

							<br/>
							<br/>


			                <Link to='/thanks'>
			                    <a style={{width:'100%'}} className="btn btn-primary btn-lg" href="#" role="button">
			                    <strong>Complete Payment</strong>
			                    </a>
			                </Link>
							<br/>
							<br/>

							<div style={{textAlign:'center'}}>
								<p><i style={{display:'inline-block', paddingRight:'8px'}} class="fas fa-lock"></i>Secure SSL Checkout</p>
							</div>
			        	</div>

			        	<div className='col-sm-5 offset-sm-1'>
			        		<div style={{backgroundColor:'white', borderRadius:'10px', padding:'14px'}}>
			        			<h6 className='gray'><strong>Order Summary</strong></h6>
			        			<hr/>
			        			<div className='row'>
			        			<div className='col-5'>
			        				<img src={blank1099} style={{width:'85%'}} alt="..." />
			        			</div>
			        			<div className='col-7'>
			        				<h6 className='gray'>Downloadable 1099 PDF</h6>
			        				<h6 className='gray'>QTY 1</h6>
			        				<br/>
			        				<h6 className='gray'>$3.99 Total</h6>
			        			</div>
			        			</div>
			        			<hr/>
			        		</div>

			        		<br/>
			        		<br/>

				         	<p><strong>Need Help?</strong> Check our Help pages or contact us	</p>

			        		<br/>
				         	<p>By placing your order, you agree to our Terms of Use and Privacy Policy.</p>
			        	</div>

		        	</div>
		        	</div>

		      

	        		<br/>
	        		<br/>

	        		<Footer/>
	       		</div>
	        </div>
	    );
	}
}

export default injectStripe(Checkout);




