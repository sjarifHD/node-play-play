import express from 'express'
import fetch from 'node-fetch';

const router = express.Router()
const BASE_URL = "http://localhost:2516"

router.get('/', async (req, res, next) => {
    const response = await fetch(`${BASE_URL}/`)
    const feedlogs = await response.json()
    res.send(feedlogs)
})

router.get('/gzip', async (req, res, next) => {
    const response = await fetch(`${BASE_URL}/gzip`)
    const feedlogs = await response.json()
    res.send(feedlogs)
})

router.get('/msgpack', (req, res, next) => {
    res.send('feedlogs msgpack')
})

export default router