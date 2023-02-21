// Define the department router
const department = require('express').Router();
const db = require('../config/db');

// GET route for displaying the departments
department.get('/', (req,res) => {
    // Define the query string in a variable
    const queryString = `SELECT * FROM department`;

    // Query the database
    db.query(queryString, (err, results) => {
        if (err) {
            res.json({
                message: "error",
                error: err
            });
        } else {
            res.json({
                message: "success",
                data: results
            });
        }
    });
});

// POST route for adding a department to the list of departments
department.post('/', (req,res) => {
    // Retrieve the department from the client request
    const name = req.body["department_name"];

    // Define the query string in a variable
    const queryString = `INSERT INTO department (department_name) VALUES (?)`;

    // Query the database
    db.query(queryString, name, (err, data) => {
        if (err) {
            res.json({
                message: "error",
                error: err
            });
        } else {
            res.json({
                message: "success",
                results: data
            });
        }
    });
});

// Export the roles router
module.exports = department;