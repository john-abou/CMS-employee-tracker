// Import inquirer
const inquirer = require('inquirer');

// Define options
const options = ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"];

// Define prompt questions and properties needed for additions/updates to tables
const questions = [{
    type: 'list',
    name: 'options',
    message: 'What would you like to do?',
    choices: options
}];
const addDepartment = [{}];
const addRole = [{}];
const addEmployee = [{}];
const updateEmployeeRole = [{}];

inquirer.prompt(questions)
    .then((answers) => {
        switch (answers.options) {
            case "view all departments":
                
                break;
            case "view all roles":

                break;
            case "view all employees":
        
                break;
            case "add a department":

                break;
            case "add a role":

                break;
            case "add an employee":

                break;
            case "update an employee role":

                break;
            default:

                break;
        }
    });