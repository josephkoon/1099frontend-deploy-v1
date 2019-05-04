import { UPDATE_RECIPIENT } from "../actions/action-types";

const recipientState = {
    name: '',
    
    tin: '',
    
    zipcode: '',
    
    street: '',
    
    city: '',
    
    state: '',
    
    account_nbr: '',
    
    FATCA:'',       
}
  
  export default function recipientReducer(state = recipientState, action) {
    switch( action.type ) {
        case UPDATE_RECIPIENT: 
            return action.payload 
            
        default:
            return state;
    }
};
