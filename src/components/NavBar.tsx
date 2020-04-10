import React from 'react'
import '../styles/navBar.css';

class NavBar extends React.PureComponent {
    renderLogo = () => {
        return (
            <div className="navLogo">
                <img className="navLogoImg" src="../../BrandLogo1000x1000.png" alt="Logo"/>
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