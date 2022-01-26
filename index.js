const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');


inquirer 
.prompt([
    {
        type: 'input',
        message: 'What is their name?',
        name: 'name',
    },
    {
       type: 'input',
       message: 'What is their id?',
       name: 'id',
    },
    {
        type: 'input',
        message: 'What is their email?',
        name: 'email',
    },
])
.then((response) => {
    const {name, id, email} = response;

    const employee = new Employee(name, id, email)


}
)