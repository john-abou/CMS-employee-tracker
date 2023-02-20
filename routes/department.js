// Define the department router
const department = require('express').Router();
const db = require('../server');

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
    const departmentName = req.body["depName"];

    // Define the query string in a variable
    const queryString = `INSERT INTO department (departmentName) VALUES (?)`;

    // Query the database
    db.query(queryString, departmentName, (err, results) => {
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

// Put route for updating a department's information
department.put('/', (req,res) => {
    // Retrieve the department from the client request
    const departmentName = req.body["depName"];
    const newDepartmentName = req.body["newDepName"];
    const params = [newDepartmentName, departmentName];

    // Define the query string in a variable
    const queryString = `UPDATE department SET departmentName = ? WHERE departmentName = ?`;

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

// Export the roles router
module.exports = department;