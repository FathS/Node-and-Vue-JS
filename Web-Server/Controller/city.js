const express = require('express');
const api = express();


var city = [{ name: "İstanbul" }, { name: "Ankara" }];

var getCity = api.get("/", function (req, res) {
    res.status(200).json(city);
});

module.exports = getCity;