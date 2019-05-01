import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";

import credit from '../images/credit.png'; // local 1099
import blank1099 from '../images/blank1099.png'; // local 1099

import Navbar from './Navbar';
import Footer from './Footer';

import store from '../store';
import axios from "axios";


class Checkout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tokenId: '',
			charge_id: '',
			billing_info: {
				complete: false,
				purchase_amt: 5.95,
				//statement_descriptor: '1099s R Us, Inc',
				description: 'Online 1099 form',  
				name: 'Tom Customer',
				email: 'joel.the.keeper@gmail.com',
				phone: ''
			}
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



	async submitCharge(ev) {
		let bodyFormData = new FormData();
		let charge_id = '';
		let response_status = '';

		let {token} = await this.props.stripe.createToken({
			// these values need to come from the UI
			name: "Fred Weasley", 
			address_line1: "123 Main", 
			address_city: "San Francisco",
			address_zip: "94111",
			address_state: "CA",
			address_country: "USA",
			// phone: "9495551212"			-- this doesn't go to stripe
		});

		if (!token) {
			return "no token";
		}

		// stringify json objects before sending to server so server can read them
		const tax_year = JSON.stringify(store.getState().taxYear);
		const payer = JSON.stringify(store.getState().payer);
		const recipient = JSON.stringify(store.getState().recipient);
		const income = JSON.stringify(store.getState().income);
		const email = JSON.stringify(store.getState().email);
		// const form_data = {
		//   payer: {},
		//   recipient: {},
		//   email: {}
		// };


		const amount = parseInt(this.state.billing_info.purchase_amt*100);
		bodyFormData.append('id', token.id );
		bodyFormData.append('amount', amount );
		bodyFormData.append('description', this.state.billing_info.description );
		bodyFormData.append('phone', store.getState().payer.phone );
		//bodyFormData.append('form_data', form_data );
		bodyFormData.append('tax_year', tax_year );
		bodyFormData.append('payer', payer );
		bodyFormData.append('recipient', recipient );
		bodyFormData.append('income', income );
		bodyFormData.append('email', email );

		this.setState({tokenId:token.id});
		console.log(token.id);

		await axios.post(
			"http://localhost:9000/charge",                // need to set baseURL somewhere...
			bodyFormData,
			{'Content-Type': 'multipart/form-data' }
		)
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

		if (response_status === 200) {
			this.setState({charge_id: charge_id});
			return "success";
		}
	};


	render() {
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

export default Checkout;




