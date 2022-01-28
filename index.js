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
    const employee2 = new Engineer();
    const employee2role = employee2.getRole()
    const employee3 = new Engineer();
    const employee4 = new Intern();
    const employee5 = new Intern();
    const index = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="style.css" rel="stylesheet">
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
                <p id="name">${employee1.name}</p>
                <p id="id">${employee1.id}</p>
                <p id="email">${employee1.email}</p>
                <p id="office">${employee1.office}</p>
            </div>
            <div></div>
            <div>
                <h4 id="manager"></h4>
                <p id=employee2role>${employee2.name}</p>
                <p id="id">${employee2.id}</p>
                <p id="email">${employee2.email}</p>
                <p id="office">${employee2.office}</p>
            </div>
            <div></div>
            <div>
                <h4 id="manager"></h4>
                <p id="name">${employee3.name}</p>
                <p id="id">${employee3.id}</p>
                <p id="email">${employee3.email}</p>
                <p id="office">${employee3.office}</p>
            </div>
            <div></div>
            <div>
                <h4 id="manager"></h4>
                <p id="name">${employee4.name}</p>
                <p id="id">${employee4.id}</p>
                <p id="email">${employee4.email}</p>
                <p id="office">${employee4.office}</p>
            </div>
            <div></div>
            <div>
                <h4 id="manager"></h4>
                <p id="name">${employee5.name}</p>
                <p id="id">${employee5.id}</p>
                <p id="email">${employee5.email}</p>
                <p id="office">${employee5.office}</p>
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

