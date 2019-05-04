import React, { Component } from 'react';

import { Router, Route } from 'react-router-dom';
import history from './history';

import LandingPage from './components/LandingPage';
import FormPage from './components/FormPage';
import PreviewPage from './components/PreviewPage'
import CheckoutPage from './components/CheckoutPage';
import ThanksPage from './components/ThanksPage';

import { Elements, StripeProvider } from 'react-stripe-elements';

//const key ="pk_test_TYooMQauvdEDq54NiTphI7jx";  // demo test key
var stripeKey = "pk_test_mplZpfWve0Ya8im2sguzL8dI";    // my personal test key


class App extends Component {
    render() {
        return (
        	<StripeProvider apiKey={stripeKey}>
            <div className="App">
				<Router history={history} >

					<Route path="/" exact component={LandingPage} />
					<Route path="/form" exact component={FormPage} />
					<Route path="/preview" exact component={PreviewPage} />
					<Elements>
						<Route path="/checkout" exact component={CheckoutPage} />
					</Elements>
					<Route path="/thanks" exact component={ThanksPage} />

				</Router>
            </div>
            </StripeProvider>
        );
    }
}

export default App;
