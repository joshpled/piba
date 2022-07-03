const mongoose = require('mongoose');

const personSchema = mongoose.Schema(
  {
    internalId: {
      type: String,
      unique: true,
      immutable: true,
      required: true,
    },
    name: {
      type: String,
      lowercase: true,
      required: [true, 'Add a name'],
    },
    type: {
      type: String,
      lowercase: true,
      default: 'dog',
      immutable: true,
      required: true,
    },
    address: {
      type: String,
      lowercase: true,
      required: [true, 'Add an Address'],
    },
    sex: {
      type: String,
      lowercase: true,
      required: [true, 'Male or Female?'],
    },
    status: {
      type: String,
      lowercase: true,
      required: [true, 'Choose a status'],
    },
    currentWeightPounds: {
      type: Number,
      required: [true, 'Add weight'],
    },
    size: {
      type: String,
      lowercase: true,
      required: [true, 'Set a size category'],
    },
    dateOfBirth: {
      type: Date,
      required: [true, 'Set a Birth Date'],
    },
    photos: {
      type: [String],
    },
    videos: {
      type: [String],
    },
    breed: {
      type: String,
      lowercase: true,
      required: [true, 'Set a breed'],
    },
    color: {
      type: String,
      lowercase: true,
      required: [true, 'Set a color'],
    },
    pattern: {
      type: String,
      lowercase: true,
      required: [true, 'Set a pattern'],
    },
    adoptionFeeGroup: {
      type: String,
      lowercase: true,
      required: [true, 'Set an adoption fee group'],
    },
    description: {
      type: String,
      lowercase: true,
      required: [true, 'Set a description'],
    },
    microchips: {
      type: String,
      required: [true, 'Set microchip'],
      // unique: true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Person', personSchema);
