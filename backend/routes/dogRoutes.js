const express = require('express')
const router = express.Router()
const {getDogs, setDog} = require('../controllers/dogController')

router.route('/').get(getDogs).post(setDog)

module.exports = router