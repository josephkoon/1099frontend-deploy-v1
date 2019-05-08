import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import Steps, { Step } from "rc-steps";
import "rc-steps/assets/index.css";
import "rc-steps/assets/iconfont.css";


import credit from '../images/credit.png'; // local 1099
import blank1099 from '../images/blank1099.png'; // local 1099

import Navbar from './Navbar';
import Footer from './Footer';

import {CardElement, CardNumberElement, CardExpiryElement, CardCVCElement, injectStripe} from 'react-stripe-elements';
import axios from "axios";


class Checkout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			payment_message:null,
			card_name:null
		};

		this.submit = this.submit.bind(this);
		this.test = this.test.bind(this);
	}


	//Block Browser Back
    componentDidMount() {
        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', function (event){
            window.history.pushState(null, document.title,  window.location.href);
        });

        window.scrollTo(0, 0)
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




	async submit(e) {
		//Card Name Required
		if(!this.state.card_name){
			this.setState({payment_message:'Card Name is Required'})
			return
		}

		//DOCS FOR STRIPE
		//https://stripe.com/docs/recipes/elements-react

		//Get Token
		let {token} = await this.props.stripe.createToken({
			name: this.state.card_name, 
			//NOT USED
			// address_line1: "123 Main", 
			// address_city: "San Francisco",
			// address_zip: "94111",
			// address_state: "CA",
			// address_country: "USA",
		});


		if(!token){
			this.setState({payment_message:'Token or Network Error'})
		}


		if(token){

			let bodyFormData = new FormData();

		    const tax_year = JSON.stringify(this.props.taxYear);
		    const payer = JSON.stringify(this.props.payer);
		    const recipient = JSON.stringify(this.props.recipient);
		    const income = JSON.stringify(this.props.income);
		    const email = JSON.stringify(this.props.email);

		    bodyFormData.append('id', token.id);
		    bodyFormData.append('amount', parseInt(3.99 * 100) );
		    bodyFormData.append('description', 'Online 1099 form' );

		    bodyFormData.append('phone', this.props.payer.phone);

		    bodyFormData.append('tax_year', tax_year );
		    bodyFormData.append('payer', payer );
		    bodyFormData.append('recipient', recipient );
		    bodyFormData.append('income', income );
		    bodyFormData.append('email', email );


			let API = 'https://fast1099.com:10443/charge'
	      	let headers = {
	            'Content-Type': 'multipart/form-data'
	        }


	        let response_status
	        let charge_id
			await axios.post(API, bodyFormData, headers)
				.then(function (response) {
					console.log(response)

					//handle success
					console.log(response.status);
					if (response.status === 200) {
						response_status = response.status;
						charge_id = response.data.response.id;
					}
				})	
				.catch(function (response) {
					//handle error
					console.log(response);
					this.setState({payment_message: 'Payment Error'});
				}.bind(this));


			//LOG RESPONSE
			if (response_status == 200) {
				this.setState({payment_message: 'Payment Success'});
				console.log("success");
				
				this.props.history.push('/thanks')
			}

		}
	}





    handleNameChange(e) {
        this.setState({ card_name:e.target.value })
    }





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

			        		
			        		<hr/>
			        		<h6 style={{display:'inline-block', width:'60%'}}>Secure Card Payment</h6>
			        		<img src={credit} style={{width:'40%'}} alt="..." />
			        		<hr/>
			        		<br/>

					        <div className='row'>

					        	<div className='col-12'>
					        		<input placeholder='Name on Card *' type="text" className='form-control' onChange={(e) => this.handleNameChange(e)} />
					        		<br/>
					        	</div>
					        	

					        	<div className='col-12'>
					        		<CardNumberElement />
					        		<br/>
					        	</div>
					        	

					        	<div className='col-6'>
					        		<CardExpiryElement/>
					        	</div>
					        	<div className='col-6'>
					        		<CardCVCElement />
					        	</div>

								
								<div className='col-12 text-center'>
									<br/>
									<h6 style={{color:'red'}}>{this.state.payment_message}</h6>
									<br/>
								</div>

					        </div>



		                    <button onClick={this.submit} style={{width:'100%'}} className="btn btn-primary btn-lg" role="button">
		                   		<strong>Complete Payment</strong>
		                    </button>
			                
							<br/>
							<br/>

							<div style={{textAlign:'center'}}>
								<p><i style={{display:'inline-block', paddingRight:'8px'}} className="fas fa-lock"></i>Secure SSL Checkout</p>
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




function mapStateToProps(state) {
    return{
        taxYear:state.taxYear,
        payer:state.payer,
        recipient:state.recipient,
        income:state.income,
        email:state.email,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({

    }, dispatch )
}

Checkout = connect(mapStateToProps, mapDispatchToProps)(Checkout);

export default injectStripe(Checkout);




