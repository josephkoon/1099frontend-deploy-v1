import store from '../store';
import {validateIncome} from '../actions';


export default function incomeValidator() {
    const incomeErrors = {
        errCount: 0,
        income: null
    }
    
    const income = store.getState().income;

    if (!income.rent
            && !income.royalties 
            && !income.other 
            && !income.non_employee_comp
            && !income.federal_tax_withheld
            && !income.non_employee_comp
            && !income.s409a_income
            && !income.s409a_deferrals
            && !income.fish_boat
            && !income.medical_payments
            && !income.substitute_payments
            && !income.direct_sales
            && !income.state_tax_withheld
            && !income.state_tax_id
            && !income.state_income
        ) {
        incomeErrors.income = 'At least one field from the Income section must be filled.';
        incomeErrors.errCount++;
    } else {
        incomeErrors.income = null;
        incomeErrors.errCount = 0;
    }

    store.dispatch(validateIncome(incomeErrors));
    return incomeErrors.errCount;
};


