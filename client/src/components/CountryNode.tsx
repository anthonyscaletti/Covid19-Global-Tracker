import React from 'react';

import '../styles/countryNode.css';

const CountryNode = (props: IOwnProps) => {
    return (
        <div className="countryNode">
            <h5>&#x25C9;&nbsp;&nbsp;{props.country}:<span style={{float: "right", marginRight: "5%"}}>{props.value}</span></h5>
        </div>
    );
}

interface IOwnProps {
    country: string,
    countryCode: string,
    value: number
}
    
export default CountryNode;