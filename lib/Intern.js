const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, title) {
        super(name, email, id, title);
    }

    getOther(other) {
        return this.other = `School: ${other}`;
    }
};

module.exports = Intern;