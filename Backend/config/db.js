const mongoos = require('mongoose');

const url='mongodb://sdirectdb:sdirectdb@192.168.0.5:27017/sdirectdb';
const connect=mongoos.connect(url);
exports.connect;
