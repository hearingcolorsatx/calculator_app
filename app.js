const express = require('express');
const Calculator = require('./src/calculator')

const app = express();
const port = 3000;

const calculator = new Calculator();

app.get('/add', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = calculator.add(a, b);
    res.json({ result });
});

app.get('/subtract', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = calculator.subtract(a, b);
    res.json({ result });
});

app.get('/multiply', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const result = calculator.multiply(a, b);
    res.json({ result });
});

app.get('/divide', (req, res) => {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  const result = calculator.divide(a, b);
  res.json({ result });
});
  

app.listen(port, () => {
console.log(`Server is listening on port ${port}`);
});

