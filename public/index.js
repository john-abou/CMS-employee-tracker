// Import modules
const inquirer = require('inquirer');
const fetch = require('isomorphic-fetch');

// Import prompts and functions from other files
const {questions, addDepartment, addRole, addEmployee, updateEmployeeRole} = require("../helpers/prompt");
const { postFetch, getFetch, putFetch } = require("../helpers/client-requests");

inquirer.prompt(questions)
    .then((answers) => {
        const { action, table } = answers;
        console.log(answers);
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
                                postFetch(table, params);
                            });
                        break;
                    case "roles":
                        inquirer.prompt(addRole)
                            .then((params) => {
                                postFetch(table, params);
                            });
                        break;
                    case "employee":
                        inquirer.prompt(addEmployee)
                            .then((params) => {
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
                                putFetch(table, params);
                            });
                        break;
                    }
                    break;
        }
    });