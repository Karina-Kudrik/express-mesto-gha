const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const { PORT = 3000 } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb')
.then(() => console.log('Mongo подключен'))
.catch((err) => console.log(err.message));

const routesUsers = require('./routes/users');
const routesCards = require('./routes/cards');

app.use((req, res, next) => {
  req.user = {
    _id: '62e6665b46fcfb6435a88644'
  };

  next();
});

app.use('/users', routesUsers);
app.use('/cards', routesCards);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})