const express = require('express');
const api = express();
const axios = require('axios').default;
var port = 5000;
api.listen(port, () => {
    console.log(port + " No'lu port Çalıştı")
});

var bodyParser = require('body-parser');
api.use(bodyParser.json({ limit: "5mb" }));
api.use((req, res, next) => { // CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "HEAD, POST, PUT, GET, DELETE, PATCH");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Controllers
const city = require('./Controller/city');
const account = require('./Controller/Account')
const { request } = require('express');


api.use("/city", city);
api.use("/account", account);

//Models
var personels = [
    { "id": 1, "name": "Fatih", "surname": "Şengül", "age": 25, "createdOn": new Date(), "isActive": true },
    { "id": 2, "name": "TestAd", "surname": "TestSoyad", "age": 17, "createdOn": new Date(), "isActive": true },
    { "id": 5, "name": "TestAd2", "surname": "TestSoyad2", "age": 23, "createdOn": new Date(), "isActive": true },
    { "id": 5, "name": "TestAd4", "surname": "TestSoyad4", "age": 16, "createdOn": new Date(), "isActive": true },
    { "id": 3, "name": "TestAd3", "surname": "TestSoyad3", "age": 33, "createdOn": new Date(), "isActive": false }];

//Services
var dovizList = [];
var url = "https://finans.truncgil.com/today.json";

function havadurumu(res) {
    axios.get(url).then(response => {
        console.log(response.data.name);
        dovizList = response.data;
    });
}

api.get("/doviz", async function (req, res) {
    await axios.get(url).then(response => {

        dovizList = response.data;
    });
    console.log(dovizList);
    res.status(200).json(dovizList);
});

api.get("/", function (req, res) {
    var list = personels.filter(item => item.isActive);
    var result = [];
    //Alttaki foreach dto mantığı...
    // list.forEach(function (item, index) {
    //     result.push({
    //         name: item.name,
    //         surname: item.surname
    //     });
    // })
    console.log(list);
    res.status(200).json(list);
    // res.send(personels);
});
api.get("/:id", function (req, res) {
    let find = personels.find(function (item) {
        return item.id === parseInt(req.params.id);
    })
    if (find) {
        res.status(200).json(find);
    } else {
        res.status(404).json("Kullanıcı Bulunamadı");
    }
});

api.post("/", function (req, res) {
    let itemIds = personels.map(item => item.id);
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    let active = true;

    let person = {
        id: newId,
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        createdOn: new Date(),
        isActive: active
    };
    personels.push(person);
    res.send("Kayıt Başarılı Bir Şekilde Eklendi");
})

api.delete("/:id", function (req, res) {
    let person = personels.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (person) {
        let targetIndex = personels.indexOf(person);
        personels.splice(targetIndex, 1);
        res.status(201).json({ message: "Kayıt Silindi" });
    } else {
        res.status(404).json({ message: "Silenecek Kullanıcı Bulunamadı" });
    }
})

api.put("/:id", function (req, res) {
    let person = personels.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (person) {
        let updated = {
            id: person.id,
            name: req.body.name,
            surname: req.body.surname,
            age: req.body.surname
        };
        let targetIndex = data.indexOf(person);

        data.splice(targetIndex, 1, updated);
        res.sendStatus(204);
    }
})