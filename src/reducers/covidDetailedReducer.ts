import { IAction } from 'store/types/types';

interface IState {

}

const initState = {
    
};

const covidDetailedReducer = (state: IState = initState, action: IAction) => {
    switch(action.type) {
        case "GET_COUNTRY_DETAILS":
            console.log("Got country details");
            return state;
        default:
            return state;
    }
}

export default covidDetailedReducer;