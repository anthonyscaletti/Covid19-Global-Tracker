import React from 'react';
import { connect } from 'react-redux';

import '../../styles/summaryContainer.css';
import { getGlobalSummary } from '../../actions/covidSummaryActions';
import { ICountryData, ISummaryState, IAppState } from '../../store/types/types';
import CountryNode from '../CountryNode';

class SummaryContainer extends React.PureComponent<IProps, ISummaryState> {
    componentDidMount() {
        this.props.getGlobalSummary();
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
                        key={x.CountryCode}
                        country={x.Country}
                        countryCode={x.CountryCode}
                        totalConfirmed={x.TotalConfirmed}
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
    countries: ICountryData[],
    getGlobalSummary: any
}

const mapStateToProps = (state: IAppState) => {
    return {
        countries: state.summary.countries
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getGlobalSummary: () => dispatch(getGlobalSummary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryContainer);