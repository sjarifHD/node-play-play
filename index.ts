import express from 'express'
import morgan from 'morgan'
import feedlogs from './src/feedlogs'

const app = express()
const PORT = 2019

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => res.send('Express + TypeScript Server'))
app.use('/feedlogs', feedlogs)

app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`)
})