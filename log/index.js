const { blue } = require('chalk');
const log = str => console.log(blue(str));

//back end console.logs are now blue can be passed around
module.exports = log;
