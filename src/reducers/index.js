import { combineReducers } from 'redux';

import payerReducer from './payerReducer';
import recipientReducer from './recipientReducer';
import incomeReducer from './incomeReducer';
import taxYearReducer from './taxYearReducer';
import emailReducer from './emailReducer';


const rootReducer =  combineReducers({
  taxYear: taxYearReducer,
  payer: payerReducer,
  recipient: recipientReducer,
  income: incomeReducer,
  email: emailReducer,
});

export default rootReducer;