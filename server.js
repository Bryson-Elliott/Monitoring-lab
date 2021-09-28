const express = require('express')
const path = require('path')
const app = express()
app.use(express.json())

const Rollbar = require('rollbar')

const rollbar = new rollbar({
    accessToken: '92243ec78f04409198c46f650b5dfb40',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('Html was monitored successfully!')
})

const port = process.env.PORT || 5150

app.use(rollbar.errorHandler())

app.listen(port, () => console.log(`Listening in the halls on port: ${port}`))