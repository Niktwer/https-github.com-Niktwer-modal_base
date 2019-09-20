'use strict';
var express = require('express');
var router = express.Router();

var getData = function () {
    var data = {
        'item1': 'jpg',
        'item2': 'cactus-77.jpg',
        'item3': 'actus-78.jpg'
    }
    return data;
}


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', "data": getData()  });
});

module.exports = router;
