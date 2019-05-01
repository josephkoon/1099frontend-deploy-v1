import React, { Component } from 'react';

import { Router, Route } from 'react-router-dom';
import history from './history';

import LandingPage from './components/LandingPage';
import FormPage from './components/FormPage';
import PreviewPage from './components/PreviewPage'
import CheckoutPage from './components/CheckoutPage';
import ThanksPage from './components/ThanksPage';

class App extends Component {
    render() {
        return (
            <div className="App">
				<Router history={history} >

					<Route path="/" exact component={LandingPage} />
					<Route path="/form" exact component={FormPage} />
					<Route path="/preview" exact component={PreviewPage} />
					<Route path="/checkout" exact component={CheckoutPage} />
					<Route path="/thanks" exact component={ThanksPage} />

				</Router>
            </div>
        );
    }
}

export default App;
