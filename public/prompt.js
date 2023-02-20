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

module.exports = {questions, addDepartment, addRole, addEmployee, updateEmployeeRole};