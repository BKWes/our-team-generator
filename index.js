const inquirer = require('inquirer');


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
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });