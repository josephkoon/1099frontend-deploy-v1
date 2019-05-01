import { UPDATE_RECIPIENT } from "../actions/action-types";

const recipientState = {

}
  
  export default function recipientReducer(state = recipientState, action) {
    switch( action.type ) {
        case UPDATE_RECIPIENT: 
            return action.payload 
            
        default:
            return state;
    }
};
