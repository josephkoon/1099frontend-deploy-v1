import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import jumbotron from '../images/jumbotron.jpg'; // local 1099
import blank1099image from '../images/blank1099image.png'; // local 1099

import sample1 from '../images/sample1.png'; // local 1099
import sample2 from '../images/sample2.png'; // local 1099
import sample3 from '../images/sample3.png'; // local 1099

import secure from '../images/secure.png'; // local 1099
import guarantee from '../images/guarantee.png'; // local 1099
import lock from '../images/lock.png'

import Navbar from './Navbar';
import Footer from './Footer';

class Landing extends Component {

    //Block Browser Back
    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render() {

        let headerImage = {backgroundImage:`url(${jumbotron})`, backgroundSize:'cover', borderRadius:'0px', marginBottom:'0px'}

        return (
            <div>
                <div style={{backgroundColor:'white'}}>
                    <Navbar/>
                </div>

                <div style={headerImage}>
                <div className='container' style={{position:'relative', paddingBottom:'84px', paddingTop:'84px'}}>

                <div style={{position:'absolute', top:'10%', right:'0%'}} >
                    <div className='price-shadow text-center' style={{height:'100px', width:'100px', padding:'8px', border:'1px solid gray', backgroundColor:'white', borderRadius:'50%'}}>
                        <div style={{marginBottom:'0px', marginTop:'12px', fontSize:'18px'}}><strong>$3.99</strong></div>
                        <div style={{fontSize:'11px'}}>Regularly $9.99</div>
                    </div>
                </div>

                <div className='row'>
                <div className='col-10 offset-1 text-center'>
                    <br/>
                    <h1 style={{color:'white'}}><strong>Create a Secure 1099 in Minutes</strong></h1>
                    <br/>
                    <h4 style={{color:'white'}}>Fill Out. Preview. Download.</h4>
                    <br/>
                    <br/>
                    <Link to='/form'>
                        <a class="btn btn-primary btn-lg" href="#" role="button" >
                            <span style={{marginLeft:'40px', marginRight:'40px'}}>
                            <strong>Get Started </strong> 
                            <i style={{marginLeft:'2px', fontSize:'18px'}} class="fas fa-angle-double-right"></i>
                            </span>
                        </a>
                    </Link>
                </div>
                </div>
                </div>
                </div>


                <div style={{backgroundColor:'white'}}>
                <div className='container' style={{paddingBottom:'48px', paddingTop:'36px'}}>
                <div className='row'>
                    <div className='col-12 col-sm-4 offset-sm-1 text-center' style={{paddingLeft:'0px'}}>
                        <img src={blank1099image} style={{width:'90%'}} alt="..." />
                    </div>

                    <div className='col-12 col-sm-4 offset-sm-1 text-left'>
                        <h4>What is a 1099?</h4>
                        <br/>
                        <p>The Form 1099-MISC is an Internal Revenue Service (IRS) tax return document used to report miscellaneous payments made to nonemployee individuals, such as independent contractors, during the calendar year.</p>
                        <p>Read our FAQ</p>
                    </div>
                </div>
                </div>
                </div>


                <div style={{backgroundColor:'rgb(225,230,235)'}}>
                <div className='container' style={{paddingBottom:'60px', paddingTop:'48px'}}>
                <div className='row'>
                <div className='col-10 offset-1'>
                    <div className='row'>
                    <div className='col-12 text-left'>
                        <h4>How does our 1099 generator work?</h4>
                        <br/>
                    </div>

                    <div className='col-12 col-sm-4' style={{padding:'12px'}}>
                    <div className="preview-card">
                        <img src={sample1} style={{width:'60%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
                        <div style={{paddingLeft:'8px', paddingRight:'8px'}}>
                            <br/>
                            <h6><strong>1</strong> Enter your payer and employee information.</h6>
                        </div>
                    </div>
                    </div>

                    <div className='col-12 col-sm-4' style={{padding:'12px'}}>
                    <div className="preview-card">
                        <img src={sample2} style={{width:'60%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
                        <div style={{paddingLeft:'8px', paddingRight:'8px'}}>
                            <br/>
                            <h6><strong>2</strong> Preview your validated and filled out form online.</h6>
                        </div>
                    </div>
                    </div>

                    <div className='col-12 col-sm-4' style={{padding:'12px'}}>
                    <div className="preview-card">
                        <img src={sample3} style={{width:'60%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
                        <div style={{paddingLeft:'8px', paddingRight:'8px'}}>
                            <br/>
                            <h6><strong>3</strong> Download a formatted PDF to mail or email.</h6>
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
                </div>


                <div style={{backgroundColor:'white', textAlign:'center'}}>
                <div className='container' style={{paddingBottom:'24px', paddingTop:'24px'}}>
                <div className='row'>
                    <div className='col-4 col-sm-2 offset-sm-1'>
                        <img src={lock} style={{width:'50%', height:'auto'}} alt="..." />
                        <p style={{marginTop:'20px'}}>SSL Secured</p>
                    </div>

                    <div className='col-4 col-sm-2 offset-sm-2'>
                        <img src={guarantee} style={{width:'50%', height:'auto'}} alt="..." />
                        <p style={{marginTop:'20px'}}>Satisfaction Guaranteed</p>
                    </div>

                    <div className='col-4 col-sm-2 offset-sm-2'>
                        <img src={secure} style={{width:'50%', height:'auto'}} alt="..." />
                        <p style={{marginTop:'20px'}}>Verified</p>
                    </div>
                </div>
                </div>
                </div>

                <Footer/>
            </div>
        );
    }
}

export default Landing;





