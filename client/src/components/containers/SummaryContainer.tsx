import React, { Dispatch } from 'react';
import { connect } from 'react-redux';

import '../../styles/summaryContainer.css';
import { getGlobalSummary, setSelectedCountryCode } from '../../actions/covidSummaryActions';
import { ICountrySummaryData, ICountryData, ISummaryState, IAppState } from '../../store/types/types';
import CountryNode from '../CountryNode';

export enum sortStatus {
    none = 0,
    asc = 1,
    desc = 2
}

class SummaryContainer extends React.PureComponent<IProps, ISummaryState> {
    private localCountries = [] as ICountrySummaryData[];
    private localCountriesSortedAsc = [] as ICountrySummaryData[];
    private localCountriesSortedDesc = [] as ICountrySummaryData[];

    componentDidMount() {
        this.props.getGlobalSummary();
    }

    componentDidUpdate() {
        if (this.props.countries && !this.localCountries.length) {
            this.localCountries = this.props.countries.slice(0);
            this.localCountriesSortedAsc = this.sortCountries(this.localCountries);
            this.localCountriesSortedDesc = this.sortCountries(this.localCountries, true);
        }
    }

    countryNodeClick = (countryCode: string) => {
        if (countryCode === this.props.selectedCountryCode) {
            this.props.setSelectedCountryCode("Earth");
        }
        else {
            this.props.setSelectedCountryCode(countryCode);
        }
    }

    sortCountries = (list: ICountrySummaryData[], isDesc: boolean = false) => {
        return list.slice().sort((a, b) => {
            return !isDesc ? (a.confirmed - b.confirmed) : (b.confirmed - a.confirmed);
        });
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