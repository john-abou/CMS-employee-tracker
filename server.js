// Import the necessary modules
const express = require('express');
const path = require('path');
const app = express();

// Import custom middleware and the api route
const middleware = require('./middleware/cLog');
const api = require('./routes/index')

// Define the port
const port = process.env.PORT || 3001;

// Set up the middleware for the server
app.use(express.json);
app.use(express.urlencoded({extended: true}));

// Set up the custom middleware for the server
app.use(middleware);

// Set up the /api route
app.use('/api', api);

// Set the root for the app to use
app.use(express.static('public'));

// Create a wildcard to catch all requests sent to a route that doesn't exist.
app.get('*', (req, res) => {
    res.status(404).json({
        message: "You've attempted to reach a URL that doesn't exist."
    });
});

// Let the server listen on the given port
app.listen(port, (err) => {
    err ? console.log(err) : console.log(`App listening at http://localhost:${PORT}`)
});

