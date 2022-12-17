const express = require('express')
const app = express()

let a = [];
let i=0;
app.all('/', (req, res) => {
    i++;
    a.push(i)
    res.send(JSON.stringify(a))
})
app.listen(process.env.PORT || 3000)
