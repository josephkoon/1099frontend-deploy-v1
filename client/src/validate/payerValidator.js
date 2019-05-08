import isPhone from 'validator/lib/isMobilePhone';
import store from '../store';
import {validatePayer} from '../actions';


export default function payerValidator() {
    const payerErrors = {
        errCount: 0,
        name: null,
        tin: null,
        street: null,
        city: null,
        state: null,
        zipcode: null,
        phone: null
    }
        
    const payer = store.getState().payer;

    // if (!payer.name ) {
    //     payerErrors.name = 'Payer name is required.';
    //     payerErrors.errCount++;
    // }



    // if (!payer.tin ) {
    //     payerErrors.tin = 'Payer TIN is required.'
    //     payerErrors.errCount++;
    // }
    // if (payer.tin.length !== 9) {
    //     payerErrors.tin = 'Payer TIN is not valid.  Must be 9 digits.'
    //     payerErrors.errCount++;
    // }



    // if (!payer.street ) {
    //     payerErrors.street = 'Payer street address cannot be empty.'
    //     payerErrors.errCount++;
    // }


    // if (!payer.city ) {
    //     payerErrors.city = 'Payer city is required.'
    //     payerErrors.errCount++;
    // }


    // if (!payer.zipcode ) {
    //     payerErrors.zipcode = 'Payer Zip code is required.'
    //     payerErrors.errCount++;
    // }
    // if (payer.zipcode.length !== 5) {
    //     payerErrors.zipcode = 'Payer Zip code is not valid.  Length must be 5 digits.'
    //     payerErrors.errCount++;
    // }

    // if (!payer.phone ) {
    //     payerErrors.phone = 'Payer phone is required'
    //     payerErrors.errCount++;
    // }
    // if (!isPhone(payer.phone)) {
    //     payerErrors.phone = 'Payer phone is invalid'
    //     payerErrors.errCount++;
    // }

    store.dispatch(validatePayer(payerErrors));
    return payerErrors.errCount;
};


