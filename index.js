const fs = require('fs');
const inquirer = require('inquirer');
const inquirer2 = require('inquirer'); 
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
    {
        type: 'confirm',
        message: 'Would like to add another employee?',
        name: 'choice',
    }
])
.then((response) => {
    const {name, id, email, office, choice} = response;

    const employee1 = new Manager(name, id, email, office);

    if (choice === true){

    }
}
)