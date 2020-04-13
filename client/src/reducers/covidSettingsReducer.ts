import { IAction, ITimeRange, ISettingsState } from '../store/types/types';

const initState = {
    timeRange: {
        start: new Date("01/01/2020"),
        end: new Date()
    } as ITimeRange
};

const covidSettingsReducer = (state: ISettingsState = initState, action: IAction) => {
    switch(action.type) {
        case "SET_TIME_RANGE":
            return {
                timeRange: action.payload
            };
        default:
            return state;
    }
}

export default covidSettingsReducer;

