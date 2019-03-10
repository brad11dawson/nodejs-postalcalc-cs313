const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))

  //.get('/getRate', calculateRate)
  .get('/calculateRate', calculateRate)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

function calculateRate(req, res) {
  var weight = Number(req.query.weight);
  var type = req.query.type;

  if (type == "stamped") {
    getStampedPrice(res, weight);
  } else if (type == "metered") {
    getMeteredPrice(res, weight);
  } else if (type == "flat") {
    getFlatPrice(res, weight);
  } else if (type == "retail") {
    getRetailPrice(res, weight);
  }
}

function getStampedPrice(res, weight) {
  var price;
  if (weight <= 1) {
    price = .55;
  }
  else if (weight <= 2) {
    price = .70;
  }
  else if (weight <= 3) {
    price = .85
  }
  else {
    price = 1.00;
  }
  const params = {price: price};
  res.render('pages/results', params);
}

function getFlatPrice(res, weight) {
  var price;
  if (weight <= 1) {
    price = 1.00;
  }
  else if (weight <= 2) {
    price = 1.15;
  }
  else if (weight <= 3) {
    price = 1.30
  }
  else if (weight <= 4) {
    price = 1.45
  }
  else if (weight <= 5) {
    price = 1.60
  }
  else if (weight <= 6) {
    price = 1.75
  }
  else if (weight <= 7) {
    price = 1.90
  }
  else if (weight <= 8) {
    price = 2.05
  }
  else if (weight <= 9) {
    price = 2.20
  }
  else if (weight <= 10) {
    price = 2.35
  }
  else if (weight <= 11) {
    price = 2.50
  }
  else if (weight <= 12) {
    price = 2.65
  }
  else {
    price = 2.80;
  }

  const params = {price: price};
  res.render('pages/results', params);
}

function getMeteredPrice(res, weight) {
  var price;
  if (weight <= 1) {
    price = .50;
  }
  else if (weight <= 2) {
    price = .65;
  }
  else if (weight <= 3) {
    price = .70
  }
  else {
    price = .75;
  }

  const params = {price: price};
  res.render('pages/results', params);
}

function getRetailPrice(res, weight) {
  var price;
  if (weight <= 4) {
    price = 3.66;
  }
  else if (weight <= 8) {
    price = 4.39;
  }
  else if (weight <= 12) {
    price = 5.19
  }
  else {
    price = 5.71;
  }

  const params = {price: price};
  res.render('pages/results', params);
}
