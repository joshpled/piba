const mongoose = require('mongoose');

const dogSchema = mongoose.Schema(
  {
    // internalId: {
    //   type: Number,
    //   unique: true,
    //   immutable: true,
    //   required: true,
    // },
    name: {
      type: String,
      lowercase: true,
      required: [true, 'Add a name'],
    },
    type: {
      type: String,
      default: 'Dog',
      immutable: true,
      // required: true,
    },
    currentLocation: {
      type: String,
      // required: [true, 'Add a Location'],
    },
    sex: {
      type: String,
      // required: [true, 'Male or Female?'],
    },
    status: {
      type: String,
      // required: [true, 'Choose a status'],
    },
    currentWeightPounds: {
      type: Number,
      // required: [true, 'Add weight'],
    },
    size: {
      type: String,
      // required: [true, 'Set a size category'],
    },
    dateOfBirth: {
      type: Date,
    },
    // photos: {
    //   type: [String],
    // },
    // videos: {
    //   type: [String],
    // },
    // breed: {
    //   type: String,
    //   required: [true, 'Set a breed'],
    // },
    // color: {
    //   type: String,
    //   required: [true, 'Set a color'],
    // },
    // pattern: {
    //   type: String,
    //   required: [true, 'Set a pattern'],
    // },
    // adoptionFeeGroup: {
    //   type: String,
    //   required: [true, 'Set an adoption fee group'],
    // },
    // description: {
    //   type: String,
    //   required: [true, 'Set a description'],
    // },
    // microchips: {
    //   type: Number,
    //   required: [true, 'Set microchip'],
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Dog', dogSchema);
