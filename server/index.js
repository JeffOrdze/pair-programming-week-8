const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()

const { PORT } = process.env
const catsRoute = require("./routes/cats")

app.use(cors())
app.use(express.json())
app.use('/static, express.static'('public'))

app.use("/cats" , catsRoute)

app.listen(PORT || 8000, () => console.log(`Listening on ${PORT}`))