
// const express=require('express')
import express from 'express'
// const router=express.Router()

// const Workout = require('../models/workoutModel.js')
import Workout from '../models/workoutModel.js'

const router = express.Router()
import { deleteWorkout, getWorkouts } from '../controllers/workoutContrrollers.js'



// GET all workouts
router.get('/', getWorkouts)
router.delete('/:id', deleteWorkout)

  router.post('/', async (req, res) => {
    const {title, load, reps} = req.body
      
      try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
      } catch (error) {
        res.status(400).json({error: error.message})
      }
  })

// module.exports=router
export default router