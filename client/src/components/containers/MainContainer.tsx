import React from 'react';

import '../../styles/main.css';
import NavBar from '../NavBar';
import SummaryContainer from './SummaryContainer';
import DetailedContainer from './DetailedContainer';
import Settings from './../Settings';

class MainContainer extends React.PureComponent {
    private settingsOn = false;

    private settingsClick = () => {
        this.settingsOn = !this.settingsOn;
        this.forceUpdate();
    }

    private renderSettings = () => {
        return (
            <div className="settingsModal">
                <Settings />
            </div>
        );
    }

    render() {
        return (
            <div className="mainContainer">
                <NavBar settingsClick={this.settingsClick}/>
                {this.settingsOn && this.renderSettings()}
                <div className="panelContainer noSelect">
                    <SummaryContainer />
                    <DetailedContainer />
                </div>
            </div>
        );
    }
}

export default MainContainer;