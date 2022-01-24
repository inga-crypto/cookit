'use strict'

import express from 'express';
import morgan from 'morgan';
import router from './router';
import cors from 'cors';
const corsConfig: cors.CorsOptions  = {
  origin: 'http://localhost:3000',
  credentials: true,
}

const app = express()

app.use(morgan('dev'))
app.use(cors(corsConfig))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.get('*', (req, res) => {
  res.status(404).send('404 Page Not Found')
})

export default app;