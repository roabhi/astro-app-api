import cors from 'cors'
import express from 'express'

import { getFullPlanetsPosition } from '../database/database'

export default function createServer () {

    const app = express(),
          allowedOrigins = ['http://localhost:5000', 'http://localhost:3000', 'http://localhost:1234'],
          options: cors.CorsOptions = {
              origin:allowedOrigins
          }

    app.use(cors(options))

    app.set('port', (process.env.PORT || 3001))

    app.get('/', (req, res) => {
        const result = 'App is running ok'
        console.log(result)
        res.send(result)
    })

    app.get('/planets/positions/all/:country/:city/:day/:month/:year/:hour/:minute', (req, res) => {
         try{
            const data = getFullPlanetsPosition(req.params.country, req.params.city, req.params.day, req.params.month, req.params.year, req.params.hour, req.params.minute)

            
            res.json({data})
            
            


         }catch (e) {
            //  res.status(400).json({
            //      error:e.message
            //  })

            res.status(400).json({data:[{error:'no matches found, please check you city spelling'}]})
         } 
    })

    return app

}