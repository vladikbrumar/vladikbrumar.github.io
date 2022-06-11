// imports
const express = require('express');

const port = 3000
const app = express()

// set the view engine to ejs
app.set('view engine', 'ejs');

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/data', express.static(__dirname + 'public/data'));





app.get('/', function(req, res){
    res.redirect('/home');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/views/portfolio.html')
})

// Listen to port
app.listen(port, () => console.log(`listening to port ${port}`))