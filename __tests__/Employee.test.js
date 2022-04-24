const Employee = require('../lib/Employee');

test('employee has name, email and job title values', () => {
    const employee = new Employee ('Al', 'gob@email.com', null, 'employee')

    expect(employee.name).toBe('Al');
    expect(employee.email).toBe('gob@email.com');
    expect(employee.title).toBe('employee')
});