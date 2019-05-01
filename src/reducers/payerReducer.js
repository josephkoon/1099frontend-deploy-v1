import { UPDATE_PAYER } from "../actions/action-types";

const payerState = {

}

export default function payerReducer(state = payerState, action) {
    switch( action.type ) {
        case UPDATE_PAYER: 
            return action.payload 
            
        default:
            return state;
    }
};

