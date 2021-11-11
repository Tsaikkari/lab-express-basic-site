const express = require('express');
const cats = require('./cats')

const app = express();
const port = 3000;

// registers the public folder so that we can access the static assets in the client
app.use(express.static(__dirname + '/public'));
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home-page.html');
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
})

app.get('/works', (req, res) => {
  res.sendFile(__dirname + '/views/works.html')
})

app.get('/cat', (req, res) => {
  res.sendFile(__dirname + '/views/cat-page.html');
})

app.get('/cats', (req, res) => {
  res.json(cats)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})