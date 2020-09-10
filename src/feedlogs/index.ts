import express from 'express'
import * as feedlogs from './feedlogs.json'

const router = express.Router()

router.get('/', function (req, res, next) {
    res.send(feedlogs)
})

router.get('/gzip', function (req, res, next) {
    res.send('feedlogs gzip')
})

router.get('/msgpack', function (req, res, next) {
    res.send('feedlogs msgpack')
})

export default router