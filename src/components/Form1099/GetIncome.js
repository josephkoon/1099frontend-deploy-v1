import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import { updateIncome } from '../../actions';





class GetIncome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            rent: '',
            rentError:'',
            isTouchedRent: false,

            royalties: '',
            royaltiesError:'',
            isTouchedRoyalties: false,

            other: '',
            otherError:'',
            isTouchedOther: false,


            federal_tax_withheld: '',
            federal_tax_withheldError:'',
            isTouchedFederal_tax_withheld: false,

            non_employee_comp: '',
            non_employee_compError:'',
            isTouchedNon_employee_comp: false,


            s409a_income: '',
            s409a_incomeError:'',
            isTouchedS409a_income: false,

            s409a_deferrals: '',
            s409a_deferralsError:'',
            isTouchedS409a_deferrals: false,

            direct_sales: false,
            direct_salesError:'',
            isTouchedDirect_sales: false,



            fish_boat: '',
            fish_boatError:'',
            isTouchedFish_boat: false,

            golden: '',
            goldenError:'',
            isTouchedGolden: false,

            crop_ins: '',
            crop_insError:'',
            isTouchedCrop_ins: false,

            attorney: '',
            attorneyError:'',
            isTouchedAttorney: false,



            state_tax_withheld: '',
            state_tax_withheldError:'',
            isTouchedState_tax_withheld: false,

            state_tax_id: '',
            state_tax_idError:'',
            isTouchedState_tax_id: false,

            state_income: '',
            state_incomeError:'',
            isTouchedState_income: false,

        }


        //MISSING FIELDS !!!
        // substitute_payments
        // fish_boat
        // medical_payments 


        this.handleRentBlur = this.handleRentBlur.bind(this);
        this.handleRentChange = this.handleRentChange.bind(this);

        this.handleRoyaltiesBlur = this.handleRoyaltiesBlur.bind(this);
        this.handleRoyaltiesChange = this.handleRoyaltiesChange.bind(this);

        this.handleOtherBlur = this.handleOtherBlur.bind(this);
        this.handleOtherChange = this.handleOtherChange.bind(this);

        this.handleFederal_tax_withheldBlur = this.handleFederal_tax_withheldBlur.bind(this);
        this.handleFederal_tax_withheldChange = this.handleFederal_tax_withheldChange.bind(this);

        this.handleNon_employee_compBlur = this.handleNon_employee_compBlur.bind(this);
        this.handleNon_employee_compChange = this.handleNon_employee_compChange.bind(this);

        this.handleS409a_incomeBlur = this.handleS409a_incomeBlur.bind(this);
        this.handleS409a_incomeChange = this.handleS409a_incomeChange.bind(this);

        this.handleS409a_deferralsBlur = this.handleS409a_deferralsBlur.bind(this);
        this.handleS409a_deferralsChange = this.handleS409a_deferralsChange.bind(this);

        this.handleSubstitute_paymentsBlur = this.handleSubstitute_paymentsBlur.bind(this);
        this.handleSubstitute_paymentsChange = this.handleSubstitute_paymentsChange.bind(this);





        this.handleFish_boatBlur = this.handleFish_boatBlur.bind(this);
        this.handleFish_boatChange = this.handleFish_boatChange.bind(this);

        this.handleGoldenBlur = this.handleGoldenBlur.bind(this);
        this.handleGoldenChange = this.handleGoldenChange.bind(this);

        this.handleCrop_insBlur = this.handleCrop_insBlur.bind(this);
        this.handleCrop_insChange = this.handleCrop_insChange.bind(this);

        this.handleAttorneyBlur = this.handleAttorneyBlur.bind(this);
        this.handleAttorneyChange = this.handleAttorneyChange.bind(this);






        this.handleState_tax_withheldBlur = this.handleState_tax_withheldBlur.bind(this);
        this.handleState_tax_withheldChange = this.handleState_tax_withheldChange.bind(this);

        this.handleState_tax_idBlur = this.handleState_tax_idBlur.bind(this);
        this.handleState_tax_idChange = this.handleState_tax_idChange.bind(this);

        this.handleState_incomeBlur = this.handleState_incomeBlur.bind(this);
        this.handleState_incomeChange = this.handleState_incomeChange.bind(this);

        this.handleDirect_salesBlur = this.handleDirect_salesBlur.bind(this);
        this.handleDirect_salesChange = this.handleDirect_salesChange.bind(this);

    }




    renderToolTip = (props) => {
        return(
            <ReactTooltip className='tooltip-container' id={props.input} place="right" type="dark" effect="solid">
                 {props.tip}
            </ReactTooltip>
        )
    };
    





    handleRentChange(e) {
        this.setState({ rent:e.target.value, isTouchedRent:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleRentBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({rentError:errorMessage, isTouchedRent:true}, () => {
            this.props.updateIncome(this.state)
        })
    };



    handleRoyaltiesChange(e) {
        this.setState({ royalties:e.target.value, isTouchedRoyalties:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleRoyaltiesBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({royaltiesError:errorMessage, isTouchedRoyalties:true}, () => {
            this.props.updateIncome(this.state)
        })
    };



    handleOtherChange(e) {
        this.setState({ other:e.target.value, isTouchedOther:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleOtherBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({otherError:errorMessage, isTouchedOther:true}, () => {
            this.props.updateIncome(this.state)
        })
    };



    handleFederal_tax_withheldChange(e) {
        this.setState({ federal_tax_withheld:e.target.value, isTouchedFederal_tax_withheld:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleFederal_tax_withheldBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({federal_tax_withheldError:errorMessage, isTouchedFederal_tax_withheld:true }, () => {
            this.props.updateIncome(this.state)
        })
    };



    handleNon_employee_compChange(e) {
        this.setState({ non_employee_comp:e.target.value, isTouchedNon_employee_comp:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleNon_employee_compBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({non_employee_compError:errorMessage, isTouchedNon_employee_comp:true}, () => {
            this.props.updateIncome(this.state)
        })
    };





    handleS409a_incomeChange(e) {
        this.setState({ s409a_income:e.target.value, isTouchedS409a_income:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleS409a_incomeBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({s409a_incomeError:errorMessage, isTouchedS409a_income:true}, () => {
            this.props.updateIncome(this.state)
        })
    };





    handleS409a_deferralsChange(e) {
        this.setState({ s409a_deferrals:e.target.value, isTouchedS409a_deferrals:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleS409a_deferralsBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({s409a_deferralsError:errorMessage, isTouchedS409a_deferrals:true}, () => {
            this.props.updateIncome(this.state)
        })
    };






    handleSubstitute_paymentsChange(e) {
        this.setState({ substitute_payments:e.target.value, isTouchedSubstitute_payments:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleSubstitute_paymentsBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({substitute_paymentsError:errorMessage, isTouchedSubstitute_payments:true}, () => {
            this.props.updateIncome(this.state)
        })
    };





    handleFish_boatChange(e) {
        this.setState({ fish_boat:e.target.value, isTouchedFish_boat:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleFish_boatBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({fish_boatError:errorMessage, isTouchedFish_boat:true}, () => {
            this.props.updateIncome(this.state)
        })
    };





    handleGoldenChange(e) {
        this.setState({ golden:e.target.value, isTouchedGolden:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleGoldenBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({goldenError:errorMessage, isTouchedGolden:true}, () => {
            this.props.updateIncome(this.state)
        })
    };




    handleCrop_insChange(e) {
        this.setState({ crop_ins:e.target.value, isTouchedCrop_ins:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleCrop_insBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        this.setState({crop_insError:errorMessage, isTouchedCrop_ins:true}, () => {
            this.props.updateIncome(this.state)
        })
    };




    handleAttorneyChange(e) {
        this.setState({ attorney:e.target.value, isTouchedAttorney:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleAttorneyBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({attorneyError:errorMessage, isTouchedAttorney:true}, () => {
            this.props.updateIncome(this.state)
        })
    };





    handleState_tax_withheldChange(e) {
        this.setState({ state_tax_withheld:e.target.value, isTouchedState_tax_withheld:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleState_tax_withheldBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({state_tax_withheldError:errorMessage, isTouchedState_tax_withheld:true}, () => {
            this.props.updateIncome(this.state)
        })
    };




    handleState_tax_idChange(e) {
        this.setState({ state_tax_id:e.target.value, isTouchedState_tax_id:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleState_tax_idBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({state_tax_idError:errorMessage, isTouchedState_tax_id:true}, () => {
            this.props.updateIncome(this.state)
        })
    };




    handleState_incomeChange(e) {
        this.setState({ state_income:e.target.value, isTouchedState_income:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleState_incomeBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({state_incomeError:errorMessage, isTouchedState_income:true}, () => {
            this.props.updateIncome(this.state)
        })
    };





    handleDirect_salesChange(e) {
        this.setState({ direct_sales:!this.state.direct_sales, isTouchedDirect_sales:true }, () => {
            this.props.updateIncome(this.state)
        });
    }
    handleDirect_salesBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({direct_salesError:errorMessage, isTouchedDirect_sales:true}, () => {
            this.props.updateIncome(this.state)
        })
    };






    render() {

        let errorStyle = {border:'1px solid red'}


    return (
        <div>
            <div className="input-group" align="left">
                <h4>Income Information</h4>
            </div>



            <div align="left">
                <label>Rents</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="rent" 
                        style={this.state.rentError ? errorStyle : null}
                        onChange={(e) => this.handleRentChange(e)} 
                        onBlur={(e) => this.handleRentBlur(e)} 
                        data-for='rent' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any rent paid to the recipient in this field.", input: "rent"} )}
                </div>
                <span style={{color:'red'}}>{this.state.rentError}</span>
            </div>



            <div align="left">
                <label>Royalties</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="royalties" 
                        style={this.state.royaltiesError ? errorStyle : null}
                        onChange={(e) => this.handleRoyaltiesChange(e)} 
                        onBlur={(e) => this.handleRoyaltiesBlur(e)} 
                        data-for='royalties' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any royalties paid to the recipient in this field", input: "royalties"} )}
                </div>
                <span style={{color:'red'}}>{this.state.royaltiesError}</span>
            </div>


            <div align="left">
                <label>Other Income</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="other" 
                        style={this.state.otherError ? errorStyle : null}
                        onChange={(e) => this.handleOtherChange(e)} 
                        onBlur={(e) => this.handleOtherBlur(e)} 
                        data-for='other' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any other income paid to the recipient in this field.", input: "other"} )}
                </div>
                <span style={{color:'red'}}>{this.state.otherError}</span>
            </div>




            <div align="left">
                <label>Federal Income Tax Withheld</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="federal_tax_withheld" 
                        style={this.state.federal_tax_withheldError ? errorStyle : null}
                        onChange={(e) => this.handleFederal_tax_withheldChange(e)} 
                        onBlur={(e) => this.handleFederal_tax_withheldBlur(e)} 
                        data-for='federal_tax_withheld' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the amount of Federal income tax withheld from disbursements to recipient in this field.", input: "federal_tax_withheld"} )}
                </div>
                <span style={{color:'red'}}>{this.state.federal_tax_withheldError}</span>
            </div>





            <div align="left">
                <label>Non-Employee Compensation</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="non_employee_comp" 
                        style={this.state.non_employee_compError ? errorStyle : null}
                        onChange={(e) => this.handleNon_employee_compChange(e)} 
                        onBlur={(e) => this.handleNon_employee_compBlur(e)} 
                        data-for='non_employee_comp' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the amount of Non-employee compensation in this field.", input: "non_employee_comp"} )}
                </div>
                <span style={{color:'red'}}>{this.state.non_employee_compError}</span>
            </div>






            <div align="left">
                <label>Section 409A Income</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="s409a_income" 
                        style={this.state.s409a_incomeError ? errorStyle : null}
                        onChange={(e) => this.handleS409a_incomeChange(e)} 
                        onBlur={(e) => this.handleS409a_incomeBlur(e)} 
                        data-for='s409a_income' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any Section 409A income paid to the recipient in this field.", input: "s409a_income"} )}
                </div>
                <span style={{color:'red'}}>{this.state.s409a_incomeError}</span>
            </div>







            <div align="left">
                <label>Section 409A Deferrals</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="s409a_deferrals" 
                        style={this.state.s409a_deferralsError ? errorStyle : null}
                        onChange={(e) => this.handleS409a_deferralsChange(e)} 
                        onBlur={(e) => this.handleS409a_deferralsBlur(e)} 
                        data-for='s409a_deferrals' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any Section 409A deferrals paid to the recipient in this field.", input: "s409a_deferrals"} )}
                </div>
                <span style={{color:'red'}}>{this.state.s409a_deferralsError}</span>
            </div>




            <div align="left">
                <label>Fishing Boat Proceeds</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="other" 
                        style={this.state.fish_boatError ? errorStyle : null}
                        onChange={(e) => this.handleFish_boatChange(e)} 
                        onBlur={(e) => this.handleFish_boatBlur(e)} 
                        data-for='fish_boat' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any fishing boat proceeds in this field.", input: "fish_boat"} )}
                </div>
                <span style={{color:'red'}}>{this.state.fish_boatError}</span>
            </div>


            <div align="left">
                <label>Excess Golden Parachute Payments</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="other" 
                        style={this.state.goldenError ? errorStyle : null}
                        onChange={(e) => this.handleGoldenChange(e)} 
                        onBlur={(e) => this.handleGoldenBlur(e)} 
                        data-for='golden' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any excess golden parachute payments in this field.", input: "golden"} )}
                </div>
                <span style={{color:'red'}}>{this.state.goldenError}</span>
            </div>



            <div align="left">
                <label>Crop Insurance Proceeds</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="other" 
                        style={this.state.crop_insError ? errorStyle : null}
                        onChange={(e) => this.handleCrop_insChange(e)} 
                        onBlur={(e) => this.handleCrop_insBlur(e)} 
                        data-for='crop_ins' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter any crop insurance proceeds in this field.", input: "crop_ins"} )}
                </div>
                <span style={{color:'red'}}>{this.state.crop_insError}</span>
            </div>




            <div align="left">
                <label>Gross Proceeeds Paid to an Attorney</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="other" 
                        style={this.state.attorneyError ? errorStyle : null}
                        onChange={(e) => this.handleAttorneyChange(e)} 
                        onBlur={(e) => this.handleAttorneyBlur(e)} 
                        data-for='attorney' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter gross proceeds paid to an attorney in this field.", input: "attorney"} )}
                </div>
                <span style={{color:'red'}}>{this.state.attorneyError}</span>
            </div>






            <div align="left">
                <label>State Tax Withheld</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="state_tax_withheld" 
                        style={this.state.state_tax_withheldError ? errorStyle : null}
                        onChange={(e) => this.handleState_tax_withheldChange(e)} 
                        onBlur={(e) => this.handleState_tax_withheldBlur(e)} 
                        data-for='state_tax_withheld' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the amount state income tax withheld in this field.", input: "state_tax_withheld"} )}
                </div>
                <span style={{color:'red'}}>{this.state.state_tax_withheldError}</span>
            </div>




            <div align="left">
                <label>Payer's State Tax ID Number</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">12-3...</span>
                    </div>
                    <input type="text" className="form-control" id="state_tax_id" 
                        style={this.state.state_tax_idError ? errorStyle : null}
                        onChange={(e) => this.handleState_tax_idChange(e)} 
                        onBlur={(e) => this.handleState_tax_idBlur(e)} 
                        data-for='state_tax_id' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the payer\'s or employer\'s state tax ID in this field.", input: "state_tax_id"} )}
                </div>
                <span style={{color:'red'}}>{this.state.state_tax_idError}</span>
            </div>




            <div align="left">
                <label>State Income</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">$</span>
                    </div>
                    <input type="text" className="form-control" id="state_income" 
                        style={this.state.state_incomeError ? errorStyle : null}
                        onChange={(e) => this.handleState_incomeChange(e)} 
                        onBlur={(e) => this.handleState_incomeBlur(e)} 
                        data-for='state_income' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the recipients state income in this field.", input: "state_income"} )}
                </div>
                <span style={{color:'red'}}>{this.state.state_incomeError}</span>
            </div>




            <div align="left">
                <label>Direct sales of $5,000 or more</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <input type="checkbox"   
                                checked={this.state.direct_sales}
                                onChange={(e) => this.handleDirect_salesChange(e)} 
                                onBlur={(e) => this.handleDirect_salesBlur(e)} 
                                data-for='direct_sales' data-tip data-event='focus' data-event-off='blur'
                            />
                        </span>
                    </div>

                    <input readOnly className="form-control" />
                    {this.renderToolTip( {tip:"Payer made direct sales of $5,000 or more of consumer products to recipient for sale.", input: "direct_sales"} )}
                </div>
                <span style={{color:'red'}}>{this.state.direct_salesError}</span>
            </div>



        </div>
    )
    }
}


function mapStateToProps(state) {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateIncome: updateIncome
    }, dispatch )
}

GetIncome = connect(mapStateToProps, mapDispatchToProps)(GetIncome);

export default GetIncome;


