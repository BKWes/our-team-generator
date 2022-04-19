const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, title) {
        super(name, email, id, title);
    }
    getOther(other) {
        return this.other = `Office Number: ${other}`;
    }
    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;