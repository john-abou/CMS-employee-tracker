-- Create a test database to use in this app
DROP DATABASE IF EXISTS CMS;
CREATE DATABASE CMS;

-- Set the active db to the test db
USE CMS;

-- Drop the tables if they already exist
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS employee;

-- Create a table to store the departments
CREATE TABLE department (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
);
-- Create a table to store the roles
-- Primary key is roleID, foreign key used to extract department name from department table
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    salary INT NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) 
    REFERENCES department(id)
);

-- Create a table to store the employees 
-- primary key is employeeID, foreign keys used to extract job title and department names from roles and department tables
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id VARCHAR(30),
    FOREIGN KEY (role_id) 
    REFERENCES roles(id)
);

source db/seed.sql;