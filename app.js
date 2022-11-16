const express = require('express');
const cookieParser = require('cookie-parser');
const db = require("./src/database/ConnectionMongoose");

const app = express()
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => console.log(`Server up on port ${PORT}`))
const database = app.listen(db)

app.use(express.json())
app.use(express.urlencoded({extended:true}))