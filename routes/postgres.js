const express = require('express');
const router = express.Router();
const postgres = require('../database/queries/example');


router.get('/users', postgres.getUsers);
router.get('/users/:id', postgres.getUsersById);

module.exports = router;
