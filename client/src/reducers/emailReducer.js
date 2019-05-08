import { UPDATE_EMAIL } from "../actions/action-types";


const emailState = {
	email: '',
}
  

export default function taxYearReducer(state = emailState, action) {
    switch( action.type ) {
        case UPDATE_EMAIL: 
            return action.payload 
            
        default:
            return state;
    }
};


  