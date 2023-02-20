// Define prompt questions and properties needed for additions/updates to tables
const questions = [{
    type: 'list',
    name: 'action',
    message: 'Would you like to view a table or add/update a record?',
    choices: ['view', 'add', 'update']
}, {
    type: 'list',
    name: 'table',
    message: 'Which table?',
    choices: ['department', 'roles', 'employee']
}];
const addDepartment = [{
    type: 'input',
    name: 'department_name',
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
    name: '√',
    message: 'Please enter the new role department ID: '
    }
];
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

// Define functions to ensure acceptable responses by the user -- used in prompt on client side
const nonNumeric = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,./:"[]{}<>?!@#$%^&*()-=+_';
const varCharCheck = ( input, sqlLength ) => {
    if (input.length > sqlLength ) {
        throw new Error('Your input is too long')
    }
}

const intCheck = (input) => {
    if (nonNumeric.includes(input)) {
        throw new Error('Your input contains an invalid character.')
    }
}

module.exports = {questions, addDepartment, addRole, addEmployee, updateEmployeeRole, varCharCheck, intCheck};