const birthDays = () => {
  function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  }

  const d = randomDate(new Date(2012, 0, 1), new Date());
  console.log(d);
};

const fauxData = [
  {
    name: 'Kyle',
    currentLocation: 'Saint Petersburg',
    sex: 'male',
    status: 'Needs Register',
    currentWeightPounds: 23,
    size: 'medium',
    dateOfBirth: birthDays(),
    photos: [],
    videos: [],
    breed: '',
    color: '',
    pattern: '',
    adoptionFeeGroup: '',
    description: '',
    microchips: 0,
  },
];
