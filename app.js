const express = require('express');
const app = express();
const MainRoute = require('./routes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended:true }));

app.use('/', MainRoute);

app.listen(3000, () => console.log('nyala'));