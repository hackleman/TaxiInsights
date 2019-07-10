const express = require('express');
const router = express.Router();
const zones = require('../database/queries/zones');
const trips = require('../database/queries/trips');

router.get('/zones', zones.getZones);
router.get('/zones/:id', zones.getZone);
router.get('/yellowtrip', trips.getYellowTrips);
router.get('/costhour/:id', trips.getCostHour);
router.get('/yellowtrip/:id', trips.getYellowTrip);
router.get('/greentrip', trips.getGreenTrips);
router.get('/greentrip/:id', trips.getGreenTrip);
router.get('/fhvtrip', trips.getFHVTrips);
router.get('/fhvtrip/:id', trips.getFHVTrip);


module.exports = router;
