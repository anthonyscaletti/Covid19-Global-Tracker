import React from 'react';

import '../../styles/detailedContainer.css';

class DetailedContainer extends React.PureComponent {
    renderDetailedHeader = () => {
        return (
            <div className="detailedHeader">
                <span className="detailedTitle"><h3>Detailed Analysis</h3></span>
                <hr className="detailedLine"/>
            </div>
        );
    }

    render() {
        return (
            <div className="detailedContainer">
                {this.renderDetailedHeader()}
            </div>
        );
    }
}

export default DetailedContainer;