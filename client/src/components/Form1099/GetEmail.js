import React from 'react';
import ReactTooltip from 'react-tooltip'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateEmail } from '../../actions';

import isEmail from 'validator/lib/isEmail';



class GetEmail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            emailError:'',
            isTouchedEmail: false,
        }

        this.handleEmailBlur = this.handleEmailBlur.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
    }

    renderToolTip = (props) => {
        return(
            <ReactTooltip className='tooltip-container' id={props.input} place="right" type="dark" effect="solid">
                 {props.tip}
            </ReactTooltip>
        )
    };


    componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }


    validateAllEmail(){
        this.handleEmailBlur()
    }


    handleEmailChange(e) {
        this.setState({ email:e.target.value, isTouchedEmail:true }, () => {
            this.props.updateEmail(this.state)
        });
    }
    handleEmailBlur(e) {
        let value = this.refs.email.value;
        let errorMessage = ''

        if(!isEmail(value)) {
            errorMessage = 'Email is not a valid email address.'
        }
        if (!value) {
            errorMessage = 'Email is required.'
        } 

        this.setState({emailError:errorMessage, isTouchedEmail:true}, () => {
            this.props.updateEmail(this.state)
        })
    };


      
    render() {
        let errorStyle = {border:'1px solid red'}

        return(
            <div align="left">
                <label>Email address *</label>
                <div className="form-group" align="left" >
                    <input type="email" className="form-control" id="email"
                        ref='email' 
                        style={this.state.emailError ? errorStyle : null}
                        onChange={(e) => this.handleEmailChange(e)} 
                        onBlur={(e) => this.handleEmailBlur(e)} 
                        data-for='email' data-tip data-event='focus' data-event-off='blur'
                    />
                    {this.renderToolTip( {tip:"This is the email address to which your receipt will be sent.", input: "email"} )}
                </div>
                <span style={{color:'red'}}>{this.state.emailError}</span>
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
        updateEmail: updateEmail
    }, dispatch )
}
  
GetEmail = connect(mapStateToProps, mapDispatchToProps)(GetEmail);
  
export default GetEmail;



