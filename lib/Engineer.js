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
    // static getGithub = function() {
    //     return this.github;
    // }
    // static getRole = function() {
    //     return 'Engineer';
    // }
};

module.exports = Engineer;