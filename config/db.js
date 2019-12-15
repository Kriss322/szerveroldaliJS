const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/fishder', { useNewUrlParser: true });

module.exports = mongoose;