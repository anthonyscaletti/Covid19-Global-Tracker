import { IAction, ITimeRange } from '../store/types/types';

export const setTimeRange = (timeRange: ITimeRange) => {
    return {
        type: "SET_TIME_RANGE",
        payload: timeRange
    } as IAction;
}