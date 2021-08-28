import { time } from "console";
import { getOffsetFromDate, getSwissEphReadyHour } from "../utils/luxon/utils.luxon";
import { allPlanets } from "../utils/swisseph/utils.swisseph";
import { getMatchingCities, getCityInCountry, getTimeZoneByCity } from "../utils/timezones/utils.timezones";
// import { City } from "../types/types";

export function getFullPlanetsPosition(_country:string, _city:string, _day:string, _month:string, _year:string, _hour:string, _minutes:string):string {
    // const _results = `${country}, ${city}, ${day}, ${month}, ${year}, ${hour}, ${minute}`

    const matchingCities = getMatchingCities(_city),
          cityInGivenCountry = getCityInCountry(matchingCities, _country),
          timezoneByCity = getTimeZoneByCity(cityInGivenCountry),
          timedOffset = getOffsetFromDate(_year, _month, _day, _hour, _minutes, timezoneByCity),
          floatingHour = getSwissEphReadyHour(_hour, _minutes, timedOffset),
          getAllPlanetsPositions = allPlanets(_year, _month, _day, floatingHour)

    

    console.log(getAllPlanetsPositions)

    //const test = JSON.stringify(matchingCities) + '\n' + JSON.stringify(cityInGivenCountry) + '\n' + timezoneByCity + '\n' + timedOffset + '\n' + floatingHour + '\n' + getAllPlanetsPositions

    const test = getAllPlanetsPositions

    if(!test) {
        throw new Error('no matches for those data');
    }

    //return test;
    return JSON.stringify(test);
}