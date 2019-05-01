import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import jumbotron from '../images/jumbotron.jpg'; // local 1099
import blank1099 from '../images/blank1099.png'; // local 1099

import sample1 from '../images/sample1.png'; // local 1099
import sample2 from '../images/sample2.png'; // local 1099
import sample3 from '../images/sample3.png'; // local 1099

import secure from '../images/secure.png'; // local 1099
import guarantee from '../images/guarantee.png'; // local 1099
import lock from '../images/lock.png'

import Navbar from './Navbar';
import Footer from './Footer';

class Landing extends Component {
    render() {

        let headerImage = {backgroundImage:`url(${jumbotron})`, backgroundSize:'cover', borderRadius:'0px', marginBottom:'0px'}

        return (
            <div>
                <div style={{backgroundColor:'white'}}>
                    <Navbar/>
                </div>

                <div style={headerImage}>
                <div className='container' style={{position:'relative', paddingBottom:'84px', paddingTop:'84px'}}>

                <div style={{position:'absolute', top:'21%', right:'0%'}}>
                    <div className='text-center' style={{height:'100px', width:'100px', padding:'8px', border:'1px solid gray', backgroundColor:'white', borderRadius:'50%'}}>
                        <div style={{marginBottom:'0px', marginTop:'12px', fontSize:'18px'}}><strong>$3.99</strong></div>
                        <div style={{fontSize:'11px'}}>Regularly $9.99</div>
                    </div>
                </div>

                <div className='row'>
                <div className='col-10 offset-1 text-center'>
                    <h1 style={{color:'white'}}><strong>Create a Secure 1099 in Minutes</strong></h1>
                    <br/>
                    <h4 style={{color:'white'}}>Fill Out. Preview. Download.</h4>
                    <br/>
                    <br/>
                    <Link to='/form'>
                        <a class="btn btn-primary btn-lg" href="#" role="button" style={{paddingLeft:'72px', paddingRight:'72px'}}>
                            <strong>Get Started </strong> 
                            <i style={{marginLeft:'8px', fontSize:'18px'}} class="fas fa-angle-double-right"></i>
                        </a>
                    </Link>
                </div>
                </div>
                </div>
                </div>


                <div style={{backgroundColor:'white'}}>
                <div className='container' style={{paddingBottom:'48px', paddingTop:'36px'}}>
                <div className='row'>
                    <div className='col-4 offset-1 text-left' style={{paddingLeft:'0px'}}>
                        <img src={blank1099} style={{width:'90%'}} alt="..." />
                    </div>

                    <div className='col-4 offset-1 text-left'>
                        <h5>What is a 1099?</h5>
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
                        <h5>How does our 1099 generator work?</h5>
                        <br/>
                    </div>

                    <div className='col-4'>
                    <div className="preview-card">
                        <img src={sample1} style={{width:'60%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
                        <div style={{paddingLeft:'8px', paddingRight:'8px'}}>
                            <br/>
                            <h6><strong>1</strong> Enter your payer and employee information.</h6>
                        </div>
                    </div>
                    </div>

                    <div className='col-4'>
                    <div className="preview-card">
                        <img src={sample2} style={{width:'60%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
                        <div style={{paddingLeft:'8px', paddingRight:'8px'}}>
                            <br/>
                            <h6><strong>2</strong> Preview your validated and filled out form online.</h6>
                        </div>
                    </div>
                    </div>

                    <div className='col-4'>
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
                    <div className='col-4'>
                        <img  src={lock} style={{width:'15%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
                        <p style={{marginTop:'20px'}}>SSL Secured</p>
                    </div>

                    <div className='col-4'>
                        <img src={guarantee} style={{width:'15%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
                        <p style={{marginTop:'20px'}}>Satisfaction Guaranteed</p>
                    </div>

                    <div className='col-4'>
                        <img src={secure} style={{width:'15%', marginLeft:'auto', marginRight:'auto'}} alt="..." />
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





