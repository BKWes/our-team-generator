function Employee(name, email) {
    this.name = name;
    this.id = 1;
    this.email = email;

    Employee.prototype.getName = function() {
        return this.name;
    }

    Employee.prototype.getEmail = function() {
        return this.email;
    }

    Employee.prototype.getRole = function() {
        return 'Employee';
    }
};

module.exports = Employee;