import { Planet } from "../types/types";
import { getOffsetFromDate, getSwissEphReadyHour } from "../utils/luxon/utils.luxon";
import { allPlanets } from "../utils/swisseph/utils.swisseph";
import { getMatchingCities, getCityInCountry, getTimeZoneByCity } from "../utils/timezones/utils.timezones";


export function getFullPlanetsPosition(_country:string, _city:string, _day:string, _month:string, _year:string, _hour:string, _minutes:string):Planet[] {
    // const _results = `${country}, ${city}, ${day}, ${month}, ${year}, ${hour}, ${minute}`

    const matchingCities = getMatchingCities(_city),
          cityInGivenCountry = getCityInCountry(matchingCities, _country),
          timezoneByCity = getTimeZoneByCity(cityInGivenCountry),
          timedOffset = getOffsetFromDate(_year, _month, _day, _hour, _minutes, timezoneByCity),
          floatingHour = getSwissEphReadyHour(_hour, _minutes, timedOffset),
          getAllPlanetsPositions = allPlanets(_year, _month, _day, floatingHour)

    

    //console.log(getAllPlanetsPositions)

    //const test = JSON.stringify(matchingCities) + '\n' + JSON.stringify(cityInGivenCountry) + '\n' + timezoneByCity + '\n' + timedOffset + '\n' + floatingHour + '\n' + getAllPlanetsPositions

    const test = getAllPlanetsPositions

    // try{
    //     test[0].name
    // }catch(e) {
    //     throw new Error('no matches for those data');
    // }

    if(!test[0].name) {
        throw new Error();
    }

    

    return test;
 
}