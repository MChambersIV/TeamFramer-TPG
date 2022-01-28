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

    const index = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Fake Biz</title>
    </head>
    <body>
        <header>
            <h1>Fake Biz</h1>
        </header>
        <main>
            <h2>Team Roster</h2>
            <div>
                <h4 id="manager">Manager</h4>
                <p id="name">${name}</p>
                <p id="id">${id}</p>
                <p id="email">${email}</p>
                <p id="office">${office}</p>
            </div>
            <div></div>
            <div></div>
        </main>
        <footer>
    
        </footer>
        
    </body>
    </html>`

    fs.writeFile('./dist/index.html', index, () => {
        console.log("Generating index.html");
    });
})

