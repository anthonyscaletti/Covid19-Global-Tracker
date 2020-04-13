import React from 'react';

import '../styles/settings.css';

class Settings extends React.Component {
    private renderSettingsHeader = () => {
        return (
            <div className="settingsHeader">
                <span className="settingsTitle"><h3>Settings</h3></span>
                <hr className="settingsLine"/>
            </div>
        );
    }
    private renderSettings = () => {
        return (
            <div className="settings">
                {this.renderSettingsHeader()}
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