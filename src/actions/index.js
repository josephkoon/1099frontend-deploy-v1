import { 
	UPDATE_TAX_YEAR, 
	UPDATE_PAYER, 
	UPDATE_RECIPIENT, 
	UPDATE_INCOME, 
	UPDATE_EMAIL, 
	VALIDATE_PAYER, 
	VALIDATE_RECIPIENT, 
	VALIDATE_INCOME, 
	VALIDATE_EMAIL
} from "./action-types";


export function updateTaxYear(state) {
	return {
		type: UPDATE_TAX_YEAR,
		payload: state 
	}
}

export function updatePayer(state) {
	return {
		type: UPDATE_PAYER,
		payload: state 
	}
}

export function updateRecipient(state) {
	return {
		type: UPDATE_RECIPIENT,
		payload: state 
	}
}

export function updateIncome(state) {
	return {
		type: UPDATE_INCOME,
		payload: state 
	}
}

export function updateEmail(state) {
	return {
		type: UPDATE_EMAIL,
		payload: state 
	}
}



// VALIDATORS
export function validatePayer(state) {
	return {
		type: VALIDATE_PAYER,
		payload: state 
	}
}

export function validateRecipient(state) {
	return {
		type: VALIDATE_RECIPIENT,
		payload: state 
	}
}

export function validateIncome(state) {
	return {
		type: VALIDATE_INCOME,
		payload: state 
	}
}

export function validateEmail(state) {
	return {
		type: VALIDATE_EMAIL,
		payload: state 
	}
}





