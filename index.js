var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(function(err, req, res, next){
  if(!err){
    next();
  }
  res.status(500).send(JSON.stringify(err));
});

app.use(function(req, res){
  return res.redirect('/');
})

app.listen(3000, function () {
  console.log('server start and listening on port 3000.');
});
