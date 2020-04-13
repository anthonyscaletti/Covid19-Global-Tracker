import React from 'react';
import { connect } from 'react-redux';

import '../../styles/detailedContainer.css';
import '../../../node_modules/react-vis/dist/style.css';
import { getCountryDetails } from '../../actions/covidDetailedActions';
import { ICountryData, IDetailedState, IAppState } from '../../store/types/types';
import { configuration } from '../../constant/configuration';
import ChartLabel from '../ChartLabel';
import { 
    FlexibleXYPlot,
    VerticalGridLines,
    HorizontalGridLines,
    XAxis,
    YAxis,
    LineSeries
 } from 'react-vis';

class DetailedContainer extends React.PureComponent<IProps, IDetailedState> {
    componentDidMount() {
        this.props.getCountryDetails();
    }

    renderDetailedHeader = () => {
        return (
            <div className="detailedHeader">
                <span className="detailedTitle"><h3>Detailed Analysis</h3></span>
                <hr className="detailedLine"/>
            </div>
        );
    }

    renderLineMarkChart = () => {
        return (
            <FlexibleXYPlot 
                margin={{left: 90, right: 50, bottom: 85}}
                xType="time"
            >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <LineSeries 
                    data={this.props.country.confirmedTimeline}
                    curve={'curveMonotoneX'}
                    color={configuration.confirmedPlot}
                />
                <LineSeries 
                    data={this.props.country.recoveredTimeline}
                    curve={'curveMonotoneX'}
                    color={configuration.recoveredPlot}
                />
                <LineSeries 
                    data={this.props.country.deathTimeline}
                    curve={'curveMonotoneX'}
                    color={configuration.deathPlot}
                />
            </FlexibleXYPlot>
        );
    }

    renderChartLabels = () => {
        return (
            <div className="chartLabelContainer">
                <ChartLabel label="Confirmed" color={configuration.confirmedPlot} />
                <ChartLabel label="Recovered" color={configuration.recoveredPlot} />
                <ChartLabel label="Death" color={configuration.deathPlot} />
            </div>
        );
    }

    render() {
        return (
            <div className="detailedContainer">
                {this.renderDetailedHeader()}
                <div className="lineChart">
                    {this.renderLineMarkChart()}
                    {this.renderChartLabels()}
                </div>
                <div className="statsTable">
                </div>
            </div>
        );
    }
}

interface IProps  {
    country: ICountryData,
    getCountryDetails: any
}

const mapStateToProps = (state: IAppState) => {
    return {
        country: state.detailed.country
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCountryDetails: () => dispatch(getCountryDetails("ca"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedContainer);