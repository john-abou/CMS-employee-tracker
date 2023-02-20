-- Data for the department table
INSERT INTO department (department_name) 
    VALUES ('Sales'), 
    ('Engineering'), 
    ('Finance'), 
    ('Legal'),
    ('Human Resources'),
    ('Marketing'),
    ('Customer Service'),
    ('Operations');

-- Data for the roles table
INSERT INTO roles (title, salary, department_id)
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
INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES ('John', 'Doe', 1, NULL),
    ('Jane', 'Doe', 2, 1),
    ('John', 'Smith', 3, NULL),
    ('Jane', 'Smith', 4, 3),
    ('John', 'Jones', 5, NULL),
    ('Jane', 'Jones', 6, NULL),
    ('John', 'Brown', 7, 6),
    ('Jane', 'Brown', 8, NULL),
    ('John', 'White', 9, 8),
    ('Jane', 'White', 10, NULL),
    ('John', 'Black', 11, 10),
    ('Jane', 'Black', 11, 10),
    ('John', 'Green', 11, 10),
    ('Jane', 'Green', 12, NULL),
    ('John', 'Blue', 13, 12),
    ('Jane', 'Blue', 13, 12),
    ('John', 'Pink', 14, NULL),
    ('Jane', 'Pink', 15, 14);