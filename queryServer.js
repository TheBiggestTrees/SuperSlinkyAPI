
const GameDig = require('gamedig');
const express = require('express');
const cors = require('cors');
const app = express()

app.use(cors());

app.get('/minecraft', function(req, res) {
    GameDig.query({
        type: 'minecraft',
        host: 'mc.superslinkyserver.com'
    }).then((state) => {
        res.json(state);
    }).catch((error) => {
        error = "Server is offline"
        res.json({error: "Server is offline"});
    });
});

app.get('/rust', function(req, res) {
    GameDig.query({
        type: 'rust',
        host: '98.172.226.199',
        port: 28016
    }).then((state) => {
        res.json(state);
    }).catch((error) => {
        error = "Server is offline"
        res.json({error: "Server is offline"});
    });
});

app.get('/fivem', function(req, res) {
    GameDig.query({
        type: 'fivem',
        host: '98.172.226.199',
        port: '30120'
    }).then((state) => {
        res.json(state);
    }).catch((error) => {
        error = "Server is offline"
        res.json({error: "Server is offline"});
    });
})

app.get('/assettocorsa', function(req, res) {
    GameDig.query({
        type: 'assettocorsa',
        host: '98.172.226.199',
        port: '9600'
    }).then((state) => {
        res.json(state);
    }).catch((error) => {
        error = "Server is offline"
        res.json({error: "Server is offline"});
    });
})

app.listen(3000)