
// require('dotenv').config()
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import mongoose from 'mongoose'
import workoutRoutes from './routes/workouts.js'

const app=express()

app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })
  
//   // routes
app.use('/api/workouts', workoutRoutes)

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(process.env.PORT, () => {
      console.log('listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
      console.log(error)
  })