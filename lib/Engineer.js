const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, email, github, getGithub, getRole) {
        super(name, email)
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;