const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/simple-mern');

module.exports = mongoose;
