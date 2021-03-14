const fs = require('fs');
const db = require('../db/db.json');
const uniqueId = require('uniqueid');

// routes, html get request, api post request
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        req.body['id'] = uniqueId();
        db.push(req.body);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json(db);
    })
}
