const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, '..', '/dist/waygate')));

app.get('/content', (req, res) => {
  const { chapter, sub } = req.query;
  fs.readFile(path.join(__dirname, './contents', chapter, sub, 'content.json'), 'utf-8', (err, data) => {
    if (err) {
      return res.send(err);
    }
    return res.send(data)
  });
});


app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname, '..', '/dist/waygate/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
