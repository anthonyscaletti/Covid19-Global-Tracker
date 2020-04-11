import React from 'react';

import '../../styles/main.css';
import NavBar from '../NavBar';
import SummaryContainer from './SummaryContainer';

class MainContainer extends React.PureComponent {
    render() {
        return (
            <div className="mainContainer">
                <NavBar />
                <SummaryContainer />
            </div>
        );
    }
}

export default MainContainer;