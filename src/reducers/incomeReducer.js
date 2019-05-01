import { UPDATE_INCOME } from "../actions/action-types";

const incomeState = {
 
}
  
export default function incomeReducer(state = incomeState, action) {
    switch( action.type ) {
        case UPDATE_INCOME: 
            return action.payload 
            
        default:
            return state;
    }
};
