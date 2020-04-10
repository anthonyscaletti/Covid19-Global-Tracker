import React from 'react';

import '../../styles/main.css';
import NavBar from '../NavBar'

class MainContainer extends React.PureComponent {
    render() {
        return (
            <div className="mainContainer">
                <NavBar />
            </div>
        );
    }
}

export default MainContainer