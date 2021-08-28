import { DateTime } from "luxon"

export const getSwissEphReadyHour = (_hour:string, _minutes:string, _offset:number):number => {

    const sweHour:number = parseInt(_hour) + (-(_offset / 60)) + (parseInt(_minutes) * 100 / 60) / 100

    if(!sweHour){
        throw new Error('Not possible to get a Swiss Epehemerides hour')
    }

    return sweHour

},

getOffsetFromDate = (_year:string, _month:string, _day:string, _hour:string, _minutes:string, _iana:string):number => {
    
    const _offset:DateTime = DateTime.fromObject({year: parseInt(_year,10), month: parseInt(_month, 10), day: parseInt(_day, 10), hour: parseInt(_hour, 10), minute: parseInt(_minutes, 10) }, { zone: _iana})

    if(!_offset) {
        throw new Error('Could not get an offset')
    }
    
    return _offset.offset
}