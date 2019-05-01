import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {

    render() {
        return (
            <div className='shadow-bottom'>
            <div className='container'>
            <div className='row'>
            <div className='col-sm-10 offset-sm-1'>
            <nav className="navbar navbar-light" style={{paddingBottom:'2px', paddingTop:'2px', paddingLeft:'0px', paddingRight:'0px'}}>
                <span className="navbar-brand">
                    <i style={{paddingRight:'8px', fontSize:'22px'}} className="fab fa-telegram-plane"></i>
                    <span style={{fontSize:'24px'}}><span style={{fontStyle:'oblique', fontWeight:'700'}}>Fast</span> 1099</span>
                </span>

                <div className='col-2 text-right'>
                   
                </div>
            </nav>
            </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Navbar;

