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
            <h5>&#x25C9;&nbsp;{props.country}:&nbsp;&nbsp;{props.totalConfirmed}</h5>
        </div>
    );
}
    
export default CountryNode;