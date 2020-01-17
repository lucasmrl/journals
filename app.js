const path = require('path');
const express = require('express');
const journalRouter = require('./routes/journalRoutes');
const viewRouter = require('./routes/viewRoutes');
const app = express();
const compression = require('compression');

//To set PUG as the template
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
//app.use(express.json()); //Makes "req.boy" available (Use for my API)
app.use(
  express.urlencoded({
    extended: false
  })
); //Makes "req.boy" work for getting input from FORMS
app.use(express.static(path.join(__dirname, 'public')));
app.use(compression());

// Routes
app.use('/', viewRouter);
app.use('/api/v1/journals', journalRouter);

if (process.env.NODE_ENV === 'development') {
  console.log('We are in DEVELOPMENT');
} else {
  console.log(`We are in ${process.env.NODE_ENV}`);
}

module.exports = app;
