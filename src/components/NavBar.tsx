import React from 'react'
import '../styles/navBar.css';

class NavBar extends React.PureComponent {
    renderLogo = () => {
        return (
            <div className="navLogo">
                <img src="../../BrandLogo1000x1000.png" alt="Logo"/>
            </div>
        );
    }

    renderSettings = () => {
        return (
            <div className="nav">
                <img src="../../settingsIcon.png" alt="Settings"/>
            </div>
        );
    }

    render() {
        return (
            <div className="navBar">
                {this.renderLogo()}
            </div>
        );
    }
}

export default NavBar;