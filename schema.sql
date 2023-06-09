DROP DATABASE IF EXIST empoyees_db;
CREATE DATABASE employees-empoyees_db;

USE empoyees_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL 
);

