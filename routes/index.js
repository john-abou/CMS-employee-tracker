// Import the necessary libraries
const express = require('express');
const app = express();

// Import the routes for department, employees and roles
departmentRouter = require('./department');
employeesRouter = require('./employees');
rolesRouter = require('./roles');

// Use the various routes in the express app
app.use('/department', departmentRouter);
app.use('/employees', employeesRouter);
app.use('/roles', rolesRouter);

// Export the express app for the /api route
module.exports = app;