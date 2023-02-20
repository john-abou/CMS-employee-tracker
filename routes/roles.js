// Define the roles router
const roles = require('express').Router();
const db = require('../db/db');

// GET route for displaying the employees
roles.get('/', (req,res) => {

});

// POST route for adding a job to the roles table
roles.post('/', (req,res) => {

});

// Put route for updating a role's information
roles.put('/', (req,res) => {

});

// Export the roles router
module.exports = roles;