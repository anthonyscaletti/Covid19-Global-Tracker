import { combineReducers } from 'redux';
import covidSummaryReducer from './covidSummaryReducer';
import covidDetailedReducer from './covidDetailedReducer';

const rootReducer = combineReducers({
    summary: covidSummaryReducer,
    detailed: covidDetailedReducer
});

export default rootReducer;