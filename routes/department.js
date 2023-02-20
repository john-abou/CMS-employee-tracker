// Define the department router
const department = require('express').Router();
const db = require('../server');

// GET route for displaying the departments
department.get('/', (req,res) => {

});

// POST route for adding a department to the list of departments
department.post('/', (req,res) => {

});

// Put route for updating a department's information
department.put('/', (req,res) => {

});

// Export the roles router
module.exports = department;