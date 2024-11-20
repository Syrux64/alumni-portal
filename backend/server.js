const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config();
const profiles = require("./temp/userProfile.json");
const feeds = require("./temp/postData.json")

app.use(cors())

const port = process.env.PORT

app.get("/api/feed", (req, res) => {
    res.json(feeds);
})

app.get("/api/profile/", (req, res) => {
    res.json({1: "current User"})
})


app.get("/api/profile/:username", (req, res) => {
    const userName = req.params.username;
    const userProfile = profiles.find(profile => profile[userName]);

    if (userProfile && userProfile[userName]) {
        console.log(userProfile[userName])
        res.json(userProfile[userName]);
    } else {
        res.status(303).json({ error: "User not found" });
    }
});


app.listen(port, () => console.log(`Server listening on port ${port}`))