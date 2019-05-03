import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import credit from '../images/credit.png'; // local 1099

class Navbar extends Component {
    render() {
        return (
            <div style={{backgroundColor:'rgb(50,50,50)'}}>
            <div className='container' style={{paddingBottom:'36px', paddingTop:'24px'}}>
            <div className='row'>
            <div className='col-10 offset-1'>

                <div className='row'>
                <div className='col-4 col-sm-4 text-left'>
                    <span style={{color:'white', fontSize:'13px'}}><strong>INSTANT 1099</strong></span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'13px'}}>Get Started</span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'13px'}}>FAQ</span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'12px'}}>© Copyright 2019 - All Rights Reserved  </span>
                </div>

                <div className='col-4 col-sm-4 text-center'>
                    <span style={{color:'white', fontSize:'13px'}}><strong>Privacy Policy</strong></span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'13px'}}></span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'13px'}}></span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'13px'}}></span>
                </div>

                <div className='col-4 col-sm-3 offset-sm-1 text-right'>
                    <span style={{color:'white', fontSize:'13px'}}><strong>Terms of Use</strong></span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'13px'}}></span>
                    <br/>
                    <br/>
                    <span style={{color:'white', fontSize:'13px'}}></span>
                    <br/>
                    <br/>
                    <img src={credit} style={{width:'75%'}} alt="..." />
                </div>
                </div>

            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Navbar;

