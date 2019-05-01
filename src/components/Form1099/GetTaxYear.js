import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateTaxYear } from '../../actions';


const years = [
    {
      year: "2019"
    },
    {
      year: "2018"
    },
    {
      year: "2017"
    },
    {
      year: "2016"
    },
    {
      year: "2015"
    },
    {
      year: "2014"
    }
  ]
  


class GetTaxYear extends React.Component {
    constructor(){
        super()

        this.state = {
            year: "2019",
            isVoid: false,
            isCorrected: false
        }; 
    }


    handleYearChange(e) {
        this.setState({ year:e.target.value}, () => {
            this.props.updateTaxYear(this.state)
        });
    }


    handleIsVoidChange(e) {
        this.setState({ isVoid:!this.state.isVoid}, () => {
            this.props.updateTaxYear(this.state)
        });
    }

    handleIsCorrectedChange(e) {
        this.setState({ isCorrected:!this.state.isCorrected}, () => {
            this.props.updateTaxYear(this.state)
        });
    }


  


  render() {
    const year = years.map( item => <option key={item.year}> {item.year} </option>)

    console.log(this.props)


    return (
        <div>
            <div className="form-group" align="left">
                <label htmlFor="selectTaxYear"><h4>Tax Year</h4></label>
                <select className="form-control" 
                onChange={(e) => this.handleYearChange(e)} 
                >
                {year}
                </select>
            </div>
        <br/>
        <div className="form-check form-check-inline" align="left" >
            <input type="checkbox" className="form-check-input"  
            checked={this.state.isVoid}
            onChange={(e) => this.handleIsVoidChange(e)} 
            />
            <label style={{fontSize:'18px'}} className="form-check-label" htmlFor="voidCheck">VOID</label>
        </div>
        <div className="form-check form-check-inline" align="right" >
            <input type="checkbox" className="form-check-input"  
            checked={this.state.isCorrected}
            onChange={(e) => this.handleIsCorrectedChange(e)} 
            />
            <label style={{fontSize:'18px'}} className="form-check-label" htmlFor="correctedCheck">CORRECTED</label>
        </div>
        </div>
        )
    }
}






  
function mapStateToProps(state) {
    return{
        taxYear:state.taxYear
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateTaxYear: updateTaxYear
    }, dispatch )
}

GetTaxYear = connect(mapStateToProps, mapDispatchToProps)(GetTaxYear);

export default GetTaxYear;




