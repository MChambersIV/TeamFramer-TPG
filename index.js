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
        message: 'What is this Manager\'s name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is their employee id?',
        name: 'id',
    },
    {
       type: 'input',
       message: 'What is their email address?',
       name: 'email',
    },
    {
        type: 'input',
        message: 'What is their office number?',
        name: 'office',
    },
])
.then((response) => {
    const {name, id, email, office} = response;

    const employee1 = new Manager(name, id, email, office);


}
)