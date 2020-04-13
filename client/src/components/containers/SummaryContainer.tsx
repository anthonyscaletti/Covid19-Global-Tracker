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
    private localCountriesSortedAsc = [] as ICountrySummaryData[];
    private localCountriesSortedDesc = [] as ICountrySummaryData[];
    private sortStatus = sortStatus.none;
    private hamburgerSelected = false;
    private filterValue = "";

    componentDidMount() {
        this.props.getGlobalSummary();
    }

    componentDidUpdate() {
        if (this.props.countries && !this.localCountriesSortedAsc.length ) {
            const localCountries = this.props.countries.slice(0);
            this.localCountriesSortedAsc = this.sortCountries(localCountries);
            this.localCountriesSortedDesc = this.sortCountries(localCountries, true);
        }
    }

    private sortCountries = (list: ICountrySummaryData[], isDesc: boolean = false) => {
        return list.slice().sort((a, b) => {
            return !isDesc ? (a.confirmed - b.confirmed) : (b.confirmed - a.confirmed);
        });
    }

    private sortClick = () => {
        switch(this.sortStatus) {
            case sortStatus.none:
                this.sortStatus = sortStatus.asc;
                break;
            case sortStatus.asc:
                this.sortStatus = sortStatus.desc;
                break;
            case sortStatus.desc:
            default:
                this.sortStatus = sortStatus.none;
                break;
        }
        this.forceUpdate();
    }

    private countryNodeClick = (countryCode: string) => {
        if (countryCode === this.props.selectedCountryCode) {
            this.props.setSelectedCountryCode("Earth");
        }
        else {
            this.props.setSelectedCountryCode(countryCode);
        }
    }

    private hamburgerClick = () => {
        this.hamburgerSelected = !this.hamburgerSelected;
        this.forceUpdate();
    }

    private filterOnChange = (e: any) => {
        this.filterValue = e.target.value;
        this.forceUpdate();
    }

    private renderHamburgerButton = () => {
        return (
            <div className="hamburgerButton" onClick={this.hamburgerClick}>
                <img src="../../../hamburgerIcon.png" alt="hamburger"/>
            </div>
        );
    }

    private renderSummaryHeader = () => {
        return (
            <div className="summaryHeader">
                <span className="summaryTitle"><h3>Global Confirmed</h3></span>
                {this.renderHamburgerButton()}
                <hr className="summaryLine"/>
            </div>
        );
    }

    private renderCustomFields = () => {
        return (
            <div className="customFields">
                <div className="filterInput">
                    <input className="filterInput" 
                           type="text" 
                           onChange={this.filterOnChange}
                           spellCheck="false"
                    />
                </div>
                <div className="sortButton" onClick={this.sortClick}>
                    <span className="sortText">Sort</span>
                </div>
            </div>
        );
    }

    private matchFilter = (x: string, y: string) => {
        return x.toLocaleLowerCase().startsWith(y.toLocaleLowerCase())
    }

    private renderCountryList = (list: ICountrySummaryData[] = []) => {
        return (
            <>
                {list && list
                    .filter((x)=> this.matchFilter(x.name, this.filterValue))
                    .map((x: ICountryData) => 
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

    private renderCountries = () => {
        switch(this.sortStatus) {
            case sortStatus.none:
                return this.renderCountryList(this.props.countries);
            case sortStatus.asc:
                return this.renderCountryList(this.localCountriesSortedAsc);
            case sortStatus.desc:
                return this.renderCountryList(this.localCountriesSortedDesc);
        }
    }

    render() {
        return (
            <div className="summaryContainer">
                {this.renderSummaryHeader()}
                {this.hamburgerSelected && this.renderCustomFields()}
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