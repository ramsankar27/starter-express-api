const express = require('express')
const fs = require("fs")
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!");
    fs.writeFileSync("a.txt", "boom its workked");
    res.send('Yo1234!')
})
app.listen(process.env.PORT || 3000)
