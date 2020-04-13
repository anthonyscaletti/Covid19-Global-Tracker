import React from 'react';

import '../styles/settings.css';

class Settings extends React.Component {
    private renderSettings = () => {
        return (
            <img src="../../settingsIcon.png" alt="Settings"/>
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