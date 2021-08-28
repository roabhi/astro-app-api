// const swisseph = require ('swisseph')
import * as swisseph from 'swisseph'
import { Planet } from '../../types/types';


const flag = swisseph.SEFLG_SPEED,
      signos:string[] = [
        "aries",
        "tauro", 
        "géminis",
        "cáncer",
        "leo",
        "virgo",
        "libra",
        "escorpio",
        "sagitario",
        "capricornio",
        "acuario",
        "piscis"
      ],
      getIndex = (_long:number):number => {
        return Math.floor(_long / 30);
      },
      getDegree = (_long:number):number => {
        return Math.floor(_long % 30);
      },
      getMin = (_long:number, _deg:number):number => {
        return Math.floor(((_long % 30) - _deg) * 60)
      }

// path to ephemeris data
swisseph.swe_set_ephe_path (__dirname + '/../ephe')


export const allPlanets = (_year:string, _month:string, _day:string, _hour:number):Planet[] => {

    //let __res:string = ''

    const planets:Planet[] = []

    const _pos = swisseph.swe_julday(parseInt(_year, 10), parseInt(_month, 10), parseInt(_day, 10), _hour, swisseph.SE_GREG_CAL, (julday_ut:any) => {
        

        // Sun position
        swisseph.swe_calc_ut (julday_ut, swisseph.SE_SUN, flag, function (body:any) {

            //__res += `\nSol en ${signos[getIndex(body.longitude)]}, en el grado ${getDegree(body.longitude)}, y el minuto ${getMin(body.longitude, getDegree(body.longitude))} \n`

            const planet:Planet = {
              name: `sun`,
              sign: `${signos[getIndex(body.longitude)]}`,
              deg: parseInt(`${getDegree(body.longitude)}`, 10),
              min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

            }

           planets.push(planet)

            
        })

        // Moon position
        swisseph.swe_calc_ut (julday_ut, swisseph.SE_MOON, flag, function (body:any) {

          //__res += `Luna en ${signos[getIndex(body.longitude)]}, en el grado ${getDegree(body.longitude)}, y el minuto ${getMin(body.longitude, getDegree(body.longitude))} \n`

          const planet:Planet = {
            name: `moon`,
            sign: `${signos[getIndex(body.longitude)]}`,
            deg: parseInt(`${getDegree(body.longitude)}`, 10),
            min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

          }

         planets.push(planet)

          
        })

        // Mercury position
        swisseph.swe_calc_ut (julday_ut, swisseph.SE_MERCURY, flag, function (body:any) {

          //__res += `Mercurio en ${signos[getIndex(body.longitude)]}, en el grado ${getDegree(body.longitude)}, y el minuto ${getMin(body.longitude, getDegree(body.longitude))} \n`

          const planet:Planet = {
            name: `mercury`,
            sign: `${signos[getIndex(body.longitude)]}`,
            deg: parseInt(`${getDegree(body.longitude)}`, 10),
            min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

          }

         planets.push(planet)

          
        })

        // Venus position
        swisseph.swe_calc_ut (julday_ut, swisseph.SE_VENUS, flag, function (body:any) {

          //__res += `Venus en ${signos[getIndex(body.longitude)]}, en el grado ${getDegree(body.longitude)}, y el minuto ${getMin(body.longitude, getDegree(body.longitude))} \n`

          const planet:Planet = {
            name: `venus`,
            sign: `${signos[getIndex(body.longitude)]}`,
            deg: parseInt(`${getDegree(body.longitude)}`, 10),
            min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

          }

         planets.push(planet)

          
        })

        // Mars position
        swisseph.swe_calc_ut (julday_ut, swisseph.SE_MARS, flag, function (body:any) {

          //__res += `Marte en ${signos[getIndex(body.longitude)]}, en el grado ${getDegree(body.longitude)}, y el minuto ${getMin(body.longitude, getDegree(body.longitude))} \n`

          const planet:Planet = {
            name: `mars`,
            sign: `${signos[getIndex(body.longitude)]}`,
            deg: parseInt(`${getDegree(body.longitude)}`, 10),
            min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

          }

         planets.push(planet)

          
        })

        // Jupiter position
        swisseph.swe_calc_ut (julday_ut, swisseph.SE_JUPITER, flag, function (body:any) {

          //__res += `Jupiter en ${signos[getIndex(body.longitude)]}, en el grado ${getDegree(body.longitude)}, y el minuto ${getMin(body.longitude, getDegree(body.longitude))} n`

          const planet:Planet = {
            name: `jupiter`,
            sign: `${signos[getIndex(body.longitude)]}`,
            deg: parseInt(`${getDegree(body.longitude)}`, 10),
            min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

          }

         planets.push(planet)

          
        })

        // Saturn position
        swisseph.swe_calc_ut (julday_ut, swisseph.SE_SATURN, flag, function (body:any) {

         // __res += `Saturno en ${signos[getIndex(body.longitude)]}, en el grado ${getDegree(body.longitude)}, y el minuto ${getMin(body.longitude, getDegree(body.longitude))}`
          const planet:Planet = {
              name: `saturn`,
              sign: `${signos[getIndex(body.longitude)]}`,
              deg: parseInt(`${getDegree(body.longitude)}`, 10),
              min: parseInt(`${getMin(body.longitude, getDegree(body.longitude))}`, 10)

            }

           planets.push(planet)
          
        })
        

    })



    if(!_pos){
        throw new Error('no positions available')
    }

    return planets

}