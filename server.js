const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 5150

app.listen(port, () => console.log(`Listening in the halls on port: ${port}`))