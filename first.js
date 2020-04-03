const express = require('express')
var path = require('path');

const app = express()
app.use(express.static(path.join(__dirname, 'public/images')));
const port = 80


// Get the Home page + Set cookies
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/home.html')
})

app.get('/About', function (req, res) {
   
    res.sendFile(__dirname + '/About.html')
})

app.get('/Portfolio', (req, res) => res.sendFile(__dirname + '/Portfolio.html'))
 
app.get('/Contact', (req, res) => res.sendFile(__dirname + '/Contact.html')) 

app.listen(port, () => console.log(`Example app listening on port ${"Listening on port 80"}!`))