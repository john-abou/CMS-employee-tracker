// Define prompt questions and properties needed for additions/updates to tables
const options = ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"];
const questions = [{
    type: 'list',
    name: 'options',
    message: 'What would you like to do?',
    choices: options
}];
const addDepartment = [{
    type: 'input',
    name: 'department',
    message: 'Please enter the new department name: '
}];
const addRole = [{
    type: 'input',
    name: 'title',
    message: 'Please enter the new role title: '
    } , {
    type: 'input',
    name: 'salary',
    message: 'Please enter the new role salary: '
    } , { 
    type: 'input',
    name: 'department_id',
    message: 'Please enter the new role department ID: '
    }
];

// Look into auto fill for department ID based on role ID
const addEmployee = [{
    type: 'input',
    name: 'first_name',
    message: 'Please enter the new employee first name: '
    } , {
    type: 'input',
    name: 'last_name',
    message: 'Please enter the new employee last name: '
    } , { 
    type: 'input',
    name: 'salary',
    message: 'Please enter the new employee salary: '
    } , { 
    type: 'input',
    name: 'role_id',
    message: 'Please enter the new employee department ID: ' 
    } , {
    type: 'input',
    name: 'manager_id',
    message: 'Please enter the new employee manager ID: '
    }
];   
const updateEmployeeRole = [{
    type: 'input',
    name: 'employee_id',
    message: 'Please enter the employee ID: '
    } , {
    type: 'input',
    name: 'role_id',
    message: 'Please enter the new role ID: '
    } , {
    type: 'input',
    name: 'manager_id',
    message: 'Please enter the new manager ID: '
    }
];

module.exports = {options, questions, addDepartment, addRole, addEmployee, updateEmployeeRole};