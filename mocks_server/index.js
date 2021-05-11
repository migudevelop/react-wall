'use strict'
const express = require('express')
const app = express()

const port = process.env.PORT || '3005'

const userRoutes = require('./routes/user')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Configure headers and CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method'
  )
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE')
  next()
})

//Add /api in start
app.use('/api', userRoutes)

app.listen(port, () => console.log(`Conected in port: ${port}`))
