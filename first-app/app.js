const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { notFoundPage } = require('./controllers/errors');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use(notFoundPage);

app.listen(3000);
