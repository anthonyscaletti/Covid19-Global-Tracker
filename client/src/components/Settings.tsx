import React from 'react';

import '../styles/settings.css';
import DatePicker from 'react-date-picker'

class Settings extends React.Component {
    private dateOnChange = (date: Date | Date[], isStart: boolean = true) => {
        console.log(date, isStart);
    }

    private renderSettingsHeader = () => {
        return (
            <div className="settingsHeader">
                <span className="settingsTitle"><h3>Settings</h3></span>
                <hr className="settingsLine"/>
            </div>
        );
    }

    private renderSettingsContent = () => {
        return (
            <div className="settingsContent">
                <span className="settingsLabel"><h5>Select Start Date</h5></span>
                <DatePicker className="datePicker" onChange={(date) => this.dateOnChange(date)} value={new Date()}/>
                <span className="settingsLabel"><h5>Select End Date</h5></span>
                <DatePicker className="datePicker"onChange={(date) => this.dateOnChange(date, false)} value={new Date()}/>
            </div>
        );
    }

    private renderSettings = () => {
        return (
            <div className="settings">
                {this.renderSettingsHeader()}
                {this.renderSettingsContent()}
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

export default Settings;