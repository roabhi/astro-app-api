// const swisseph = require ('swisseph')
import * as swisseph from 'swisseph'
import { Planet } from '../../types/types';


const flag = swisseph.SEFLG_SPEED,

planets:Planet[] = [],

sign_names:string[] = [
  "aries",
  "taurus", 
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
],


planets_names:string[] = [
  "sun",
  "moon",
  "mercury",
  "venus",
  "mars",
  "jupiter",
  "saturn"
],


getIndex = (_long:number):number => {
  return Math.floor(_long / 30);
},


getDegree = (_long:number):number => {
  return Math.floor(_long % 30);
},


getMin = (_long:number, _deg:number):number => {
  return Math.floor(((_long % 30) - _deg) * 60)
},


planetIsValid = (_p:Planet):boolean => {        
  return _p.sign !== 'undefined'
},


buildPlanet = (_index:number, _julday_ut:any) => {
    
    /**
     * ?
     * ? passing _index as SE_#PLANET#:number to swisseph.swe_cal_ut since they are actually just numbers and share index from our planets_names array structure ["sun"... "saturn"] [0 ... 6]
     * ?
     * ? see node_modules/swisseph/lib/swisseph.js lines 16 to 28
     * ?
     */

    swisseph.swe_calc_ut (_julday_ut, _index, flag, function (body:any) {

      const planet:Planet = {
        name: `${planets_names[_index]}`,
        sign: `${sign_names[getIndex(body.longitude)]}`,
        deg: parseInt(`${getDegree(body.longitude)}`, 10),
        min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

      }
    
      planetIsValid(planet) ? planets.push(planet) : null 

    })

}

// path to ephemeris data
swisseph.swe_set_ephe_path (__dirname + '/../ephe')


export const allPlanets = (_year:string, _month:string, _day:string, _hour:number | never):Planet[] | [] => {

    const _pos = swisseph.swe_julday(parseInt(_year, 10), parseInt(_month, 10), parseInt(_day, 10), _hour, swisseph.SE_GREG_CAL, (julday_ut:any) => {
        
        for (let _i:number = 0; _i < planets_names.length; _i++) {          
          
          buildPlanet(_i, julday_ut)
         
        } 
        

    })



    //console.log('pos is ', _pos)

    // if(planets.length < 1){
    //   throw new Error('no positions available')
    // }

    //console.log(planets[0])

    return planets

    

}