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
  if (!req.body) {
    throw new Error('Must include a json object');
  }
  console.log(req.body);
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
  const dog = await Dog.findById(req.params.id);
  if (!dog) {
    res.status(400);
    throw new Error('Dog not found');
  }
  const updatedDog = await Dog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedDog);
});

// @desc  Delete Dog
// @route DELETE /api/dog/:id
// @access Private
const deleteDog = asyncHandler(async (req, res) => {
  const dog = await Dog.findById(req.params.id);
  if (!dog) {
    res.status(400);
    throw new Error('Dog not found');
  }
  const deletedDog = await Dog.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedDog);
});

module.exports = {
  getDogs,
  setDog,
  updateDog,
  deleteDog,
};
