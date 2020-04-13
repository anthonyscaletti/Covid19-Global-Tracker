import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import '../../styles/summaryContainer.css';
import { getGlobalSummary, setSelectedCountryCode } from '../../actions/covidSummaryActions';
import { ICountrySummaryData, ICountryData, ISummaryState, IAppState } from '../../store/types/types';
import CountryNode from '../CountryNode';

class SummaryContainer extends React.PureComponent<IProps, ISummaryState> {
    componentDidMount() {
        this.props.getGlobalSummary();
    }

    countryNodeClick = (countryCode: string) => {
        if (countryCode === this.props.selectedCountryCode) {
            this.props.setSelectedCountryCode("Earth");
        }
        else {
            this.props.setSelectedCountryCode(countryCode);
        }
    }

    renderSummaryHeader = () => {
        return (
            <div className="summaryHeader">
                <span className="summaryTitle"><h3>Global Confirmed</h3></span>
                <hr className="summaryLine"/>
            </div>
        );
    }

    renderCustomFields = () => {
        return (
            <div className="customFields">
                <div className="filterInput">
                    <input className="filterInput" type="text" />
                </div>
                <div className="sortButton">
                    <span className="sortText">Sort</span>
                </div>
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
                        selectedCountryCode={this.props.selectedCountryCode}
                    />
                )}
            </>
        );
    }

    render() {
        return (
            <div className="summaryContainer">
                {this.renderSummaryHeader()}
                {this.renderCustomFields()}
                <div className="nodeContainer">
                    {this.renderCountries()}
                </div>
            </div>
        );
    }
}

interface IProps  {
    countries: ICountrySummaryData[],
    selectedCountryCode: string,
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