const inquirer = require("inquirer");
const express = require("express");
const mysql2 = require("mysql2");

const app = express(); 

const connect = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: " ",
        database: "employees_db",
    },
    console.log("Connected to the employee_db table")
); 