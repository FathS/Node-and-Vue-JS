const express = require('express');
const api = express();

var users = [{ username: "Fatih@test.com", password: "123456", age: 25 }, { username: "Recep", password: "123456", age: 17 }];

var Accounts = api.get("/", function (req, res) {
    res.status(200).json(users);
});

var loginPost = api.post("/", function (req, res) {
    var userBody = req.body;
    var user = users.find(function (item) {
        return item.username == userBody.username && item.password == userBody.password;
    });

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "Hatalı Giriş Denemesi" });
    }

})
module.exports = loginPost;
module.exports = Accounts;