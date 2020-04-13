import React from 'react';

import '../styles/chartLabel.css'

const ChartLabel = (props: IOwnProps) => {
    return (
        <div className="chartLabel">
            <div className="labelBox" style={{backgroundColor: `${props.color}`}}></div>
            <h5>&nbsp;&nbsp;{props.label}</h5>
        </div>
    );
}

interface IOwnProps {
    label: string,
    color: string
}

export default ChartLabel;