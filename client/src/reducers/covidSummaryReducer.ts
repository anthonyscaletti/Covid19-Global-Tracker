import { IAction, ISummaryState } from '../store/types/types';

const initState = {
    countries: [],
    selectedCountryCode: ""
};

const covidSummaryReducer = (state: ISummaryState = initState, action: IAction) => {
    switch(action.type) {
        case "GET_GLOBAL_SUMMARY":
            return {
                ...state,
                countries: action.payload
            };
        case "SET_SELECTED_COUNTRY_CODE":
            return {
                ...state,
                selectedCountryCode: action.payload
            };
        default:
            return state;
    }
}

export default covidSummaryReducer;

