const express = require('express');
const fs = require("fs");
const bodyParser = require('body-parser');
const cartRouter = require('./cartRouter');

const app = express();

const CATALOG_PATH = 'Database/catalog.json';

app.use(express.static('.'));
app.use(bodyParser.json());
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
    fs.readFile(CATALOG_PATH, 'utf8', (err, data) => {
        res.send(data);
    });
});

app.listen(3000, function() {
    console.log('server is running on port 3000!');
});