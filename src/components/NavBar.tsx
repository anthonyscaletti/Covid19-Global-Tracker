import React from 'react'
import '../styles/navBar.css';

class NavBar extends React.PureComponent {
    render() {
        return (
            <div className="navBar">
                <div className="navLogo">
                    <img className="navLogoImg" src="../../BrandLogo1000x1000.png" alt="Logo"/>
                </div>
            </div>
        );
    }
}

export default NavBar;