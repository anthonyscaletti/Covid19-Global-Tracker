import React from 'react';

const ChartLabel = (props: IOwnProps) => {
    return (
        <h5>{props.label}</h5>
    );
}

interface IOwnProps {
    label: string
}

export default ChartLabel;