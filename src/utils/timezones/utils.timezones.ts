import { CityData, lookupViaCity } from "city-timezones"; //interface defined by city-timezones
import { City } from "../../types/types"; //Custom City interface

export const getTimeZoneByCity = (_city:City | {timezone:string} ):string => {
    const timezone:string = _city.timezone 

    // console.log('timezone is ',timezone)

    // if(!timezone) {
    //     throw new Error('No time zone found for that City')
    // }

    return timezone
},


getCityInCountry = (_cities:CityData[] | [], _country:string):City | {timezone:string} => {

    /**
     * ! country is defined as iso2 code so Spain = ES   
     */

    // console.log('cities are ', _cities)

    const cityInCountry:City | {timezone:string} = _cities.find(__c => __c.iso2.toLowerCase() === _country.toLowerCase()) || {timezone : ' '}

    // console.log('city in country is ', cityInCountry)

    // if(!cityInCountry || cityInCountry === undefined) {
    //     throw new Error('No city matches that country')
    // }

    

    return cityInCountry

},


getMatchingCities = (_city:string):CityData[] | [] => {
    const cityLookup = lookupViaCity(`${_city}`)

    if(!cityLookup) {
        throw new Error('Not matching cities for that search')
    }

    return cityLookup    
}