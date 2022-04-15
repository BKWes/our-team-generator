const inquirer = require('inquirer');

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
            message: 'Would you like to add another employee?'
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
      .then((engineerAnswers) => {
        console.log(engineerAnswers);
        if ({ employeeType: ['Engineer']} ) {
            engineerPrompt()
        } else if ({ employeeType: ['Intern'] }) {
            internPrompt()
        } else {
            // finish prompt and generate HTML with given
        }
    });
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
            message: 'Would you like to add another employee?'
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
      .then((internAnswers) => {
        console.log(internAnswers);
        if ({ employeeType: ['Engineer']} ) {
            engineerPrompt()
        } else if ({ employeeType: ['Intern'] }) {
            internPrompt()
        } else {
            // finish prompt and generate HTML with given
        }
    });
}

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
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);
    if ({ employeeType: ['Engineer']} ) {
        engineerPrompt()
    } else if ({ employeeType: ['Intern'] }) {
        internPrompt()
    } else {
        // finish prompt and generate HTML with given
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });