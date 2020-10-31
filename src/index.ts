require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? ".env.test" : ".env"
})

import express from 'express'

import './database/connection'

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "Hello"
    })
})

app.listen( process.env.PORT || 3333 )