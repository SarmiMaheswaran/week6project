require('events').EventEmitter.defaultMaxListeners = 20;
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const foodItemRoutes = require('./routes/foodItems');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/food-nutrition', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/food-items', foodItemRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
