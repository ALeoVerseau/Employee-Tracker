DROP DATABASE IF EXIST empoyees_db;
CREATE DATABASE empoyees_db;

USE empoyees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) NOT NULL,
);

CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL, 
    department_id INT,
    FOREIN KEY (department_id) REFERENCES department(id) ONO DELETE SET NULL
)

CREATE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    FOREIN KEY (role_id) REFERENCES role(id),
    FOREIN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL 
) 