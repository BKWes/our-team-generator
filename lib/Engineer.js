const Employee = require('./Employee');

function Engineer() {
    Object.assign(Engineer, Employee);
};

module.exports = Engineer;