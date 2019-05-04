import { UPDATE_INCOME } from "../actions/action-types";

const incomeState = {
    rent: '',
   
    royalties: '',
   
    other: '',
    
    federal_tax_withheld: '',
    
    non_employee_comp: '',

    s409a_income: '',
   
    s409a_deferrals: '',
   
    direct_sales: '',
    
    medical_payments: '',
    
    substitute_payments: '',
    
    fish_boat: '',
  
    golden: '',
   
    crop_ins: '',
  
    attorney: '',
   
    state_tax_withheld: '',
 
    state_tax_id: '',

    state_income: '',
}
  
export default function incomeReducer(state = incomeState, action) {
    switch( action.type ) {
        case UPDATE_INCOME: 
            return action.payload 
            
        default:
            return state;
    }
};
