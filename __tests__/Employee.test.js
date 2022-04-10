const Employee = require('../lib/Employee');

test('create Employee object with name', () => {
    const employee = new Employee('Jared');

    expect(employee.name).toBe('Jared');
});

test('employee object has an ID beginning at 1', () => {
    const employee = new Employee('Jared');
    
    expect(employee.id).toEqual(1);
});

test('employee has an email', () => {
    const employee = new Employee('Bev', 'beverly@google.com');

    expect(employee.email).toBe('beverly@google.com');
});

test('gets employee name', () => {
    const employee = new Employee('Bev');

    expect(employee.getName()).toBe('Bev');
});

test('get employee email', () => {
    const employee = new Employee('Chris', 'chris@apple.com');

    expect(employee.getEmail()).toBe('chris@apple.com');
});

test('get employee role', () => {
    const employee = new Employee('Chris');

    expect(employee.getRole()).toBe('Employee');
});