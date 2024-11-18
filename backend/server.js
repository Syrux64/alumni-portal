const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();


app.use(cors())

const port = process.env.PORT

app.get("/api", (req, res) => {
    res.send("This is API");
})

app.get("/api/profile/", (req, res) => {
    res.json({1: "current User"})
})

app.get("/api/profile/:username", (req, res) => {
    const userName = req.params.username;
    res.json({1:userName})
})


app.listen(port, () => console.log(`Server listening on port ${port}`))