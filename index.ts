import express from 'express'
import feedlogs from './src/feedlogs'

const app = express()
const PORT = 8000

app.use('/feedlogs', feedlogs)

app.get('/', (req, res) => res.send('Express + TypeScript Server'))

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})