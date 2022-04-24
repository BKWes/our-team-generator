const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/html-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// rewrite inquirer prompt
const userPrompt = employeeData => {
    if (!employeeData) {
        employeeData = [];
    }
// pass in employee data and create an empty array if it does not already exist

// first ask employee job title, then name, and email
    return inquirer.prompt([
        {
            type: 'list',
            name: 'title',
            message: "What is this employee's job title?",
            choices: ['Manager', 'Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is this employee's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("You must enter this employee's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is this employee's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("You must provide an email");
                    return false;
                }
            }
        },
        // if engineer ask github
        {
            type: 'input',
            name: 'github',
            message: "What is this engineer's github?",
            when: (answers) => answers.title === 'Engineer'
        },
        // if intern ask school 
        {
            type: 'input',
            name: 'school',
            message: "Where does this intern attend school?",
            when: (answers) => answers.title === 'Intern'
        },
        // if manager ask office number
        {
            type: 'input',
            name: 'office',
            message: "What is this manager's office number?",
            when: (answers) => answers.title === 'Manager'
        },
        // ask for another employee?
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
    .then(employeeResults => {
        employeeData.push(employeeResults)
        if (employeeResults.addEmployee) {
            return userPrompt(employeeData);
        } else {
            return employeeData;
        }
    })
}
// push results to employee data array in promise - if add another employee return function; else- return data


userPrompt()
    .then(employeeData => {
        const pageData = [];
        console.log(employeeData);
        // loop through by job title and make objects to push to page data
        for (let i=0; i<employeeData.length;i++) {
            if (employeeData[i].title === 'Manager') {
                const managerObject = new Manager(employeeData[i].name, employeeData[i].email, employeeData[i].title);
                managerObject.getOther(employeeData[i].office);
                pageData.push(managerObject);
            }
            if (employeeData[i].title === 'Engineer') {
                const engineerObject = new Engineer(employeeData[i].name, employeeData[i].email, employeeData[i].title);
                engineerObject.getOther(employeeData[i].github);
                pageData.push(engineerObject);
            }
            if (employeeData[i].title === 'Intern') {
                const internObject = new Intern(employeeData[i].name, employeeData[i].email, employeeData[i].title);
                internObject.getOther(employeeData[i].school);
                pageData.push(internObject);
            }
        }
        return pageData;
    })
    .then(pageData => {
        const htmlPage = generatePage(pageData);
        fs.writeFile('./dist/index.html', htmlPage, err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Your webpage has been created. Look for index.html in /dist folder')
        })
        
    });