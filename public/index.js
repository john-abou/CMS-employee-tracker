// Import inquirer
const inquirer = require('inquirer');
const cTable = require('console.table');
const {questions, addDepartment, addRole, addEmployee, updateEmployeeRole} = require("./prompt");
const fetch = require('isomorphic-fetch');

inquirer.prompt(questions)
    .then((answers) => {
        const { action, table } = answers;
        switch (action) {
            case "view":
                fetch(`http://localhost:3001/api/${table}`, {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
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
            
            
            
            
            "view all departments":
                fetch('http://localhost:3001/api/department', {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                    },
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

            case "add a department":

                break;
            case "add a role":

                break;
            case "add an employee":

                break;
            case "update an employee role":

                break;
        }
    });