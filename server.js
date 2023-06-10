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
    choices: ['Add Department', 'Add Role', 'Add Employee', 'View Departments', 'View Roles', 'View Employees']
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
    case 'Add Employee':
        addEmployee();
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

  .then((answers) => {
    const department = answers.department;
    const sq1 = `INSERT INTO department (name) VALUES ('${answers.department}')`;
    
    connection.query(sq1, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  })
}

const addRoles = () => {
  return inquirer.prompt([
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
      message: 'Enter a department Id',
    },
  ])

  .then((answers) => {
    const title = answers.title;
    const salary = answers.salary;
    const departmentId = answers.departmentId;
    const sq1 = `INSERT INTO role (title, salary, department_id) VALUES ('${answers.title}', '${answers.salary}', ${answers.departmentId})`;
    
    connect.query(sq1, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  })
}
const addEmployee = () => {
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

  .then((answers) => {
    const firstName = answers.firstName;
    const lastName = answers.lastName;
    const roles = answers.rolesId;
    const manager = answers.managerId;
    const sq1 = `INSERT INTO employee (first_name, last_name, roles_id, manager_id) VALUES ('${answers.firstName}', '${answers.lastName}', ${answers.rolesId}, ${answers.managerId})`;
    
    connection.query(sq1, (err, result) => {
      if (err) throw err;
      console.log(result);
    });
  })
}

homeScreen();