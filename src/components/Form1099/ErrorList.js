import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ErrorList extends React.Component {
    constructor(){
        super();
        this.state = {

        }
    }
    


    render() {
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
     
     
        let errorList = errors.map((error) => {
            return (<p>{error}</p>)
        })


        return(
            <div>
                <br/>
                <div className="alert alert-danger" align="center">
                    {errors}
                </div>
            </div>
        )
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

ErrorList = connect(mapStateToProps, mapDispatchToProps)(ErrorList);

export default ErrorList;




