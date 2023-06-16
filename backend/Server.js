const express = require('express');
const request = require('request');
const app = express()
// const axios = require('axios');
const cors = require('cors');
const {  mongoose } = require('mongoose');
const Routes = require('./routes/weatherRouter');
require('dotenv').config()

app.use(cors())

app.use(express.urlencoded({ extended: false }))

const PORT = process.env.PORT || 9000



app.use(Routes)

app.listen(process.env.PORT, () => {
  console.log(`Server started at ${PORT}`)
})


mongoose.connect(process.env.MONGO_URI,{
  dbName: process.env.DB_NAME
}).then(()=>console.log("connected to mongoDB")).catch((err)=>console.log(err))

mongoose.connection.on('connected', () => {
  console.log("connected to db");
})
mongoose.connection.on('error', (err) => {
  console.log(("error", err));
})