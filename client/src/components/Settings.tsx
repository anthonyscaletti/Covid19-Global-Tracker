import React from 'react';
import { connect } from 'react-redux';

import '../styles/settings.css';
import { ITimeRange, IAppState } from '../store/types/types';
import { setTimeRange } from '../actions/covidSettingsActions'
import DatePicker from 'react-date-picker'

class Settings extends React.Component<IProps> {
    private timeRange: ITimeRange = this.props.timeRange;

    private dateOnChange = (date: Date | Date[], isStart: boolean = true) => {
        if (isStart) {
            this.timeRange.start = date;
        }
        else {
            this.timeRange.end = date;
        }
        this.props.setTimeRange(this.timeRange);
        this.forceUpdate()
    }

    private renderSettingsHeader = () => {
        return (
            <div className="settingsHeader">
                <span className="settingsTitle"><h3>Settings</h3></span>
                <hr className="settingsLine"/>
            </div>
        );
    }

    private renderSettingFooter = () => {
        return (
            <div className="settingsFooter">
                <hr className="settingsLine"/>
                <span className="settingsSignOff"><h6>Developed by Anthony Scaletti</h6></span>
            </div>
        );
    }

    private renderSettingsContent = () => {
        return (
            <div className="settingsContent">
                <span className="settingsLabel"><h5>Select Start Date</h5></span>
                <DatePicker className="datePicker" onChange={(date) => this.dateOnChange(date)} value={this.timeRange.start}/>
                <span className="settingsLabel"><h5>Select End Date</h5></span>
                <DatePicker className="datePicker"onChange={(date) => this.dateOnChange(date, false)} value={this.timeRange.end}/>
            </div>
        );
    }

    private renderSettings = () => {
        return (
            <div>
                {this.renderSettingsHeader()}
                {this.renderSettingsContent()}
                {this.renderSettingFooter()}
            </div>
        );
    }

    render() {
        return(
            <>
                {this.renderSettings()}
            </>
        );
    }
}

interface IProps {
    timeRange: ITimeRange,
    setTimeRange: Function
}

const mapStateToProps = (state: IAppState) => {
    return {
        timeRange: state.settings.timeRange
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        setTimeRange: (timeRange: ITimeRange) => dispatch(setTimeRange(timeRange))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);