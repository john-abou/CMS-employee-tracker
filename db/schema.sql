-- Create a test database to use in this app
DROP DATABASE IF EXISTS CMS;
CREATE DATABASE CMS;

-- Set the active db to the test db
USE CMS;

-- Create a sequence object to be used for ID's that auto-increment for columns that aren't primary keys
CREATE SEQUENCE mySequence START WITH 1 INCREMENT BY 1;

-- Create a table to store the departments
CREATE TABLE department (
    departmentID INT AUTO_INCREMENT PRIMARY KEY,
    departmentName VARCHAR(30) NOT NULL
);
-- Create a table to store the roles
-- Primary key is roleID, foreign key used to extract department name from department table
CREATE TABLE roles (
    roleID INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    departmentID INT NOT NULL,
    FOREIGN KEY (departmentID) 
    REFERENCES department(departmentID)
);

-- Create a table to store the employees 
-- primary key is employeeID, foreign keys used to extract job title and department names from roles and department tables
CREATE TABLE employee (
    employeeID INT DEFAULT (NEXT VALUE FOR MySequence);
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    roleID INT NOT NULL,
    departmentID INT NOT NULL,
    manager VARCHAR(30) NOT NULL,
    FOREIGN KEY (roleID) 
    REFERENCES roles(roleID),
    FOREIGN KEY (departmentID) 
    REFERENCES department(departmentID)
);