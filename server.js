const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const router = require('./router');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
router(app);



app.enable('trust proxy');

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Headers', ['email', 'Authorization', 'x-forwarded-proto', 'host']);
  //res.append('Content-Type','application/json');
  next();
});

app.use(cors());

if (process.env.NODE_ENV === 'production') {
app.use(function(req, res, next){
  console.log('request', req);
  if(req.header('x-forwarded-proto') !== 'https'){
    console.log('redirecting', req);
    res.redirect('https://canchain.herokuapp.com' + req.url);
  }else{
    next();
  }
})
}

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

// Server Setup
const port = process.env.PORT || 5000;
const server = http.createServer(app);
server.listen(port, () => {
  console.log('Server listening on:', port);
});
