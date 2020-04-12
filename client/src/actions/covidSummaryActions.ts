import { IAction, ICountrySummaryData, ICountryData } from 'store/types/types';

export const getGlobalSummary = () => {
    return (dispatch: any) => {
        fetch("https://corona-api.com/countries", {
            method: "GET",
            mode: "cors"
        })
        .then(res => res.json())
        .then(res => {
            const action: IAction = {
                type: "GET_GLOBAL_SUMMARY",
                payload: getModeledData(res)
            };
            dispatch(action);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        });
    }
}

const getModeledData = (res: any) => {
    if (!res.data) {
        return [] as ICountrySummaryData[]
    }

    return res.data.map((country: any) => {
        return {
            name: country.name,
            code: country.code,
            deaths: country.latest_data.deaths,
            confirmed: country.latest_data.confirmed,
            recovered: country.latest_data.recovered,
            critical: country.latest_data.critical
        } as ICountrySummaryData
    }) as ICountryData[];
}