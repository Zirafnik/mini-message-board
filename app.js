const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 5000;

// EJS middleware
app.set('view engine', 'ejs');

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Home router
app.use('/', require('./routes/index'));

// New post router
app.use('/new', require('./routes/new'));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));