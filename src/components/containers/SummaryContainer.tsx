import React from 'react';

import '../../styles/summaryContainer.css';

class SummaryContainer extends React.PureComponent {
    renderSummaryHeader = () => {
        return (
            <div className="summaryHeader">
                <span className="summaryTitle"><h3>Global Statistics</h3></span>
                <hr className="summaryLine"/>
            </div>
        );
    }

    render() {
        return (
            <div className="summaryContainer">
                {this.renderSummaryHeader()}
            </div>
        );
    }
}

export default SummaryContainer;