const express = require('express');
const fs = require('fs');
const router = express.Router();
const handler = require('./handler');

const CART_PATH = 'Database/cart.json';

router.get('/', (req, res) => {
    fs.readFile(CART_PATH, 'utf-8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result:0, text: err}));
        } else {
            res.send(data);
        }
    })
});

router.post('/', (req, res) => {
    handler(req, res, 'add', CART_PATH);
});

router.put('/', (req, res) => {
    handler(req, res, 'change', CART_PATH);
});

module.exports = router;