const fs = require("fs");
fs.writeFileSync("a.txt","boom its workked")
const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo1234!')
})
app.listen(process.env.PORT || 3000)