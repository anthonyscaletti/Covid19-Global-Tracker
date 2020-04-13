import React from 'react';

import '../styles/navBar.css';
import Settings from './Settings';

class NavBar extends React.Component<IProps> {
    private renderLogo = () => {
        return (
            <div className="navLogo">
                <img src="../../BrandLogo1000x1000.png" alt="Logo"/>
            </div>
        );
    }

    private renderSettingsIcon = () => {
        return (
            <div className="navSettings" onClick={() => this.props.settingsClick()}>
                <img src="../../settingsIcon.png" alt="Settings"/>
            </div>
        );
    }

    render() {
        return (
            <div className="navBar">
                {this.renderLogo()}
                {this.renderSettingsIcon()}
            </div>
        );
    }
}

interface IProps {
    settingsClick: Function
}

export default NavBar;