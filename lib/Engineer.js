const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, email, github) {
        super(name, email)
        this.github = github;

        // Engineer.prototype.getGithub = function() {
        //     return this.github;
        // };

        // Engineer.prototype.getRole = function() {
        //     return 'Engineer';
        // }
    }
    static getGithub = function() {
        return this.github;
    }
    static getRole = function() {
        return 'Engineer';
    }
};

module.exports = Engineer;