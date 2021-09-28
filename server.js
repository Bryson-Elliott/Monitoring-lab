const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 5150

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('Html was monitored successfully!')
})

app.listen(port, () => console.log(`Listening in the halls on port: ${port}`))