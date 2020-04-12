import { IAction } from 'store/types/types';

export const getCountryDetails = (country: string) => {
    return (dispatch: any) => {
        const action: IAction = {
            type: "GET_COUNTRY_DETAILS"
        };
        console.log(country);

        dispatch(action);
    }
}