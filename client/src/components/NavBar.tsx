import React from 'react';

import '../styles/navBar.css';
import Settings from './Settings';

class NavBar extends React.PureComponent {
    private renderLogo = () => {
        return (
            <div className="navLogo">
                <img src="../../BrandLogo1000x1000.png" alt="Logo"/>
            </div>
        );
    }

    private renderSettings = () => {
        return (
            <div className="navSettings">
                <Settings />
            </div>
        );
    }

    render() {
        return (
            <div className="navBar">
                {this.renderLogo()}
                {this.renderSettings()}
            </div>
        );
    }
}

export default NavBar;