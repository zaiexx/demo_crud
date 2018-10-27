let mongoose = require('mongoose');

mongoose.connect('mongodb://RIR:esteban123@ds145871.mlab.com:45871/rirnodejscrud', { useNewUrlParser: true }); //mongodb://localhost:27017/crud

module.exports = mongoose;