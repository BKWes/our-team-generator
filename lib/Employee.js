function Employee(name, email, id, title) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = title;

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