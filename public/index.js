// Import modules
const inquirer = require('inquirer');
const fetch = require('isomorphic-fetch');

// Import prompts and functions from other files
const {questions, addDepartment, addRole, addEmployee, updateEmployeeRole} = require("../helpers/prompt");
const { postFetch, getFetch } = require("../helpers/client-requests");

inquirer.prompt(questions)
    .then((answers) => {
        const { action, table } = answers;
        switch (action) {
            case "view":
                getFetch(table);
                break;
            case "add":
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




/*
                postFetch(table,)
                fetch(`http://localhost:3001/api/${table}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( req ),
                })
                    .then( (response) => {
                        if (!response.ok) {
                            throw new Error('Something went wrong');
                        } 
                        return response.json();
                        })
                    .then( (data) => {
                        const table = cTable.getTable(data['data']);
                        console.log(table);
                    });
                break;
                */
            case "update an employee role":

                break;
        }
    });