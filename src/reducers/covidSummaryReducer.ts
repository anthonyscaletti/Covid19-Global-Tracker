import { IAction, ISummaryState } from 'store/types/types';

const initState = {
    countries: [
        {
            Country: "United States Of America", 
            CountryCode: "us",
            TotalConfirmed: 200,
            NewConfirmed: 10,
            NewDeaths: 10,
            TotalDeaths: 10,
            NewRecovered: 10,
            TotalRecovered: 10,
        },
        {
            Country: "Canada", 
            CountryCode: "ca",
            TotalConfirmed: 10,
            NewConfirmed: 10,
            NewDeaths: 10,
            TotalDeaths: 10,
            NewRecovered: 10,
            TotalRecovered: 10,
        }
    ]
};

const covidSummaryReducer = (state: ISummaryState = initState, action: IAction) => {
    switch(action.type) {
        case "GET_GLOBAL_SUMMARY":
            return {
                countries: action.payload
            };
        default:
            return state;
    }
}

export default covidSummaryReducer;

