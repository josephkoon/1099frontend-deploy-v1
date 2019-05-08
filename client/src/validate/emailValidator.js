import isEmail from 'validator/lib/isEmail';

import store from '../store';
import {validateEmail} from '../actions';

export default function emailValidator() {
    const emailErrors = {
        errCount: 0,
        email: null
    }
    
    const email = store.getState().email;

    // if (!email.email) {
    //     emailErrors.email = 'Email is required.';
    //     emailErrors.errCount++;
    // } else if (!isEmail(email.email)) {
    //     emailErrors.email = 'Email is not a valid email address.';
    //     emailErrors.errCount++;
    // }

    store.dispatch(validateEmail(emailErrors));
    return emailErrors.errCount;
};


