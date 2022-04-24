const Manager = require('../lib/Manager');

test('manager has name, email and job title values', () => {
    const manager = new Manager ('Al', 'gob@email.com', 1 , 'manager')

    expect(manager.name).toBe('Al');
    expect(manager.email).toBe('gob@email.com');
    expect(manager.title).toBe('manager')
    expect(manager.id).toBe(1);
});

test('getOther to get office number', () => {
    const manager = new Manager('Adam');

    expect(manager.getOther('1234')).toBe('Office Number: 1234');
});