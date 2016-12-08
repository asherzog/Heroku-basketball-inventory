const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const knex = require('./db/knex');
const port = process.env.PORT || 3000;


app.listen(port, () =>{
  console.log(`listening on ${port}`);
});

app.get('/gear', (req, res) =>{
  knex('gear')
  .then(function(data) {
    res.json(data);
  });
});

app.get('/gear/:id', (req, res) =>{
  knex('gear')
  .where('id', req.params.id)
  .then(function(data) {
    res.json(data);
  });
});

app.post('/gear', (req, res) =>{
  knex('gear')
  .insert({
    jersey_size: req.body.jersey_size,
    shoe_size: req.body.shoe_size,
    team_name: req.body.team_name
  }, '*')
  .then(function(data){
    res.json(data);
  });
});

app.put('/gear/:id', (req, res) =>{
  knex('gear')
  .where('id', req.params.id)
  .update({
    jersey_size: req.body.jersey_size,
    shoe_size: req.body.shoe_size,
    team_name: req.body.team_name
  })
  .then(function(data){
    res.json(data);
  });
});

app.delete('/gear/:id', (req, res) =>{
  knex('gear')
  .where('id', req.params.id)
  .del()
  .then(function(data) {
    res.json(data);
  });
});
