import { UPDATE_TAX_YEAR } from "../actions/action-types";

const taxYearInitialState = {
    year: '',
    
    isVoid: '',

    isCorrected: ''
}

  
export default function taxYearReducer(state = taxYearInitialState, action) {
    switch( action.type ) {
        case UPDATE_TAX_YEAR: 
            return action.payload 
            
        default:
            return state;
    }
};


  