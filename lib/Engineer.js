const Employee = require('./Employee');

class Engineer extends Employee {

    constructor(name, email, id, title) {
        super(name, email, id, title)
    }
    getOther(other) {
        return this.other = `GitHub: <a href="https://github.com/${other}">${other}</a>`
    }
};

module.exports = Engineer;