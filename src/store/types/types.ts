export interface IAction {
    type: string,
    payload: any
}

export interface IAppState {
    summary: ISummaryState,
    detailed: IDetailedState
}

export interface ISummaryState {
    countries: ICountryData[],
}

export interface IDetailedState {
    
}

export interface ICountryData {
    Country: string,
    CountryCode: string,
    TotalConfirmed: number,
    NewConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
}