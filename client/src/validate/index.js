import payerValidator from './payerValidator';
import recipientValidator from './recipientValidator';
import incomeValidator from './incomeValidator';
import emailValidator from './emailValidator';


export default function formValidator() {
    let errCount = 0;

    errCount = errCount + payerValidator();
    errCount = errCount + recipientValidator();
    errCount = errCount + incomeValidator();
    errCount = errCount + emailValidator();

    return errCount;
};