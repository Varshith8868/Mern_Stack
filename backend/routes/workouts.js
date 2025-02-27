
const express=require('express')

const Workout = require('../model/workoutModel')

const router = express.Router()



// GET all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
  })

  router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
      
      try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
      } catch (error) {
        res.status(400).json({error: error.message})
      }
  })

module.exports=router