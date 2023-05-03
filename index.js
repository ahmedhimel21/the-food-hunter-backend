const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

const chef = require('./data/chef.json');

app.use(cors());

app.get(
  '/',
  (req,res) =>{
    res.send('food hunter running')
  }
);

app.get('/chef',(req,res) =>{
  res.send(chef)
})

app.get('/chef/:id',(req,res) =>{
  const id = req.params.id;
  const singleChef = chef.find(c => c.id ==id);
  res.send(singleChef)
})
app.listen(
  port, () =>{
    console.log(`server is running on port: ${port}`)
  }
);