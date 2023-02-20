-- Data for the department table
INSERT INTO department (departmentName) 
    VALUES ('Sales'), 
    ('Engineering'), 
    ('Finance'), 
    ('Legal'),
    ('Human Resources'),
    ('Marketing'),
    ('Customer Service'),
    ('Operations');

-- Data for the roles table
INSERT INTO roles (title, salary, departmentID)
    VALUES ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 120000, 2),
    ('Software Engineer', 100000, 2),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 130000, 4),
    ('Lawyer', 120000, 4),
    ('HR Lead', 130000, 5),
    ('HR Representative', 100000, 5),
    ('Marketing Lead', 130000, 6),
    ('Marketing Representative', 100000, 6),
    ('Customer Service Lead', 130000, 7),
    ('Customer Service Representative', 100000, 7),
    ('Operations Lead', 130000, 8),
    ('Operations Representative', 100000, 8);

-- Data for the employee table
INSERT INTO employee (firstName, lastName, roleID, departmentID, manager)
    VALUES ('John', 'Doe', 1, 1, NULL),
    ('Jane', 'Doe', 2, 1, 'John Doe'),
    ('John', 'Smith', 3, 2, NULL),
    ('Jane', 'Smith', 4, 2, 'John Smith'),
    ('John', 'Jones', 5, 3, NULL),
    ('Jane', 'Jones', 6, 4, NULL),
    ('John', 'Brown', 7, 4, 'Jane Jones'),
    ('Jane', 'Brown', 8, 5, NULL),
    ('John', 'White', 9, 5, 'Jane Brown'),
    ('Jane', 'White', 10, 6, NULL),
    ('John', 'Black', 11, 6, 'Jane White'),
    ('Jane', 'Black', 11, 7, 'Jane White'),
    ('John', 'Green', 11, 7, 'Jane White'),
    ('Jane', 'Green', 12, 8, NULL),
    ('John', 'Blue', 13, 8, 'Jane Green'),
    ('Jane', 'Blue', 13, 8, 'Jane Green'),
    ('John', 'Pink', 14, 8, NULL),
    ('Jane', 'Pink', 15, 8, 'John Pink');