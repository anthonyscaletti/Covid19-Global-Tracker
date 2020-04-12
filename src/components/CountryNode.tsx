import React from 'react';

import '../styles/countryNode.css';

export interface OwnProps {
    country: string,
    countryCode: string,
    totalConfirmed: number
}

const CountryNode = (props: OwnProps) => {
    return (
        <div className="countryNode">
            <h5>&#x25C9;&nbsp;&nbsp;{props.country}:<span style={{float: "right", marginRight: "5%"}}>{props.totalConfirmed}</span></h5>
        </div>
    );
}
    
export default CountryNode;