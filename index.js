const inquirer = require('inquirer');

function managerPrompt() {
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name"
    },
    {
        type: 'number',
        name: 'managerId',
        message: "Enter the manager's ID",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the manager's email"
    },
    {
        type: 'input',
        name: 'managerNum',
        message: "Enter the manager's office number"
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: "Would you like to add employees to your team?"
    },
    {
        type: 'checkbox',
        name: 'employeeType',
        message: 'Add an Engineer or Intern?',
        choices: ['Engineer', 'Intern'],
        when: ({ addEmployee }) => {
            if (addEmployee) {
                return true;
            } else {
                return false;
            }
        }
    },
  ])
  .then((managerData) => {
      console.log(managerData);
    if (!managerData.addEmployee) {
          console.log('prompt end');
          return
    }
    if (managerData.employeeType == 'Engineer' ) {
        console.log('adding engineer');
        engineerPrompt()
    } else if (managerData.employeeType == 'Intern') {
        console.log('adding intern');
        internPrompt()
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
}

function engineerPrompt() {
    inquirer
      .prompt([
        //   engineer name, id, github
        {
            type: 'input',
            name: 'engineerName',
            message: "What is this engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter this engineer's github name"
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Would you like to add another employee to your team?"
        },
        {
            type: 'checkbox',
            name: 'employeeType',
            message: 'Add an Engineer or Intern?',
            choices: ['Engineer', 'Intern'],
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true;
                } else {
                    return false;
                }
            }
        }
      ]).then((engineerData) => {
        console.log(engineerData);
        if (!engineerData.addEmployee){
            console.log('end prompt');
            return;
        }

        if (engineerData.employeeType == 'Engineer') {
            engineerPrompt()
        } else if (engineerData.employeeType == 'Intern') {
            internPrompt()
        }
      }) 
};

function internPrompt() {
    inquirer
      .prompt([
        //   intern name, ID, email, school
        {
            type: 'input',
            name: 'internName',
            message: "What is this intern's name?"
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter this intern's email address"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter this intern's school"
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: "Would you like to add another employee to your team?"
        },
        {
            type: 'checkbox',
            name: 'employeeType',
            message: 'Add an Engineer or Intern?',
            choices: ['Engineer', 'Intern'],
            when: ({ addEmployee }) => {
                if (addEmployee) {
                    return true;
                } else {
                    return false;
                }
            }
        }
      ]).then((internData) => {
        console.log(internData);
        if (!internData.addEmployee) {
            console.log('end of prompt');
            return;
        }

        if (internData.employeeType =- 'Engineer') {
            engineerPrompt()
        } else if (internData.employeeType =- 'Intern') {
            internPrompt()
        }
    })
};

managerPrompt();