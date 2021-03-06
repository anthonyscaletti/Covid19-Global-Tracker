import React from 'react';
import { connect } from 'react-redux';

import '../../styles/detailedContainer.css';
import '../../../node_modules/react-vis/dist/style.css';
import { getCountryDetails, getGlobalDetails } from '../../actions/covidDetailedActions';
import { ICountryData, IDetailedState, IAppState, ITimeRange, IPlotData } from '../../store/types/types';
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
import StatElement from '../StatElement';

class DetailedContainer extends React.PureComponent<IProps, IDetailedState> {
    private currentSelectedCountryCode = "";
    private beganFetch = false;

    componentDidMount() {
        this.props.getGlobalDetails();
    }

    componentDidUpdate() {
        //Get New Selected Country Data
        if (this.countrySelectedChanged()) {
            this.getApiData();
        }

        //Get Latest Live Data
        if (this.props.dataFetching) {
            this.beganFetch = true;
        }
        else if (!this.props.dataFetching && this.beganFetch) {
            this.getApiData();
        }
    }

    private getApiData = () => {
        if (this.props.selectedCountryCode === "Earth") {
            this.props.getGlobalDetails();
            this.currentSelectedCountryCode = this.props.selectedCountryCode;
            this.beganFetch = false;
        }
        else if (this.props.selectedCountryCode !== this.currentSelectedCountryCode) {
            this.props.getCountryDetails(this.props.selectedCountryCode);
            this.currentSelectedCountryCode = this.props.selectedCountryCode;
            this.beganFetch = false;
        }
    }

    private countrySelectedChanged = () => {
        if (this.props.selectedCountryCode !== this.currentSelectedCountryCode) {
            return true;
        }
        return false;
    }

    private renderDetailedHeader = () => {
        return (
            <div className="detailedHeader">
                <span className="detailedTitle"><h3>Detailed Analysis</h3></span>
                <hr className="detailedLine"/>
            </div>
        );
    }

    private filterTimeRange = (data: IPlotData[]) => {
        return data.filter((point) => {
            return (point.x >= this.props.timeRange.start) && (point.x < this.props.timeRange.end);
        });
    }

    private renderLineMarkChart = () => {
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
                    data={this.filterTimeRange(this.props.country.confirmedTimeline || [])}
                    curve={'curveMonotoneX'}
                    color={configuration.confirmedPlot}
                    animation
                />
                <LineSeries 
                    data={this.filterTimeRange(this.props.country.recoveredTimeline || [])}
                    curve={'curveMonotoneX'}
                    color={configuration.recoveredPlot}
                    animation
                />
                <LineSeries 
                    data={this.filterTimeRange(this.props.country.deathTimeline || [])}
                    curve={'curveMonotoneX'}
                    color={configuration.deathPlot}
                    animation
                />
            </FlexibleXYPlot>
        );
    }

    private renderChartLabels = () => {
        return (
            <div className="chartLabelContainer">
                <ChartLabel label="Confirmed" color={configuration.confirmedPlot} />
                <ChartLabel label="Recovered" color={configuration.recoveredPlot} />
                <ChartLabel label="Death" color={configuration.deathPlot} />
            </div>
        );
    }

    private renderStatsContent = () => {
        const deathRate = this.props.country.deathRate ? this.props.country.deathRate.toFixed(2) : 0;
        const recoveryRate = this.props.country.recoveryRate ? this.props.country.recoveryRate.toFixed(2) : 0;
        const isEarth: boolean = this.props.country.name === "Earth";

        return (
            <>
                <div className="statsSubContent">
                    <StatElement label="Country" value={this.props.country.name}/>
                    {!isEarth && <StatElement label="Population" value={this.props.country.population || 0}/>}
                    <StatElement label="Total Confirmed" value={this.props.country.confirmed || 0}/>
                    <StatElement label="Total Recovered" value={this.props.country.recovered || 0}/>
                    <StatElement label="Total Deaths" value={this.props.country.deaths || 0}/>
                    {!isEarth && <StatElement label="Cases Per Million Population" value={this.props.country.casesPerMillionPop || 0}/>}
                </div>
                <div className="statsSubContent">
                    <StatElement label="Today Confirmed" value={this.props.country.todayConfirmed || 0}/>
                    <StatElement label="Today Deaths" value={this.props.country.todayDeaths || 0}/>
                    {!isEarth && <StatElement label="Critical" value={this.props.country.critical || 0}/>}
                    {!isEarth && <StatElement label="Death Rate" value={deathRate}/>}
                    {!isEarth && <StatElement label="Recovery Rate" value={recoveryRate}/>}
                </div>
            </>
        );
    }

    private renderStatsTable = () => {
        const updatedAt: Date = this.props.country.updatedAt ? this.props.country.updatedAt.toString() : "";
        
        return (
            <>
                <div className="statsHeader">
                    <StatElement label="Last Updated" value={updatedAt}/>
                </div>
                <div className="statsContent">
                    {this.renderStatsContent()}
                </div>
            </>
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
                    {this.renderStatsTable()}
                </div>
            </div>
        );
    }
}

interface IProps  {
    country: ICountryData,
    getCountryDetails: Function,
    getGlobalDetails: Function,
    selectedCountryCode: string,
    dataFetching: boolean,
    timeRange: ITimeRange
}

const mapStateToProps = (state: IAppState) => {
    return {
        country: state.detailed.country,
        selectedCountryCode: state.summary.selectedCountryCode,
        dataFetching: state.summary.dataFetching,
        timeRange: state.settings.timeRange
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCountryDetails: (countryCode: string) => dispatch(getCountryDetails(countryCode)),
        getGlobalDetails: () => dispatch(getGlobalDetails())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailedContainer);