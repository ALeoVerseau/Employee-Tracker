const inquirer = require("inquirer");
const mysql = require("mysql2");


const connect = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "",
        database: "employees_db",
    },
    console.log("Connected to the employees_db table")
); 

function viewDepartments () {
  connect.query('SELECT * FROM department', (err, result) => {
    if (err) throw err;
    console.table(result);
    homeScreen();
  })
}
function viewRoles () {
  connect.query('SELECT * FROM roles', (err, result) => {
    if (err) throw err;
    console.table(result);
    homeScreen();
  })
}
function viewEmployees () {
  connect.query('SELECT * FROM employees', (err, result) => {
    if (err) throw err;
    console.table(result)
    homeScreen();
  })
}

function homeScreen () {inquirer.prompt([
  {
    type: 'list',
    name: 'function',
    message: 'select an action',
    choices: ['Add Department', 'Add Roles', 'Add Employees', 'View Departments', 'View Roles', 'View Employees']
  }
])


.then((answers) => {
  switch(answers.function) {
    case 'Add Department':
        addDepartment();
        return;
    case 'Add Roles':
        addRoles();
        return;
    case 'Add Employees':
        addEmployees();
        return;
    case 'View Departments':
        viewDepartments();
        return;
    case 'View Roles':
        viewRoles();
        return;
    case 'View Employees':
        viewEmployees();
        return;
    default:
    break;
  }
})
}

const addDepartment = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'department',
      message: 'Enter a department name',
    },
  ])

  .then((answer) => {
    const department = answer.department;
    const sq1 = `INSERT INTO department (dept_name) VALUES ('${answer.department}')`;
    
    connect.query(sq1, (err, result) => {
      if (err) throw err;
      // console.log(result);
      homeScreen();
    });
  })
}

const addRoles = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter a job title',
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Enter the salary',
    },
    {
      type: 'input',
      name: 'departmentId',
      message: 'Enter a department id',
    },
  ])
  .then((answer) => {
    const title = answer.title;
    const salary = answer.salary;
    const departmentId = answer.departmentId;
    const sq1 = `INSERT INTO roles (title, salary, department_id) VALUES ('${title}', '${salary}', ${departmentId})`;
    
    connect.query(sq1, (err, result) => {
      if (err) throw err;
      // console.log(result);
      homeScreen();
    });
  })
}
const addEmployees = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter a first name',
    },
    {
      type: 'input',
      name: 'lastName',
      message: 'Enter a last name',
    },
    {
      type: 'input',
      name: 'rolesId',
      message: 'Enter a roles Id',
    },
    {
      type: 'input',
      name: 'managerId',
      message: 'Enter a manager',
    },
  ])

  .then((answer) => {
    const firstName = answer.firstName;
    const lastName = answer.lastName;
    const roles = answer.rolesId;
    const manager = answer.managerId;
    const sq1 = `INSERT INTO employees (first_name, last_name, roles_id, manager_id) VALUES ('${firstName}', '${lastName}', ${roles}, ${manager})`;
    
    connect.query(sq1, (err, result) => {
      if (err) throw err;
      // console.log(result);
      homeScreen();
    });
  })
}

homeScreen();