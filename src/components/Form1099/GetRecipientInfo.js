import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import { updateRecipient } from '../../actions';



class GetRecipientInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            name: '',
            nameError:'',
            isTouchedName: false,

            tin: '',
            tinError:'',
            isTouchedTin: false,

            zipcode: '',
            zipcodeError:'',
            isTouchedZipcode: false,

            street: '',
            streetError:'',
            isTouchedStreet: false,

            city: '',
            cityError:'',
            isTouchedCity: false,

            state: '',
            stateError:'',
            isTouchedState: false,

            account_nbr: '',
            account_nbrError:'',
            isTouchedAccount_nbr: false,

            FATCA: false,
            FATCAError:'',
            isTouchedFATCA: false,
        }


        this.handleNameBlur = this.handleNameBlur.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);

        this.handleTinBlur = this.handleTinBlur.bind(this);
        this.handleTinChange = this.handleTinChange.bind(this);

        this.handleZipcodeBlur = this.handleZipcodeBlur.bind(this);
        this.handleZipcodeChange = this.handleZipcodeChange.bind(this);

        this.handleStreetBlur = this.handleStreetBlur.bind(this);
        this.handleStreetChange = this.handleStreetChange.bind(this);

        this.handleCityBlur = this.handleCityBlur.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);

        this.handleStateBlur = this.handleStateBlur.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);

        this.handleAccount_nbrBlur = this.handleAccount_nbrBlur.bind(this);
        this.handleAccount_nbrChange = this.handleAccount_nbrChange.bind(this);

        this.handleFATCABlur = this.handleFATCABlur.bind(this);
        this.handleFATCAChange = this.handleFATCAChange.bind(this);
    }




    renderToolTip = (props) => {
        return(
            <ReactTooltip className='tooltip-container' id={props.input} place="right" type="dark" effect="solid">
                 {props.tip}
            </ReactTooltip>
        )
    };
    


    handleNameChange(e) {
        this.setState({ name:e.target.value, isTouchedName:true }, () => {
            this.props.updateRecipient(this.state)
        });
    }

    handleNameBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        if (!value) {
            errorMessage = 'Payer name is required.'
        } 

        this.setState({nameError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };



    handleTinChange(e) {
        this.setState({ tin:e.target.value, isTouchedTin:true }, () => {
            this.props.updateRecipient(this.state)
        });
    }

    handleTinBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        if(value.length !== 9){
            errorMessage = 'Payer TIN is not valid.  Must be 9 digits.'
        }
        if (!value) {
            errorMessage = 'TIN is required.'
        } 

        this.setState({tinError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };



    handleStreetChange(e) {
        this.setState({ street:e.target.value, isTouchedStreet:true }, () => {
            this.props.updateRecipient(this.state)
        });
    }

    handleStreetBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        // if (!value) {
        //     errorMessage = 'Payer street address is required.'
        // } 

        this.setState({streetError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };




    handleCityChange(e) {
        this.setState({ city:e.target.value, isTouchedCity:true }, () => {
            this.props.updateRecipient(this.state)
        });
    }

    handleCityBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        // if (!value) {
        //     errorMessage = 'Payer city is required.'
        // } 

        this.setState({cityError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };



    handleStateChange(e) {
        this.setState({ state:e.target.value, isTouchedState:true }, () => {
            this.props.updateRecipient(this.state)
        });
    }

    handleStateBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        if (!value) {
            errorMessage = 'Payer state is required.'
        } 

        this.setState({stateError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };






    handleZipcodeChange(e) {
        let zip = e.target.value;
        var zipURL = "http://ziptasticapi.com/" + zip

        this.setState({isTouchedZipcode: true, isTouchedCity:true, isTouchedState:true});

        if (zip.length === 5) {
            fetch(zipURL)
            .then(response => response.json())
            .then(data => {
                document.getElementById('cityInput').value = data.city
                document.getElementById('stateInput').value = data.state
                this.setState({ 
                    city: data.city || '',
                    state: data.state || '',
                    zipcode: zip,
                });
            }).then(() => {
                this.props.updateRecipient(this.state)
            })
        } 
    }
    
    handleZipcodeBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        if(value.length !== 5){
            errorMessage = 'Payer zipcode is not valid. Length must be 5 digits.'
        }
        if (!value) {
            errorMessage = 'Payer zipcode is required.'
        } 

        this.setState({zipcodeError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };




    handleAccount_nbrChange(e) {
        this.setState({ account_nbr:e.target.value, isTouchedAccount_nbr:true }, () => {
            this.props.updateRecipient(this.state)
        });
    }

    handleAccount_nbrBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        if (this.state.FATCA  && !value) {
            errorMessage = 'Recipient account is required if FATCA is checked.'
        }

        console.log(errorMessage)

        this.setState({account_nbrError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };



    handleFATCAChange(e) {
        this.setState({ FATCA:!this.state.FATCA, isTouchedFATCA:true }, () => {
            this.props.updateRecipient(this.state)
        });
    }

    handleFATCABlur(e) {
        let value = e.target.value; 
        let errorMessage = ''


        this.setState({FATCAError:errorMessage}, () => {
            this.props.updateRecipient(this.state)
        })
    };





        
    render() {            
        let errorStyle = {border:'1px solid red'}

        console.log(this.state)

        return (
        <div>
            <div className="input-group" align="left">
                <h4>Recipient Information</h4>
            </div>



            <div align="left">
                <label>Payer Name *</label>
                <div className="form-group" align="left" >
                    <input type="text" className="form-control" id="name" 
                        style={this.state.nameError ? errorStyle : null}
                        onChange={(e) => this.handleNameChange(e)} 
                        onBlur={(e) => this.handleNameBlur(e)} 
                        data-for='name' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the payer's name. Required.", input: "name"} )}
                </div>
                <span style={{color:'red'}}>{this.state.nameError}</span>
            </div>


            <div align="left">
                <label>Federal Tax ID * XX-XXXXXXX</label>
                <div className="form-group" align="left" >
                    <input type="text" className="form-control" id="tin" 
                        style={this.state.tinError ? errorStyle : null}
                        onChange={(e) => this.handleTinChange(e)} 
                        onBlur={(e) => this.handleTinBlur(e)} 
                        data-for='tin' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the payer's Federal Tax ID.  Required.", input: "tin"} )}
                </div>
                <span style={{color:'red'}}>{this.state.tinError}</span>
            </div>


            <div align="left">
                <label>Payer Address *</label>
                <div className="form-group" align="left" >
                    <input type="text" className="form-control" id="street" 
                        style={this.state.streetError ? errorStyle : null}
                        onChange={(e) => this.handleStreetChange(e)} 
                        onBlur={(e) => this.handleStreetBlur(e)} 
                        data-for='street' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the payer's street address.  Required.", input: "street"} )}
                </div>
                <span style={{color:'red'}}>{this.state.streetError}</span>
            </div>


            <div align="left">
                <label>City *</label>
                <div className="form-group" align="left" >
                    <input type="text" className="form-control" id="cityInput" 
                        style={this.state.cityError ? errorStyle : null}
                        onChange={(e) => this.handleCityChange(e)} 
                        onBlur={(e) => this.handleCityBlur(e)} 
                        data-for='city' data-tip data-event='focus' data-event-off='blur'
                        readOnly
                    />
                    {this.renderToolTip( {tip:"Enter the payer's city.  Required.", input: "city"} )}
                </div>
                <span style={{color:'red'}}>{this.state.cityError}</span>
            </div>

 
            <div class="form-row" align="left">
                <div class="col">
                    <label>State *</label>
                    <div className="input-group" align="left" >
                        <input type="text" className="form-control" id="stateInput" 
                            style={this.state.stateError ? errorStyle : null}
                            onChange={(e) => this.handleStateChange(e)} 
                            onBlur={(e) => this.handleStateBlur(e)} 
                            data-for='state' data-tip data-event='focus' data-event-off='blur'
                            readOnly
                        />
                        {this.renderToolTip( {tip:"Enter the payer's state.  Required.", input: "state"} )}
                    </div>
                    <span style={{color:'red'}}>{this.state.stateError}</span>
                </div>
                <div class="col">
                    <label>Zipcode *</label>
                    <div className="input-group" align="left" >
                        <input type="text" className="form-control" id="zipcode" 
                            style={this.state.zipcodeError ? errorStyle : null}
                            onChange={(e) => this.handleZipcodeChange(e)} 
                            onBlur={(e) => this.handleZipcodeBlur(e)} 
                            data-for='zipcode' data-tip data-event='focus' data-event-off='blur'
                        />
                        {this.renderToolTip( {tip:"Enter the payer's zipcode.  Required.", input: "zipcode"} )}
                    </div>
                    <span style={{color:'red'}}>{this.state.zipcodeError}</span>
                </div>
            </div>







            <div align="left">
                <label>Account Number</label>
                <div className="form-group" align="left" >
                    <input type="text" className="form-control" id="account_nbr" 
                        style={this.state.account_nbrError ? errorStyle : null}
                        onChange={(e) => this.handleAccount_nbrChange(e)} 
                        onBlur={(e) => this.handleAccount_nbrBlur(e)} 
                        data-for='account_nbr' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the recipient's account number.  This field is required if the FATCA checkbox is checked.", input: "account_nbr"} )}
                </div>
                <span style={{color:'red'}}>{this.state.account_nbrError}</span>
            </div>


            <div align="left">
                <label>FATCA</label>
                <div className="input-group mb-3" >
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <input type="checkbox"   
                                checked={this.state.FATCA}
                                onChange={(e) => this.handleFATCAChange(e)} 
                                onBlur={(e) => this.handleFATCABlur(e)} 
                                data-for='FATCA' data-tip data-event='focus' data-event-off='blur'
                            />
                        </span>
                    </div>

                    <input readOnly className="form-control" />
                    {this.renderToolTip( {tip:"Foreign Account Tax Compliance Act.  Check the checkbox if you are a U.S. payer that is reporting per Chapter 4 of Regulations section 1.1471-4(d)(2)(iii)(A), or if you are a Foreign Financial Institution (FFI) reporting payments to a U.S. account.", input: "FATCA"} )}
                </div>
                <span style={{color:'red'}}>{this.state.FATCAError}</span>
            </div>





        </div>
    )}
}


function mapStateToProps(state) {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateRecipient: updateRecipient
    }, dispatch )
}

GetRecipientInfo = connect(mapStateToProps, mapDispatchToProps)(GetRecipientInfo);

export default GetRecipientInfo;



