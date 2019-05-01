import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import blank1099 from '../../images/blank1099.png'; // local 1099

const canvg = require('canvg')
const jsPDF = require('jspdf')



class Download1099 extends React.Component {

    createCanvas(){
        //SVG data
        var svg = document.getElementById('editor');
        var data = (new XMLSerializer()).serializeToString(svg);

        //Create canvas
        var canvas = document.getElementById('canvas');
        canvg('canvas', data, {useCORS: true});


        //DOWNLOAD
        setTimeout(function(){ 
            var imgData = canvas.toDataURL("image/jpeg", 1.0);

            //Create PDF
            var pdf = new jsPDF({
                 orientation: 'p',
                 unit: 'in',
                 format: 'letter',
            });

            //Add Image at Scale
            pdf.addImage(imgData, 'JPEG', 0, 0, 8.5, 6);
            pdf.save("1099.pdf");

        }, 1500);
    }



    render(){
        let fontStyle = {fontSize:'13px', fontWeight:'600'}
        let checkStyle = {fontSize:'19px', fontWeight:'600'}
        let fontColor = 'black'

        let formImage = blank1099

        let imageWidth = '883px'
        let imageHeight = '600px'


        //NOT USED
        // email.email

        // let taxYear = {
        //     year:'2019',
        //     isVoid:this.props.taxYear.isVoid,
        //     isCorrected:this.props.taxYear.isCorrected,
        // }

        // let payer = {
        //     name:this.props.payer.name,

        //     street:this.props.payer.street,
        //     city:this.props.payer.city,
        //     state:this.props.payer.state,
        //     country:'USA',
        //     zipcode:this.props.payer.zipcode,
        //     phone:this.props.payer.phone,

        //     tin:this.props.payer.tin,
        // }

        // let recipient = {
        //     name:this.props.recipient.name,

        //     street:this.props.recipient.street,
        //     city:this.props.recipient.city,
        //     state:this.props.recipient.state,
        //     country:'USA',
        //     zipcode:this.props.recipient.zipcode,

        //     tin:this.props.recipient.tin,

        //     account_nbr:this.props.recipient.account_nbr,
        //     FATCA:this.props.recipient.FATCA,
        // }

        // let income = {
        //     rent:this.props.income.rent,
        //     royalties:this.props.income.royalties,
        //     other:this.props.income.other,

        //     federal_tax_withheld:this.props.income.federal_tax_withheld,
        //     non_employee_comp:this.props.income.non_employee_comp,
           
        //     s409a_deferrals:this.props.income.s409a_deferrals,
        //     s409a_income:this.props.income.s409a_income,

        //     fish_boat:this.props.income.fish_boat,
        //     medical_payments:this.props.income.medical_payments,
        //     substitute_payments:this.props.income.substitute_payments,

        //     direct_sales:this.props.income.direct_sales,
            
        //     crop_ins:null,
        //     golden:null,
        //     attorney:null,

        //     state_tax_withheld:this.props.income.state_tax_withheld,
        //     state_tax_id:this.props.income.state_tax_id,
        //     state_income:this.props.income.state_income,
        // }





        let taxYear = {
            year:'2019',
            isVoid:'on',
            isCorrected:'on'
        }

        let payer = {
            name:'Fake Name',

            street:'123 Fake St.',
            city:'Irvine',
            state:'CA',
            country:'USA',
            zipcode:'92618',
            phone:'7032033084',

            tin:'123901290',
        }

        let recipient = {
            name:'Fake Name',

            street:'123 Fake Lane',
            city:'Irvine',
            state:'CA',
            country:'USA',
            zipcode:'92618',

            tin:'12391023990123',

            account_nbr:'1239012039123',
            FATCA:'on',
        }

        let income = {
            rent:'12391203912',
            royalties:'1293190239102',
            other:'192201292',

            federal_tax_withheld:'129302',

            non_employee_comp:'90120399123',
            substitute_payments:'12931290',
           
            s409a_deferrals:'1923902',
            s409a_income:'4993034',

            fish_boat:'12391209312',
            medical_payments:'129012',
            

            direct_sales:'on',
            golden:'123990123',
            attorney:'120910',
            
            crop_ins:'1239',
            
            state_tax_withheld:'1293091230912',
            state_tax_id:'12901290',
            state_income:'1299209290',
        }


        return (
            <div>
                <div>
                <svg width="100%" viewBox="0 0 883 600" id='editor' xmlnsXlink="http://www.w3.org/1999/xlink">
                    <image xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={formImage} x="0" y="0" height={imageHeight} width={imageWidth}/>
             
                    <text x="253" y="43" fill={fontColor} style={checkStyle}>{taxYear.isVoid ? 'x' : null}</text>
                    <text x="341" y="43" fill={fontColor} style={checkStyle}>{taxYear.isCorrected ? 'x' : null}</text>

                    <text x="60" y="100" fill={fontColor} style={fontStyle}>{payer.name}</text>
                    <text x="60" y="125" fill={fontColor} style={fontStyle}>{payer.street}</text>
                    <text x="60" y="150" fill={fontColor} style={fontStyle}>{payer.city}, {payer.state} {payer.country} {payer.zipcode}</text>
                    <text x="60" y="175" fill={fontColor} style={fontStyle}>{payer.phone}</text>
                    <text x="60" y="242" fill={fontColor} style={fontStyle}>{payer.tin}</text>

                    <text x="250" y="242" fill={fontColor} style={fontStyle}>{recipient.tin}</text>
                    <text x="60" y="306" fill={fontColor} style={fontStyle}>{recipient.name}</text>
                    <text x="60" y="363" fill={fontColor} style={fontStyle}>{recipient.street}</text>
                    <text x="60" y="417" fill={fontColor} style={fontStyle}>{recipient.city}, {recipient.state} {recipient.country} {recipient.zipcode}</text>
                    <text x="60" y="472" fill={fontColor} style={fontStyle}>{recipient.account_nbr}</text>
                    <text x="314" y="477" fill={fontColor} style={fontStyle}>{recipient.FATCA ? 'x' : null}</text>

                    <text x="60" y="538" fill={fontColor} style={fontStyle}>{income.s409a_deferrals}</text>
                    <text x="248" y="538" fill={fontColor} style={fontStyle}>{income.s409a_income}</text>

                    <text x="435" y="97" fill={fontColor} style={fontStyle}>{income.rent}</text>
                    <text x="435" y="152" fill={fontColor} style={fontStyle}>{income.royalties}</text>

                    <text x="435" y="189" fill={fontColor} style={fontStyle}>{income.other}</text>
                    <text x="590" y="189" fill={fontColor} style={fontStyle}>{income.federal_tax_withheld}</text>

                    <text x="435" y="263" fill={fontColor} style={fontStyle}>{income.fish_boat}</text>
                    <text x="590" y="263" fill={fontColor} style={fontStyle}>{income.medical_payments}</text>

                    <text x="435" y="336" fill={fontColor} style={fontStyle}>{income.non_employee_comp}</text>
                    <text x="590" y="336" fill={fontColor} style={fontStyle}>{income.substitute_payments}</text>

                    <text x="554" y="390" fill={fontColor} style={fontStyle}>{income.direct_sales? 'x' : null}</text>
                    <text x="590" y="392" fill={fontColor} style={fontStyle}>{income.crop_ins}</text>

                    <text x="435" y="484" fill={fontColor} style={fontStyle}>{income.golden}</text>
                    <text x="590" y="484" fill={fontColor} style={fontStyle}>{income.attorney}</text>

                    <text x="435" y="521" fill={fontColor} style={fontStyle}>{income.state_tax_withheld}</text>
                    <text x="590" y="521" fill={fontColor} style={fontStyle}>{income.state_tax_id}</text>
                    <text x="746" y="521" fill={fontColor} style={fontStyle}>{income.state_income}</text>
                </svg>
                </div>

                <br/>
                <button className='btn btn-lg btn-primary' onClick={this.createCanvas.bind(this)}>Download 1099 PDF</button>

                <canvas style={{display:'none'}} id='canvas' height={imageHeight} width={imageWidth} ></canvas>
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
      email: state.email
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ 

  }, dispatch )
}

Download1099 = connect(mapStateToProps, mapDispatchToProps)(Download1099);

export default Download1099;



