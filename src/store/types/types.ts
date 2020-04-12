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
    
}

export interface ICountryData {
    name: string,
    code: string,
    population: number,
    updatedAt: Date,
    todayDeaths: number,
    todayConfirmed: number,
    deaths: number,
    confirmed: number,
    recovered: number,
    critical: number,
    deathRate: number,
    recoveryRate: number,
    casesPerMillionPop: number,
    timeline: ICountryData[]
}

export interface ICountrySummaryData {
    name: string,
    code: string,
    deaths: number,
    confirmed: number,
    recovered: number,
    critical: number
}