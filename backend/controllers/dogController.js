const asyncHandler = require('express-async-handler');
const Dog = require('../models/dogModel');
const { nanoid } = require('nanoid');

// @desc  Get Dogs
// @route GET /api/dogs
// @access Private
const getDogs = asyncHandler(async (req, res) => {
  try {
    const dogs = await Dog.find();
    res.status(200).json(dogs);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc  Set Dog
// @route POST /api/dogs
// @access Private
const setDog = asyncHandler(async (req, res) => {
  try {
    const dog = await Dog.create({ ...req.body, internalId: nanoid() });
    res.status(200).json(dog);
  } catch (error) {
    throw new Error(error);
  }
});

// @desc  Update Dog
// @route PUT /api/dog/:id
// @access Private
const updateDog = asyncHandler(async (req, res) => {
  try {
    const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedDog);
  } catch (err) {
    throw new Error(err);
  }
});

// @desc  Delete Dog
// @route DELETE /api/dog/:id
// @access Private
const deleteDog = asyncHandler(async (req, res) => {
  try {
    const deletedDog = await Dog.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedDog);
  } catch (error) {
    throw new Error(error);
  }
});

module.exports = {
  getDogs,
  setDog,
  updateDog,
  deleteDog,
};
