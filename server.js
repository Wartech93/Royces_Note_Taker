const express = require('express');
const path = require('path');
const { clog } = require('./Develop/middleware/clog');
const api = require('./Develop/routes/index.js');


const PORT = process.env.port || 3001;

const app = express();

// Import custom middleware clog
app.use(clog);

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, '/Develop/public/index.html'))
);

app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/Develop/public/pages/notes.html'))
);
//Wildcard to direct users to 404 page
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/Develop/public/pages/404.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);