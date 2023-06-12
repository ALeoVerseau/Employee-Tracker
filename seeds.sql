INSERT INTO department (dept_name)
VALUES
    ("Legal"),
    ("Sales"),
    ("Finance"),
    ("Engineering");

INSERT INTO roles (title, salary, department_id)
VALUES
    ("Legal Team Lead", "250000", 1),
    ("Lawyer", "190000", 1),
    ("Sales Lead", "100000", 2),
    ("Salesperson", "80000", 2),
    ("Accountant Manager", "160000", 3),
    ("Accountant", "125000", 3),
    ("Lead Engineer", "150000", 4),
    ("Software Engineer", "120000", 4);


INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
    ("Sarah", "Lourd", 1, NULL),
    ("Tom", "Allen", 1, 1),
    ("John", "Doe", 2, 2),
    ("Mike", "Chan", 2, NULL),
    ("Kunal", "Singh", 3, 3),
    ("Malia", "Brown", 3, NULL),    
    ("Ashley", "Rodriguez", 4, 4),
    ("Kevin", "Tupik", 4, NULL);

