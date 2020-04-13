import { IAction, IDetailedState, ICountryData } from '../store/types/types';

const initState = {
    country: {} as ICountryData
};

const covidDetailedReducer = (state: IDetailedState = initState, action: IAction) => {
    switch(action.type) {
        case "GET_COUNTRY_DETAILS":
            return {
                country: action.payload
            };
        case "GET_GLOBAL_DETAILS":
            return {
                country: action.payload
            };
        default:
            return state;
    }
}

export default covidDetailedReducer;

