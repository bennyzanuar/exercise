import { FETCH_DATA, REMOVE_DATA, CREATE_DATA, CHANGE_AMOUNT } from '../actions'

const defaultDisplay = ['IDR','EUR','GBP','SGD']
let ratesDisplay = {}
let rates = {}

export default (currentState, action) => {
    currentState = currentState || {};
    let amount = action.amount || 0

    switch (action.type) {
        case FETCH_DATA:
            let ratesFree = Object.assign({}, action.payload.rates)
            let defaultValue = action.amount

            defaultDisplay.map(function (display) {
                ratesDisplay[display] = ratesFree[display]
                delete ratesFree[display];
            })
            
            return {
                ratesDisplay : ratesDisplay,
                ratesFree : ratesFree,
                amount : defaultValue
            }
        case 'REMOVE_DATA':
            if (action.key) {
                let newRatesDisplay = Object.assign({}, currentState.ratesDisplay);
                let newRatesFree = Object.assign({}, currentState.ratesFree);
                
                newRatesFree[action.key] = newRatesDisplay[action.key]
                delete newRatesDisplay[action.key];

                return {
                    ratesDisplay : newRatesDisplay,
                    ratesFree : newRatesFree,
                    amount : amount
                }
            } else {
                return currentState;
            }
        case 'CREATE_DATA':
            let newRatesFree = Object.assign({}, currentState.ratesFree);
            let newRatesDisplay = Object.assign({}, currentState.ratesDisplay);
            
            newRatesDisplay[action.key] = newRatesFree[action.key]
            delete newRatesFree[action.key]
            
            return {
                ratesDisplay : newRatesDisplay,
                ratesFree : newRatesFree,
                amount : amount
            }
        case 'CHANGE_AMOUNT':
            let ratesFreeAmount = Object.assign({}, currentState.ratesFree);
            let ratesDisplayAmount = Object.assign({}, currentState.ratesDisplay);
            if (amount > -1) {
                return {
                    ratesDisplay : ratesDisplayAmount,
                    ratesFree : ratesFreeAmount,
                    amount : amount
                }
            }
        default:
            return currentState
    }
};