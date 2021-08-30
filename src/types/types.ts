export interface Planet  {
    name:string,
    sign:string,
    deg:number,
    min:number
}

export interface InvalidPlanet  {
    error:string
}

export interface City {
    city:string,
    city_ascii:string,
    lat:number,
    lng:number,
    pop:number,
    country:string,
    iso2:string,
    iso3:string,
    province:string,
    timezone:string
}