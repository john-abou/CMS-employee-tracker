// Define the roles router
const roles = require('express').Router();
const db = require('../db/db');

// GET route for displaying the employees
roles.get('/', (req,res) => {
    // Define the query string in a variable
    const queryString = `SELECT title, r.id, department_name, salary FROM roles AS r INNER JOIN department AS d WHERE d.id = r.department_id`;

    // Query the database
    db.execute(queryString, (err, results) => {
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

// POST route for adding a job to the roles table
roles.post('/', (req,res) => {
    // Extract the name, salary and department from the request
    const {title, salary, depID} = req.body;
    const params = [title, salary, depID];
    // const title = req.body['title'];
    // const salary = req.body['salary'];
    // const depID = req.body['depID'];

    // Define the query
    const query = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`

    db.query(query, params, (err, results) => {
        if (err) {
            res.json({
                message: "error",
                result: err
            });
        } else {
            res.json({
                message: "success",
                result: results
            });
        }
    });
});

// Put route for updating a role's information
roles.put('/', (req,res) => {

});

// Export the roles router
module.exports = roles;