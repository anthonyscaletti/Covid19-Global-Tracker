import { IAction, ICountryData } from '../store/types/types';

export const getCountryDetails = (countryCode: string) => {
    return (dispatch: any) => {
        fetch(`https://corona-api.com/countries/${countryCode}`, {
            method: "GET",
            mode: "cors"
        })
        .then(res => res.json())
        .then(res => {
            const action: IAction = {
                type: "GET_COUNTRY_DETAILS",
                payload: getModeledCountryData(res)
            };
            dispatch(action);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        });
    }
}

export const getGlobalDetails = () => {
    return (dispatch: any) => {
        fetch("https://corona-api.com/timeline", {
            method: "GET",
            mode: "cors"
        })
        .then(res => res.json())
        .then(res => {
            const action: IAction = {
                type: "GET_GLOBAL_DETAILS",
                payload: getModeledGlobalData(res)
            };
            dispatch(action);
        })
        .catch(err => {
            console.log("ERROR: ", err);
        });
    }
}

const getModeledCountryData = (res: any) => {
    if (!res.data) {
        return {} as ICountryData[]
    }

    const { confirmedTimeline, recoveredTimeline, deathTimeline } = getTimelines(res.data.timeline);
    
    return {
        name: res.data.name,
        code: res.data.code,
        population: res.data.population,
        updatedAt: new Date(res.data.updated_at),
        todayDeaths: res.data.today.deaths,
        todayConfirmed: res.data.today.confirmed,
        deaths: res.data.latest_data.deaths,
        confirmed: res.data.latest_data.confirmed,
        recovered: res.data.latest_data.recovered,
        critical: res.data.latest_data.critical,
        deathRate: res.data.latest_data.calculated.death_rate,
        recoveryRate: res.data.latest_data.calculated.recovery_rate,
        casesPerMillionPop: res.data.latest_data.calculated.cases_per_million_population,
        confirmedTimeline,
        recoveredTimeline,
        deathTimeline
    } as ICountryData;
}

const getModeledGlobalData = (res: any) => {
    if (!res.data) {
        return {} as ICountryData[]
    }

    const { confirmedTimeline, recoveredTimeline, deathTimeline } = getTimelines(res.data);
    
    return {
        name: "Earth",
        code: "Earth",
        updatedAt: new Date(res.data[0].updated_at),
        todayDeaths: res.data[0].new_deaths,
        todayConfirmed: res.data[0].new_confirmed,
        deaths: res.data[0].deaths,
        confirmed: res.data[0].confirmed,
        recovered: res.data[0].recovered,
        confirmedTimeline,
        recoveredTimeline,
        deathTimeline
    } as ICountryData;
}

const getTimelines = (timeline: any[]) => {
    let confirmedTimeline = [];
    let recoveredTimeline = [];
    let deathTimeline = [];

    timeline.reverse().forEach((country) => {
        confirmedTimeline.push({
            x: new Date(country.updated_at),
            y: country.confirmed
        });
        
        recoveredTimeline.push({
            x: new Date(country.updated_at),
            y: country.recovered
        });
        
        deathTimeline.push({
            x: new Date(country.updated_at),
            y: country.deaths
        });
    });

    return { confirmedTimeline, recoveredTimeline, deathTimeline };
}