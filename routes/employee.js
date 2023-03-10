// Define the employees router
const employee = require('express').Router();
const db = require('../config/db');

// GET route for displaying the employees
employee.get('/', (req,res) => {
 // Define the query string in a variable
    const queryString = `SELECT e.id, e.first_name, e.last_name, r.title AS title, department_name, salary, CONCAT(m.first_name, " ", m.last_name) as Manager FROM employee AS e INNER JOIN roles AS r ON e.role_id = r.id INNER JOIN department AS d ON r.department_id = d.id LEFT JOIN employee AS m ON e.manager_id = m.id`;

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

// POST route for adding an employee to the employees table
employee.post('/', (req,res) => {
    // Extract inputs from the request
    const { first_name, last_name, role_id, manager_id } = req.body;
    const params = [first_name, last_name, role_id, manager_id];

    // Define the query 
    const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`

    // Add to the database
    db.query(query, params, (err,data) => {
        if (err) {
            res.json({
                message: "error",
                results: err
            });
        } else {
            res.json({
                message: "success",
                results: data
            });
        }
    }) 
});

// Put route for updating an employee's information
employee.put('/', (req,res) => {
    // Extract inputs from the request
    const { role_id, manager_id, employee_id } = req.body;
    const params = [role_id, manager_id, employee_id];

    // Define the queries
    const query = `UPDATE employee SET role_id = ?, manager_id = ? WHERE id = ?`;

    // Call the query to update employees
    db.query(query, params, (err, results) => {
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
// Export the employee router
module.exports = employee;
