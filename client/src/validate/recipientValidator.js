import store from '../store';
import {validateRecipient} from '../actions';


export default function recipientValidator() {
    const recipientErrors = {
        errCount: 0,
        name: null,
        tin: null,
        street: null,
        city: null,
        state: null,
        zipcode: null,
        account: null
    }
        
    const recipient = store.getState().recipient;

    // if (!recipient.name) {
    //     recipientErrors.name = 'Recipient name is required.';
    //     recipientErrors.errCount++;
    // }

    // if (!recipient.tin) {
    //     recipientErrors.tin = 'Recipient TIN is required.'
    //     recipientErrors.errCount++;
    // } else if (recipient.tin.length !== 9) {
    //     recipientErrors.tin = 'Recipient TIN is not valid.  Must be 9 digits.'
    //     recipientErrors.errCount++;
    // }
    
    // if (!recipient.street ) {
    //     recipientErrors.street = 'Recipient street address is required.'
    //     recipientErrors.errCount++;
    // }
    
    // if (!recipient.city ) {
    //     recipientErrors.city = 'Recipient city is required.'
    //     recipientErrors.errCount++;
    // }
    
    // if (!recipient.zipcode ) {
    //     recipientErrors.zipcode = 'Recipient Zip code is required.'
    //     recipientErrors.errCount++;
    // } else if (recipient.zipcode.length !== 5) {
    //     recipientErrors.zipcode = 'Recipient Zip code is not valid.  Length must be 5 digits.'
    //     recipientErrors.errCount++;
    // }

    // if (recipient.FATCA === 'on' && !recipient.account) {
    //     recipientErrors.account = 'Recipient account is required if FATCA is checked.'
    //     recipientErrors.errCount++;
    // }

    store.dispatch(validateRecipient(recipientErrors));
    return recipientErrors.errCount;
};


