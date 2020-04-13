import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import '../../styles/summaryContainer.css';
import { getGlobalSummary, setSelectedCountryCode } from '../../actions/covidSummaryActions';
import { ICountrySummaryData, ICountryData, ISummaryState, IAppState, IAction } from '../../store/types/types';
import CountryNode from '../CountryNode';

class SummaryContainer extends React.PureComponent<IProps, ISummaryState> {
    componentDidMount() {
        this.props.getGlobalSummary();
    }

    countryNodeClick = (countryCode: string) => {
        this.props.setSelectedCountryCode(countryCode);
    }

    renderSummaryHeader = () => {
        return (
            <div className="summaryHeader">
                <span className="summaryTitle"><h3>Global Confirmed</h3></span>
                <hr className="summaryLine"/>
            </div>
        );
    }

    renderCountries = () => {
        return (
            <>
                {this.props.countries && this.props.countries.map((x: ICountryData) => 
                    <CountryNode 
                        key={x.code}
                        country={x.name}
                        countryCode={x.code}
                        value={x.confirmed}
                        onClick={this.countryNodeClick}
                    />
                )}
            </>
        );
    }

    render() {
        return (
            <div className="summaryContainer">
                {this.renderSummaryHeader()}
                <div className="nodeContainer">
                    {this.renderCountries()}
                </div>
            </div>
        );
    }
}

interface IProps  {
    countries: ICountrySummaryData[],
    getGlobalSummary: Function,
    setSelectedCountryCode: Function
}

const mapStateToProps = (state: IAppState) => {
    return {
        countries: state.summary.countries,
        selectedCountryCode: state.summary.selectedCountryCode
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getGlobalSummary: () => dispatch(getGlobalSummary()),
        setSelectedCountryCode: (countryCode: string) => dispatch(setSelectedCountryCode(countryCode))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);