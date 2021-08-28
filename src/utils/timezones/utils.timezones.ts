import { CityData, lookupViaCity } from "city-timezones"; //interface defined by city-timezones
import { City } from "../../types/types"; //Custom City interface

export const getTimeZoneByCity = (_city:City):string => {
    const timezone = _city.timezone

    if(!timezone) {
        throw new Error('No time zone found for that City')
    }

    return timezone
},


getCityInCountry = (_cities:CityData[], _country:string):City => {

    /**
     * ! country is defined as iso2 code so Spain = ES   
     */

    const cityInCountry = _cities.find(__c => __c.iso2.toLowerCase() === _country.toLowerCase())

    if(!cityInCountry) {
        throw new Error('No city matches that country')
    }

    return cityInCountry

},


getMatchingCities = (_city:string):CityData[] => {
    const cityLookup = lookupViaCity(`${_city}`)

    if(!cityLookup) {
        throw new Error('Not matching cities for that search')
    }

    return cityLookup    
}