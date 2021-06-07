const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());
const axios = require('axios');

app.use(express.static('client/dist'));
const products = require('./controllers/products.js');
const questionsAndAnswers = require('./controllers/questionsandanswers.js');
const reviews = require('./controllers/reviews.js');

app.get('/api/products', products.get);
app.get('/qa/questions/:product_id', questionsAndAnswers.get);
//Reviews
app.get('/reviews/:product_id', reviews.get);
app.get('/reviews/meta/:product_id', reviews.getMeta);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})