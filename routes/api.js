const fs = require('fs');
const db = require('../db/db.json');
const uniqueId = require('uniqid');

// routes, html get request, api post request w| unique id
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        req.body['id'] = uniqueId();
        db.push(req.body);
        res.json(db);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
    })
    // delete note, hopefully .. 
    app.delete('/api/notes/:id', (req, res) => {
        let noteToDelete = db.findIndex(i => i.id === req.params.id);
        db.splice(noteToDelete, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.end();
    })
}
