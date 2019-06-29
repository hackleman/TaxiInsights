const Pool = require('pg').Pool

const pool = new Pool({
    user:"postgres",
    host: "localhost",
    database: "postgres",
    password: "1234",
    port: "5432"
  })

const getYellowTrips = (req, res) => {
  // query first 10,000 until stream is implemented
  pool.query('SELECT * FROM YELLOWTRIP WHERE TRIPID < 10000', (err, results) => {
      if (err) {
          throw err
      }
      res.status(200).json(results.rows)
  })
}


const getYellowTrip = (req, res) => {

  let id = parseInt(req.params.id)

  if (isNaN(id)) id = 0

  pool.query('SELECT * FROM YELLOWTRIP WHERE TRIPID = $1', [id], (err, results) => {
      if (err) {
          throw err
      }
      res.status(200).json(results.rows)
  })
}

const getGreenTrips = (req, res) => {
    // query first 10,000 until stream is implemented
  pool.query('SELECT * FROM GREENTRIP WHERE TRIPID < 10000', (err, results) => {
      if (err) {
          throw err
      }
      res.status(200).json(results.rows)
  })
}


const getGreenTrip = (req, res) => {

  let id = parseInt(req.params.id)

  if (isNaN(id)) id = 0

  pool.query('SELECT * FROM GREENTRIP WHERE TRIPID = $1', [id], (err, results) => {
      if (err) {
          throw err
      }
      res.status(200).json(results.rows)
  })
}

const getFHVTrips = (req, res) => {
  // query first 10,000 until stream is implemented
pool.query('SELECT * FROM GREENTRIP WHERE TRIPID < 10000', (err, results) => {
    if (err) {
        throw err
    }
    res.status(200).json(results.rows)
})
}


const getFHVTrip = (req, res) => {

let id = parseInt(req.params.id)

if (isNaN(id)) id = 0

pool.query('SELECT * FROM GREENTRIP WHERE TRIPID = $1', [id], (err, results) => {
    if (err) {
        throw err
    }
    res.status(200).json(results.rows)
})
}

module.exports = {
  getYellowTrips,
  getYellowTrip,
  getGreenTrips,
  getGreenTrip,
  getFHVTrips,
  getFHVTrip
}