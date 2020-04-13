import { combineReducers } from 'redux';
import covidSummaryReducer from './covidSummaryReducer';
import covidDetailedReducer from './covidDetailedReducer';
import covidSettingsReducer from './covidSettingsReducer';

const rootReducer = combineReducers({
    summary: covidSummaryReducer,
    detailed: covidDetailedReducer,
    settings: covidSettingsReducer
});

export default rootReducer;