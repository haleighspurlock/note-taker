// dependencies 
const express = require('express');
const path = require('path');

// routing html get requests
module.exports = (app) => {
    app.use(express.static('public'));
    app.get('notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
    // if nothing found, re-route to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    })
}
