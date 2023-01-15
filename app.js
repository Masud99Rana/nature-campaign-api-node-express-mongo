const express = require('express');
const morgan = require('morgan');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));


app.get('/', (req,res) => {
  return res.json({hello: 'welcome Masud Rana'});
})

app.get('/hello', (req,res) => {
  return res.json({hello: 'Masud Rana'});
})

app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});


module.exports = app;
