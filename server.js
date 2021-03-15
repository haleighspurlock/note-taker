// dependencies
const express = require('express');

// tells node that we are creating express server
const app = express();

// sets initial port
const PORT = process.env.PORT || 3000;

// sets up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// router
require('./routes/api')(app);
require('./routes/html')(app);

// listener
app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
});