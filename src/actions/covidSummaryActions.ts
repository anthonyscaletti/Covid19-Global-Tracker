import { IAction } from 'store/types/types';

export const getGlobalSummary = () => {
    return (dispatch: any) => {
        fetch("https://api.covid19api.com/summary", {})
        .then(res => res.json())
        .then(res => {
            const action: IAction = {
                type: "GET_GLOBAL_SUMMARY",
                payload: [{...res.Global, Country: "Earth"}, ...res.Countries] || []
            };
            dispatch(action);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        });
    }
}