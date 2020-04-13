import React from 'react';

import '../styles/statElement.css'

const StatElement = (props: IOwnProps) => {
    return (
        <div className="statElement">
            <h5>{props.label}:<span style={{float: "right"}}>{props.value}</span></h5>
        </div>
    );
}

interface IOwnProps {
    label: string,
    value: any
}

export default StatElement;