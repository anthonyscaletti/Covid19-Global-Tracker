import { IAction, ISummaryState } from '../store/types/types';

const initState = {
    countries: [],
    selectedCountryCode: "",
    dataFetching: true
};

const covidSummaryReducer = (state: ISummaryState = initState, action: IAction) => {
    switch(action.type) {
        case "GET_GLOBAL_SUMMARY":
            return {
                ...state,
                countries: action.payload,
                dataFetching: false
            };
        case "SET_SELECTED_COUNTRY_CODE":
            return {
                ...state,
                selectedCountryCode: action.payload
            };
        case "SET_DATA_FETCHING":
            return {
                ...state,
                dataFetching: action.payload
            };
        default:
            return state;
    }
}

export default covidSummaryReducer;

