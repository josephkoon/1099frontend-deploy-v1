import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GetTaxYear from './GetTaxYear';
import GetPayerInfo from './GetPayerInfo';
import GetRecipientInfo from './GetRecipientInfo';
import GetIncome from './GetIncome';
import GetEmail from './GetEmail';
import ErrorList from './ErrorList';

import formValidator from '../../validate';
import history from '../../history';



class Form1099 extends React.Component {
	constructor(){
		super()

		this.state = {
			errors:[]
		}
	}
	


	handleSubmitClick = () => {

		if(this.state.errors.length == 0 ){
			history.push('/preview');
		}

	}

	componentDidUpdate(prevProps, prevState, snapshot){
		if(prevProps != this.props){


        let payer = this.props.payer
        let recipient = this.props.recipient
        let income = this.props.income
        let email = this.props.email
        let errors = []



        if(payer.nameError){
            errors.push(payer.nameError)
        }
        if(payer.tinError){
            errors.push(payer.tinError)
        }
        if(payer.zipcodeError){
            errors.push(payer.zipcodeError)
        }
        if(payer.streetError){
            errors.push(payer.streetError)
        }
        if(payer.cityError){
            errors.push(payer.cityError)
        }
        if(payer.stateError){
            errors.push(payer.stateError)
        }
        if(payer.phoneError){
            errors.push(payer.phoneError)
        }





        if(recipient.nameError){
            errors.push(recipient.nameError)
        }
        if(recipient.tinError){
            errors.push(recipient.tinError)
        }
        if(recipient.zipcodeError){
            errors.push(recipient.zipcodeError)
        }
        if(recipient.streetError){
            errors.push(recipient.streetError)
        }
        if(recipient.cityError){
            errors.push(recipient.cityError)
        }
        if(recipient.stateError){
            errors.push(recipient.stateError)
        }

        if(recipient.account_nbrError){
            errors.push(recipient.account_nbrError)
        }
        if(recipient.FATCAError){
            errors.push(recipient.FATCAError)
        }



        if(income.rentError){
            errors.push(income.rentError)
        }
        if(income.royaltiesError){
            errors.push(income.royaltiesError)
        }
        if(income.otherError){
            errors.push(income.otherError)
        }
        if(income.federal_tax_withheldError){
            errors.push(income.federal_tax_withheldError)
        }
        if(income.non_employee_compError){
            errors.push(income.non_employee_compError)
        }
        if(income.s409a_incomeError){
            errors.push(income.s409a_incomeError)
        }
        if(income.s409a_incomeError){
            errors.push(income.s409a_incomeError)
        }
        if(income.s409a_deferralsError){
            errors.push(income.s409a_deferralsError)
        }
        if(income.direct_salesError){
            errors.push(income.direct_salesError)
        }
        if(income.state_tax_withheldError){
            errors.push(income.state_tax_withheldError)
        }
        if(income.state_tax_idError){
            errors.push(income.state_tax_idError)
        }
        if(income.state_incomeError){
            errors.push(income.state_incomeError)
        }


        if(email.emailError){
            errors.push(email.emailError)
        }

        this.setState({errors:errors})


		}
	}



	render() {


     
     
        let errorList = this.state.errors.map((error) => {
            return (<p>{error}</p>)
        })



		return (
			<div>
				<br/>
				<div className="alert alert-primary" role="alert">Fields marked with <strong>*</strong> are mandatory</div>

				<GetTaxYear />
				<br/>
				<hr></hr>
				<GetPayerInfo />
				<br/>
				<hr></hr>
				<GetRecipientInfo />

				<br/>
				<hr></hr>
				<GetIncome />

				<br/>
				<hr></hr>
				<GetEmail />

				<hr></hr>
                <br/>
                <div className="alert alert-danger" align="center">
                    {errorList}
                </div>

				<button className="btn btn-lg btn-primary" type="submit" onClick={this.handleSubmitClick.bind(this)}>
					<strong>Submit and Review</strong>
					<i style={{marginLeft:'8px', fontSize:'18px'}} class="fas fa-angle-double-right"></i>
				</button>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
	  taxYear: state.taxYear,
	  payer: state.payer,
	  recipient: state.recipient,
	  income: state.income,
	  email: state.email,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({ 

	}, dispatch )
}

Form1099 = connect(mapStateToProps, mapDispatchToProps)(Form1099);

export default Form1099;




