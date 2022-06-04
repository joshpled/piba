const asyncHandler = require('express-async-handler')
const Dog = require('../models/dogModel')
const {nanoid} = require('nanoid')

// @desc  Get Dogs
// @route GET /api/dogs
// @access Private
const getDogs = asyncHandler( async (req,res) => {
    const dogs = await Dog.find()
    res.status(200).json(dogs)
})

// @desc  set Dog
// @route POST /api/dogs
// @access Private
const setDog = asyncHandler( async (req,res) => {
    if(!req.body.text){
     throw new Error("Please add text")
    }

    const dog = await Dog.create(req.body)
        
    res.status(200).json(dog)
})

// @desc  Update Dog
// @route PUT /api/dog
// @access Private
const updateDog = asyncHandler( async (req,res) => {
    const dog = await Dog.findById(req.params.id)
    if(!dog){
        res.status(400)
        throw new Error('Dog not found')
    }
    const updatedDog=await Dog.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedDog)
})

// @desc  Get Dogs
// @route GET /api/dogs
// @access Private
const deleteDog = asyncHandler( async (req,res) => {
    const dog = await Dog.findById(req.params.id)
    if(!dog){
        res.status(400)
        throw new Error('Dog not found')
    }
    const deletedDog=await Dog.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedDog)
})

module.exports = {
    getDogs,
    setDog,
    updateDog, 
    deleteDog
}