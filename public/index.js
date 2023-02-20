// Import modules
const inquirer = require('inquirer');
const fetch = require('isomorphic-fetch');

// Import prompts and functions from other files
const {questions, addDepartment, addRole, addEmployee, updateEmployeeRole, varCharCheck, intCheck } = require("../helpers/prompt");
const { postFetch, getFetch, putFetch } = require("../helpers/client-requests");

inquirer.prompt(questions)
    .then((answers) => {
        const { action, table } = answers;
        switch (action) {
            case "view":
                getFetch(table);
                break;
            case "add":
                // Make a new prompt to retrieve table specific info used in the request
                switch (table) {
                    case "department":
                        inquirer.prompt(addDepartment)
                            .then((params) => {
                                // Make sure the params are acceptable
                                varCharCheck(params['department_name'], 30);

                                // Make the post request
                                postFetch(table, params);
                            });
                        break;
                    case "roles":
                        inquirer.prompt(addRole)
                            .then((params) => {
                                // Make sure the params are acceptable
                                varCharCheck(params['title'], 100);
                                intCheck(params['salary']);
                                intCheck(params['department_id']);

                                // Make the post request
                                postFetch(table, params);
                            });
                        break;
                    case "employee":
                        inquirer.prompt(addEmployee)
                            .then((params) => {
                                // Make sure the params are acceptable
                                varCharCheck(params['first_name'], 30);
                                varCharCheck(params['last_name'], 30);
                                intCheck(params['role_id']);
                                varCharCheck(params['manager_id'], 30); 

                                // Make the POST request
                                postFetch(table, params);
                            });
                        break;
                    }
                    break;
            case "update":
                // Make a new prompt to retrieve table specific info used in the request
                switch (table) {
                    case "department":
                        console.log(`Sorry, we don't have that feature for the ${table} table yet.`)
                        break;
                    case "roles":
                        console.log(`Sorry, we don't have that feature for the ${table} table yet.`)
                        break;
                    case "employee":
                        inquirer.prompt(updateEmployeeRole)
                            .then((params) => {
                                // Make sure the params are acceptable
                                intCheck(params['role_id']);
                                intCheck(params['manager_id']);
                                intCheck(params['employee_id']);

                                // Make the PUT request
                                putFetch(table, params);
                            });
                        break;
                    }
                    break;
        }
    });