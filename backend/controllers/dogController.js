const asyncHandler = require('express-async-handler')

// @desc  Get Dogs
// @route GET /api/dogs
// @access Private
const getDogs = asyncHandler( async (req,res) => {
    res.status(200).json({message: 'getDogs'})
})

// @desc  set Dog
// @route POST /api/dogs
// @access Private
const setDog = asyncHandler( async (req,res) => {
    if(!req.body.text){
     throw new Error("Please add text")
    }
        
    res.status(200).json({message: 'getDogs'})
})

// @desc  Get Dogs
// @route GET /api/dogs
// @access Private
const getDog = asyncHandler( async (req,res) => {
    res.status(200).json({message: 'getDogs'})
})

// @desc  Get Dogs
// @route GET /api/dogs
// @access Private
const deleteDog = asyncHandler( async (req,res) => {
    res.status(200).json({message: 'getDogs'})
})

module.exports = {
    getDogs,
    setDog
}