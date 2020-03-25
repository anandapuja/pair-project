const route = require('express').Router();

route.get('/', (req,res) => res.send('from main route'));

module.exports = route;