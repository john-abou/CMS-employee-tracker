// Define the employees router
const employees = require('express').Router();
const db = require('../db/db');

// GET route for displaying the employees
employees.get('/', (req,res) => {

});

// POST route for adding an employee to the employees table
employees.post('/', (req,res) => {

});

// Put route for updating an employee's information
employees.put('/', (req,res) => {

});

// Put route for updating a department's information
department.put('/', (req,res) => {
    // Retrieve the department from the client request
    const name = req.body["depName"];
    const newName = req.body["newDepName"];
    const params = [newName, name];

    // Define the query string in a variable
    const queryString = `UPDATE department SET department_name = ? WHERE department_name = ?`;

    // Query the database
    db.query(queryString, params, (err, results) => {
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

// Export the employees router
module.exports = employees;