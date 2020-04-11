import React from 'react';

import '../../styles/main.css';
import NavBar from '../NavBar';
import SummaryContainer from './SummaryContainer';
import DetailedContainer from './DetailedContainer'

class MainContainer extends React.PureComponent {
    render() {
        return (
            <div className="mainContainer">
                <NavBar />
                <div className="panelContainer">
                    <SummaryContainer />
                    <DetailedContainer />
                </div>
            </div>
        );
    }
}

export default MainContainer;