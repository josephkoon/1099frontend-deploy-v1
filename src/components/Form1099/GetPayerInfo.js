import React from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip'

import { updatePayer } from '../../actions';

import isPhone from 'validator/lib/isMobilePhone';


class GetPayerInfo extends React.Component {
    constructor(props){
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

            phone: '',
            phoneError:'',
            isTouchedPhone: false,
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

        this.handlePhoneBlur = this.handlePhoneBlur.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
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
            this.props.updatePayer(this.state)
        });
    }

    handleNameBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        if (!value) {
            errorMessage = 'Payer name is required.'
        } 

        this.setState({nameError:errorMessage}, () => {
            this.props.updatePayer(this.state)
        })
    };



    handleTinChange(e) {
        this.setState({ tin:e.target.value, isTouchedTin:true }, () => {
            this.props.updatePayer(this.state)
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
            this.props.updatePayer(this.state)
        })
    };



    handleStreetChange(e) {
        this.setState({ street:e.target.value, isTouchedStreet:true }, () => {
            this.props.updatePayer(this.state)
        });
    }

    handleStreetBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        if (!value) {
            errorMessage = 'Payer street address is required.'
        } 

        this.setState({streetError:errorMessage}, () => {
            this.props.updatePayer(this.state)
        })
    };




    handleCityChange(e) {
        this.setState({ city:e.target.value, isTouchedCity:true }, () => {
            this.props.updatePayer(this.state)
        });
    }

    handleCityBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        // if (!value) {
        //     errorMessage = 'Payer city is required.'
        // } 

        this.setState({cityError:errorMessage}, () => {
            this.props.updatePayer(this.state)
        })
    };



    handleStateChange(e) {
        this.setState({ state:e.target.value, isTouchedState:true }, () => {
            this.props.updatePayer(this.state)
        });
    }

    handleStateBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        // if (!value) {
        //     errorMessage = 'Payer state is required.'
        // } 

        this.setState({stateError:errorMessage}, () => {
            this.props.updatePayer(this.state)
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
                this.props.updatePayer(this.state)
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
            this.props.updatePayer(this.state)
        })
    };



    handlePhoneChange(e) {
        this.setState({ phone:e.target.value, isTouchedPhone:true }, () => {
            this.props.updatePayer(this.state)
        });
    }

    handlePhoneBlur(e) {
        let value = e.target.value; 
        let errorMessage = ''

        if(!isPhone(value)){
            errorMessage = 'Payer phone is invalid'
        }
        if (!value) {
            errorMessage = 'Payer phone is required.'
        } 

        this.setState({phoneError:errorMessage}, () => {
            this.props.updatePayer(this.state)
        })
    };






render() {
    let errorStyle = {border:'1px solid red'}



    return (
        <form>
            <div className="input-group" align="left">
                <h4>Payer Information</h4>
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
                <label>Phone Number * XXX-XXX-XXXX</label>
                <div className="form-group" align="left" >
                    <input type="text" className="form-control" id="phone" 
                        style={this.state.phoneError ? errorStyle : null}
                        onChange={(e) => this.handlePhoneChange(e)} 
                        onBlur={(e) => this.handlePhoneBlur(e)} 
                        data-for='phone' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"Enter the payer's phone number.  Required.", input: "phone"} )}
                </div>
                <span style={{color:'red'}}>{this.state.phoneError}</span>
            </div>


        </form>
    )
}
}


function mapStateToProps(state) {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updatePayer: updatePayer
    }, dispatch )
}

GetPayerInfo = connect(mapStateToProps, mapDispatchToProps)(GetPayerInfo);

export default GetPayerInfo;





