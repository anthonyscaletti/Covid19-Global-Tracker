import React from 'react';

import '../styles/countryNode.css';

const CountryNode = (props: IOwnProps) => {
    const isSelectedStyle = (props.selectedCountryCode === props.countryCode) ? {backgroundColor: "#8AAE5C"} : {};

    return (
        <div className="countryNode" 
             onClick={() => props.onClick(props.countryCode)}
             style={isSelectedStyle}
        >
            <h5>&#x25C9;&nbsp;&nbsp;{props.country}:<span style={{float: "right", marginRight: "5%"}}>{props.value}</span></h5>
        </div>
    );
}

interface IOwnProps {
    country: string,
    countryCode: string,
    selectedCountryCode: string,
    value: number,
    onClick: Function
}
    
export default CountryNode;