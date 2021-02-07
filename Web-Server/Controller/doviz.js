const express = require('express');
const api = express();
var tcmbDovizKuru = require('tcmb-doviz-kuru');



function cb(error, data) {
    if (error) {
        console.log('error', error)
    }
    console.log(JSON.stringify(data));
}
 
tcmbDovizKuru(cb);