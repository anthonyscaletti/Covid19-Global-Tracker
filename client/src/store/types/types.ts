export interface IAction {
    type: string,
    payload: any
}

export interface IAppState {
    summary: ISummaryState,
    detailed: IDetailedState
}

export interface ISummaryState {
    countries: ICountryData[]
}

export interface IDetailedState {
    country: ICountryData
}

export interface ICountryData {
    name: string,
    code: string,
    population: number,
    updatedAt: any,
    todayDeaths: number,
    todayConfirmed: number,
    deaths: number,
    confirmed: number,
    recovered: number,
    critical: number,
    deathRate: number,
    recoveryRate: number,
    casesPerMillionPop: number,
    confirmedTimeline: IPlotData[],
    recoveredTimeline: IPlotData[],
    deathTimeline: IPlotData[]
}

export interface ICountrySummaryData {
    name: string,
    code: string,
    deaths: number,
    confirmed: number,
    recovered: number,
    critical: number
}

export interface IPlotData {
    x: Date,
    y: number
}